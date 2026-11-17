import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [todos,setTodos]=useState([]);
 const [task,setTask]=useState("");
 const [editId,setEditId]=useState(null);

 const API="http://localhost:3000/todos";

 const handleSubmit=(e)=>{
     e.preventDefault();
     if(task.trim()===""){
      return 
     }
     if(editId===null){
      fetch(API,{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title:task,
          completed:false
        })
      }).then(()=>{
        setTask("");
        alert("task created");
        getTodos();
      })
     }else{
        fetch(`${API}/${editId}`,{
      method:"PATCH",
      headers:{
      "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:task
      })
    }).then(()=>{
      setTask("");
      setEditId(null);
      getTodos();
    })
     }

 }
const getTodos=()=>{
  fetch(API).then(res=>res.json())
  .then(data=>setTodos(data));

}
 const handleMark=(todo)=>{
    fetch(`${API}/${todo.id}`,{
      method:"PATCH",
      headers:{
      "Content-Type":"application/json"
      },
      body:JSON.stringify({
        completed:!todo.completed
      })
    }).then(()=>{
      getTodos();
    })
 }
 const handleEdit=(todo)=>{
   setEditId(todo.id);
   setTask(todo.title);
 }

 const handleDelete=(id)=>{
      fetch(`${API}/${id}`,{
      method:"DELETE",
     
    }).then(()=>{
      getTodos();
    })
 }

 useEffect(()=>{
  getTodos()
 },[]);

  return (
    <>
     <div className='container'>
      <h1>Todo app</h1>
      <form onSubmit={handleSubmit} >
         <input 
         type='text'
         placeholder='Enter Task'
         value={task}
         onChange={e=>setTask(e.target.value)}
         />
         <button type='submit'>{editId===null?"Add Task":"Update Task"}</button>
      </form>
      {todos.map(todo=>(
        <div className='todo' key={todo.id}>
          <span  className={todo.completed?"completed":""}>
          {todo.title}
          </span>
           <div className='buttons'>
            <button onClick={()=>handleMark(todo)}>{todo.completed?"Undo":"Mark Done"}</button>
            <button onClick={()=>handleEdit(todo)} >Edit</button>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>  
          </div>
          </div>
         
      ))}

     </div>
                
    </>
  )
}

export default App
