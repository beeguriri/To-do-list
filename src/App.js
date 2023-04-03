import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import TodoBoard from './components/TodoBoard';


function App() {

  const[inputValue, setInputValue] = useState('');
  const[updateItem, setUpdateItem] = useState('');
  const[todoList, setTodoList] = useState([]);
  

  const addItem = () => {
    console.log('addItem :', inputValue)
    //기존아이템 뒤에 새로운 inputvalue 추가
    setTodoList([...todoList, { id: todoList.length+1, item: inputValue, isFinished: false}])

    //submit 클릭하면 인풋박스의 값 초기화
    setInputValue("");
  };

  const completeTodo = (click) => {

    //클릭하면 isFinished의 상태를 바꾸기
    setTodoList(todoList.map((item) => {
      if(click.id === item.id) {
        return {
          id: click.id,
          item: click.item,
          isFinished: !click.isFinished
        };
      } else {
        return item;
      }
    }))
  };

  const deleteTodo = (click) => {
    setTodoList(todoList.filter((item) => {
      return item.id !== click.id;
    }))
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

    setUpdateItem(newEntry);
  };

  // 동일id의 item 삭제하고
  // changeTodo에 저장되어있는 item 가져와서 반영
  const updateTodo = () => {
    let filterRecords = [...todoList].filter( (item) => (item.id !== updateItem.id));
    let updateRecord = [...filterRecords, updateItem]
    console.log('updateItem: ', updateItem)

    setTodoList(updateRecord);
    setUpdateItem('');
  };

  return (
    <div className="main">
      <br />
      <h3>Todo List App</h3>
      <br />



      {updateItem && updateItem.item ? (
        <>
          {/* Update Task */}
          <TextField value={updateItem && updateItem.item} 
              onChange= {(event) => changeTodo(event)}
              color="secondary" id='todo-item-input' label='Todo Item' variant='outlined' />
          <Button variant="outlined" onClick={updateTodo}>Update</Button>
          <Button variant="outlined" onClick={cancelUpdate}>Cancel</Button>
          <br /><br />
        </>
      ) : (
        <>
          {/* Add Task */}
          <TextField value={inputValue} 
            onChange= {(event) => setInputValue(event.target.value)}
                  color="secondary" id='todo-item-input' label='Todo Item' variant='outlined' />
          <Button variant="outlined" onClick={addItem}>Submit</Button>
          <br /><br />
        </>
      )}

      {/* Task List 보여지는 영역*/}
      {todoList && todoList.length ?  
        <TodoBoard todoList = {todoList} 
            completeTodo={completeTodo} 
            deleteTodo={deleteTodo} 
            setUpdateItem={setUpdateItem} /> : 'No Tasks...'}
      <br /><br />
    </div>
  );
}

export default App;

