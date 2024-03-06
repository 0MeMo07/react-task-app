import { useEffect, useState } from 'react'
import './css/App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'
function App() {
  const [tasks, setTasks] = useState([])

  const TaskValues = async (title, TaskDec) => {
    const response =await axios.post("http://localhost:3000/tasks", {
      title,
      TaskDec
    })
    const TaskContainer = [...tasks, response.data]
    setTasks(TaskContainer)
  }

  const fetchTasks = async()=>{
  const response = await axios.get("http://localhost:3000/tasks")
  setTasks(response.data)
  }
  useEffect(() => {
    fetchTasks()
  },[])

  const DeleteTaskById = async(id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeleteTask)
  }

  const EditTaskById = async(id, updateTitle, updateDec) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updateTitle,
      TaskDec: updateDec
    })
    const UpdateTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updateTitle,
          TaskDec: updateDec
        } 
      }
      return task;
    });
    setTasks(UpdateTask);
  };
  return (
    <>
    <div className='TaskContainer'>
      <TaskCreate onCreate={TaskValues}/>

      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={DeleteTaskById} onUpdate={EditTaskById}/>
    </div>
    </>
  )
}

export default App
