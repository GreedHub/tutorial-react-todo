import React, { useState } from 'react';
import Todo from './todo'
import './styles.css';

type TodoListProps = {
    text?:string
}

function TodoList(props:TodoListProps) {

  const [newTodo, setNewTodo] = useState<string>('');

  const [todos, setTodos] = useState<string[]>([
    "lavar la ropa",
    "pasear al perro",
    "comprar comida",
    "estudiar",
  ]);

  const addTodo = ()=>{
    setTodos(
      [...todos,newTodo]
    )
  }

  const updateNewTodo = (e:any)=>{
    setNewTodo(e.target.value);
  }

  const deleteTodoAtIndex = (index:number)=>{    
    const newTodos = todos.filter((_,idx)=> index!==idx);
    setTodos(newTodos)
  }

  return (
    <ul className="todo-list">
        {todos.map((todo,index) =>
         <Todo 
            text={todo} 
            key={index} 
            index={index} 
            deleteTodoAtIndex={deleteTodoAtIndex}
          />
        )}
        <li>
          <input type="text" name="" id="" onChange={updateNewTodo} value={newTodo}/>
          <button onClick={addTodo}>agregar</button>
        </li>
    </ul>
  );
}

export default TodoList;



/* SPAM

type Persona = {
  nombre:string
  apellido:string
  dni:string
  gro:string
}

  const misNros:number[] = [
    1,2,3,4,5,2
  ]




  const personas:Persona[] = [
    {
      nombre: "pepe",
      apellido: "lotas",
      dni: "123534564576",
      gro: "femenino",
    },
    {
      nombre: "pipo",
      apellido: "lotas",
      dni: "12345689",
      gro: "femenino",
    },
    {
      nombre: "papa",
      apellido: "lotas",
      dni: "123534576",
      gro: "masculino",
    }
  ]


  const dobles:number[] = misNros.map( nro => nro * 2 )
  const filtro:Persona[] = personas.filter( persona => persona.gro === "femenino" )
  const encontrar:Persona | undefined = personas.find( persona => persona.dni === "123534576" )
  const total:number = misNros.reduce( (acc,nro)=> acc + nro, 0 )
  

  misNros.forEach(nro=>{
    console.log(nro)
  })

  console.log({dobles,total,filtro,encontrar})


*/
