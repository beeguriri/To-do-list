import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import TodoBoard from './components/TodoBoard';


function App() {

  let index=0;

  const[inputValue, setInputValue] = useState('');
  const[todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log('addItem :', inputValue)
    //기존아이템은 유지하고, 새로운 inputvalue를 제일 앞에 추가
    setTodoList([
      { id: index, item: inputValue, isFinished: false}, ...todoList])

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
    })
    )
  };

  const deleteTodo = (click) => {
    setTodoList(todoList.filter((item) => {
      return item.id !== click.id;
    }))
  };

  return (
    <div className="main">
      <br />
      <h3>Todo List App</h3>
      <br />
      <TextField value={inputValue} 
            onChange= {(event) => setInputValue(event.target.value)}
            color="secondary" id='todo-item-input' label='Todo Item' variant='outlined' />
      <Button variant="outlined" onClick={addItem}>Submit</Button>
      <br /><br />
      <TodoBoard todoList = {todoList} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      <br /><br />
    </div>
  );
}

export default App;

