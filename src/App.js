import {useState} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState(
    [
        {
            id:1,
            text: "Doctor Appoinment",
            day: "Feb 5th at 2.30pm",
            reminder:true,
        },
        {
            id:2,
            text: "Meeting at school",
            day: "Feb 5th at 2.30pm",
            reminder:true,
        },
        {
            id:3,
            text: "Food Shopping",
            day: "Feb 5th at 2.30pm",
            reminder:true,
        }
    ]
)
// Add Task

const addtask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])

}
// Delete Task

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id != id))
}
// Toggler Reminder

const toggler=(id)=>{
  setTasks(
    tasks.map((task)=>
      task.id === id?{...task,reminder:!task.reminder}: task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(showAddTask = true)} />
      {showAddTask && <AddTask addtask={addtask}/>}
      {tasks.length >0?(
        <Tasks tasks={tasks} dele={deleteTask} toggle={toggler}  />
      ):(
        "No Task,Happy Holiday!!"
      ) }
    </div>
  );
}

export default App;
