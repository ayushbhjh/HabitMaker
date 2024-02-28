import React, { useState } from 'react'
import styles from './Input.module.css'
export default function Input() {
const[task,setTask] = useState([]);
const [newTask, setNewTask] = useState({what:'', where:'', why:'', date:''})
function handlechange(e){
  const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
}

function handleSave() {
  setTask([...task, newTask]);
setNewTask({ what: '', where: '', why: '', date: '' });
}

function handleDelete(index) {
  
  const updatedTasks = task.filter((i) => i ===index);
  setTask(updatedTasks);
}
  return (
    <>
    <div className={styles.heading}>
    <h1>Task Habit</h1>
    <input type="text" className={styles.input} name="what" value={newTask.what} onChange={handlechange} placeholder='What to do?'/>
    <input type="text" className={styles.input} name="where" value={newTask.where} onChange={handlechange} placeholder='Where to do?'  /> <br />
    <input type="text" className={styles.input} name="why" value={newTask.why} onChange={handlechange} placeholder='Why to do?'  />
    <input type="date" className={styles.input} name="when" value={newTask.when} onChange={handlechange} /><br />
    <button className={styles.button1} onClick={handleSave}>Save</button><br />
    {task.map((task, index) => (
        <div key={index}>
          <p>{task.what}</p>
          <p>{task.where}</p>
          <p>{task.why}</p>
          <p>{task.date}</p>
          <button className={styles.button2} onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}

    </div>
    
    </>
    
  )
}
