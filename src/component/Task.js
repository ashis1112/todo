import {FaTimes} from 'react-icons/fa'

const Task=({task,dele,toggle})=>{
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=> toggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}}  onClick={()=> dele(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task 