import { useState } from 'react'
import './css/App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
function App() {
  const [tasks, setTasks] = useState([])
  const TaskValues = (title, TaskDec) => {
    const TaskContainer = [
      ...tasks, {
        id:Math.round(Math.random() * 99999),
        title,
        TaskDec
      }
    ]
    setTasks(TaskContainer)
  }
  const DeleteTaskById = (id) => {
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeleteTask)
  }

  const EditTaskById = (id, updateTitle, updateDec) => {
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
