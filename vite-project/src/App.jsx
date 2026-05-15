import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList';

function App() {

  const[input,setInput]=useState("");
  const[tasks,setTasks]=useState([]);
  
//function to add a task
  const addTask=()=>{
    if(input.trim==="") return;

    const newTask={
      id:Date.now(),
      text:input,
      completed:false,
    }

    setTasks(...tasks, newTask);
    setInput("");
  }


  //function to delete a task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id));
  }

  //function to toggle it as completed
  const toggleComplete=(id)=>{
    setTasks(
       tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  //function to edit a task
  const editTask=(id,updatedText)=>{
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updatedText }
          : task
      )
    )
  }
  return(
    <div className='app'>
   <Header/>
   <div className='todo_container'>
    <div className='input-section'>
    
        <input 
        type="text"
        placeholder='What task do you want to do?'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
    </div>
   </div>
   </div>
  )
}

export default App;
