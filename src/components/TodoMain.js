import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import TodoBoard from './TodoBoard';
import TodoAppBar from './TodoAppBar';

import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, 
    getDocs, query, orderBy, } from "firebase/firestore";

const TodoMain = (probs) => {

    const db = getFirestore(probs.app);

    const[inputValue, setInputValue] = useState('');
    const[updateItem, setUpdateItem] = useState('');
    const[todoList, setTodoList] = useState([]);

    //데이터가 추가/상태변경/삭제/수정이 될때마다
    //각 함수에서 데이터베이스 접근하는게 아니라
    //database에 추가하고 다시 다운로드 하는식으로 데이터 플로우 변경
    const syncTodoItemListStateWithFirestore = () => {

        const q = query(collection(db, "inputValue"), orderBy("createdTime", "desc"));

        getDocs(q).then((querySnapshot) => {
            const firestoreTodoItemList = [];
            querySnapshot.forEach((doc) => {
                firestoreTodoItemList.push({
                    id: doc.id,
                    item: doc.data().item,
                    isFinished: doc.data().isFinished,
                    createdTime: doc.data().createdTime ?? 0,
                });
            });
            // console.log('firestoreTodoItemList', firestoreTodoItemList)
            
            setTodoList(firestoreTodoItemList);
        });
    }

    useEffect(() => {

        syncTodoItemListStateWithFirestore();

    }, []);
        

    const addItem = async() => {
        
        if(inputValue==="") {
        Swal.fire('할일을 입력하세요!')

        } else {
        //기존아이템 뒤에 새로운 inputvalue 추가
        // setTodoList([...todoList, { id: docRef.id, item: inputValue, isFinished: false}])
        
        await addDoc(collection(db, "inputValue"), {
            item: inputValue,
            isFinished: false,
            createdTime: Math.floor(Date.now() / 1000),
        });

        //데이터 베이스 동기화
        syncTodoItemListStateWithFirestore();

        // //submit 클릭하면 인풋박스의 값 초기화
        setInputValue("");
        }
    };

    const completeTodo = async (click) => {

        const todoItemRef = doc(db, "inputValue", click.id);
        await setDoc(todoItemRef, 
            { isFinished: !click.isFinished }, 
            { merge: true });

        //클릭하면 isFinished의 상태를 바꾸기
        // setTodoList(todoList.map((item) => {

        //     if(click.id === item.id) {
        //         return {
        //             id: click.id,
        //             item: click.item,
        //             isFinished: !click.isFinished
        //         };
        //     } else {
        //         return item;
        //     }
        // }))

        //데이터 베이스 동기화
        syncTodoItemListStateWithFirestore();
    };

    const deleteTodo = async (click) => {

        const todoItemRef = doc(db, "inputValue", click.id);
        // await deleteDoc(todoItemRef);

        Swal.fire({
            title: '할일을 삭제합니다!',
            showCancelButton: true,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed){
                deleteDoc(todoItemRef);
                syncTodoItemListStateWithFirestore();
                // setTodoList(todoList.filter((item) => {
                // return item.id !== click.id;
                // }))
            }
        })
    };

    const cancelUpdate = () => {

        setUpdateItem('');
    };

    // inputbox에서 변경된 내용 받아옴
    const changeTodo = (event) => {

        let newEntry = {
            id: updateItem.id,
            item: event.target.value,
            isFinished: updateItem.isFinished
        }

        console.log('newEntry', newEntry)
        setUpdateItem(newEntry);
    };

    // 동일id의 item 삭제하고
    // changeTodo에 저장되어있는 item 가져와서 반영
    const updateTodo = async () => {
    
        // let filterRecords = [...todoList].filter( (item) => (item.id !== updateItem.id));
        // let updateRecord = [...filterRecords, updateItem]
        // console.log('updateItem: ', updateItem)

        const todoItemRef = doc(db, "inputValue", updateItem.id);
        console.log('todoItemRef', todoItemRef)
        await setDoc(todoItemRef, 
            { item: updateItem.item},
            { isFinished: updateItem.isFinished }, 
            { merge: true });

        // setTodoList(updateRecord);
        syncTodoItemListStateWithFirestore();
        setUpdateItem('');
    };

    return(

        <div className="all">
            <div className="content">
                <div className="header">
                    {/* <h3>Todo List App</h3> */}
                    <TodoAppBar />
                </div>
                <div className="main">
                    {updateItem && updateItem.item ? (
                    <div className="update">
                        {/* Update Task */}
                        <TextField className="textfield" value={updateItem && updateItem.item} 
                        onChange= {(event) => changeTodo(event)}
                        color="secondary" id='todo-item-input' label='Todo Item' variant='outlined' />
                        <Button variant="outlined" onClick={updateTodo}>Update</Button>
                        <Button variant="outlined" onClick={cancelUpdate}>Cancel</Button>
                        <br /><br />
                    </div>
                    ) : (
                    <div className="add">
                        {/* Add Task */}
                        <TextField className="textfield" value={inputValue} 
                        onChange= {(event) => setInputValue(event.target.value)}
                        color="secondary" id='todo-item-input' label='Todo Item' variant='outlined' />
                        <Button variant="outlined" onClick={addItem}>Submit</Button>
                        <br /><br />
                    </div>
                     )}

                    {/* Task List 보여지는 영역*/}
                    <div className="list">
                        {todoList && todoList.length ?  
                        <TodoBoard todoList = {todoList} 
                        completeTodo={completeTodo} 
                        deleteTodo={deleteTodo} 
                        setUpdateItem={setUpdateItem} /> : '할일이 없습니다🐣'}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default TodoMain;