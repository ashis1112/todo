import {useState} from 'react'

const AddTask=({addtask})=>{
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const submit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        addtask({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='addTask' />
            </div>
            <div className='form-control'>
                <label>Day n Time</label>
                <input type='text' value={day} onChange={(e)=> setDay(e.target.value)} placeholder='add Day n Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>

    )

}

export default AddTask