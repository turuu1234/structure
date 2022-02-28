import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import { useState } from 'react'
import AddTask from './AddTask'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Doctor Appointment',
        day : 'Saturday',
        reminder : true,
    },
    {
        id : 2,
        text : 'Bussiness meeting',
        day : 'Wednesday',
        reminder : true,
    },
    {
        id : 3,
        text : 'Schools meeting',
        day : 'Monday',
        reminder : true,
    },
])
//Add Task
const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//Toggle Reminder
const toggleReminder =(id)=>{
  setTasks(tasks.map(task=>task.id === id ? {...task, reminder:!task.reminder} : task))
}
//Delete Task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
  return (
    <div className='container'>
      <Header title = 'Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} changeTitle={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?(<Tasks tasks = {tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>) : 'No task here.'}
    </div>
  )
}

export default App