import { useState } from "react";

function TaskCreate({ onCreate, taskForUpdate, task, onUpdate }) {
    const [title, setTitle] = useState(task ? task.title : '')
    const [taskDesc, setTaskDesc] = useState(task ? task.TaskDec : '')
    const handleTitle = (event) => {
        setTitle(event.target.value);
    } 
    const handleTaskDesc = (event) => {
        setTaskDesc(event.target.value)
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        
        if(taskForUpdate){
            onUpdate(task.id, title, taskDesc)
        }
        else{
            onCreate(title, taskDesc)
        }
        setTitle('')
        setTaskDesc('')
    }
    return ( 
    <>
    {taskForUpdate ?( 
        <div className="TaskUpdate">
        <form className="task-update">
            <h3 style={{textAlign:"center"}}>Edit Task</h3>
            <label className="Task-Label">Edit Title</label>
            <input value={title} type="text" className="Task-input" onChange={handleTitle}/>
            <label className="Task-Label">Edit Description </label>
            <textarea value={taskDesc} className="Task-input" rows={5} onChange={handleTaskDesc}/>
            <button className="continue-application" onClick={handleSumbit}>
            <div>
                <div className="pencil" />
                <div className="folder">
                <div className="top">
                    <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
                    </svg>
                </div>
                <div className="paper" />
                </div>
            </div>
            Edit
            </button>
    
        </form>
        </div>
    ):( 
    <div className="TaskCreate">
    <h3>Please Add Task</h3>
    <form className="task-form">
        <label className="Task-Label">Title</label>
        <input value={title} type="text" className="Task-input" onChange={handleTitle}/>
        <label className="Task-Label">Enter Task </label>
        <textarea value={taskDesc} className="Task-input" rows={5} onChange={handleTaskDesc}/>
        <button className="continue-application" onClick={handleSumbit}>
        <div>
            <div className="pencil" />
            <div className="folder">
            <div className="top">
                <svg viewBox="0 0 24 27">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
                </svg>
            </div>
            <div className="paper" />
            </div>
        </div>
        Create Task
        </button>

    </form>
    </div>
    )}
    

    </> 
    );
}

export default TaskCreate;