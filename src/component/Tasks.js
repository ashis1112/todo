import Task from './Task'

const Tasks=({tasks,dele,toggle})=>{
    return(
        <>
            {tasks.map((task)=>
            (
            <Task key={task.id} task={task} dele={dele} toggle={toggle}></Task>)
            
            )}
        </>
    )
}

export default Tasks