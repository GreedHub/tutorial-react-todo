import React from 'react';
import './styles.css';

type TodoProps = {
    text:string
    index: number
    deleteTodoAtIndex:(index:number)=>void
}

function Todo(props:TodoProps) {

  const {text,index,deleteTodoAtIndex} = props;

  return (
    <li className="todo">
        <input type="checkbox" name="cb" id="" />
        <label htmlFor="cb">{text}</label>
        <button onClick={()=>{deleteTodoAtIndex(index)}}>:(</button>
    </li>
  );
}

export default Todo;
