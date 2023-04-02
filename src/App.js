import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {

  const[inputValue, setInputValue] = useState('');
  const[todoList, setTodoList] = useState([]);
  
  const addItem = () => {

    console.log('addItem :', inputValue)
    //기존아이템은 유지하고, 새로운 inputvalue 추가
    setTodoList([...todoList, inputValue])
  }


  return (
    <div className="container App">
      <br /><br />
      <input value={inputValue} type="text" onChange=
        {(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
      <br /><br />
      <TodoBoard todoList = {todoList} />
      <br /><br />

    </div>
  );
}

export default App;
