
import './App.css';
import {useState,useRef} from 'react'

function App() {

  const [todolist,settodolist]=useState([])
  const [currenttask,setcurrenttask]=useState("")
  const Inputtask = useRef(null)
  const addTask =()=>{
    settodolist([...todolist,{task:currenttask,completed:false}])
    Inputtask.current.value = ""
    setcurrenttask("")
  }
  const deletetask = (tasktodelete)=>{
    settodolist(todolist.filter((task)=>{
      return task.task !== tasktodelete
    }))

  }
  const completetask = (tasktocomplete)=>{
    settodolist(todolist.map((task)=>{
      return task.task===tasktocomplete
      ? {task: tasktocomplete,completed:true}
      :{task:task.task,completed:task.completed?true:false}
    }))
  }
  return (
    <div className="App">
      <h1 id="h">ToDoList</h1>
      <div>
        <input 
        ref={Inputtask}
        type="text" placeholder="Write your task"
        onKeyDown={(event)=>{
          if(event.keyCode==13)addTask()
        }}
        onChange ={(event)=>{
          setcurrenttask(event.target.value)

        }} />
        <button onClick={addTask}>Add Task</button>
      </div>
    <hr />
    <ul>
      {todolist.map((val,key)=>{
        return (
        <div id="task">
          <li key={key}>{val.task}</li>
          <button onClick={()=>completetask(val.task)}>Completed</button>
          <button onClick ={()=>deletetask(val.task)}>Delete</button>
          {val.completed ? (<h1>Done✔</h1>)
          :(
            <h1>Yet to be done</h1>
          )}
        </div>
        )
        

      })}
    </ul>
    </div>
  );
}

export default App;
