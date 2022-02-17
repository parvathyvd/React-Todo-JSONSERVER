import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks , setTasks] = useState([
    {
        id: 1,
        text: 'hi',
        day: 'this day',
        reminder: false
    },
    {
        id: 2,
        text: 'hello',
        day: 'Morning appt',
        reminder: true
    },
    {
        id: 3,
        text: 'how are you',
        day: 'Friday',
        reminder: false
    }
  ])

//FETCH TASK FROM JSON SERVER

useEffect(() => {
  const getTasks = async () => {
    const res = await fetchTasks();
    console.log(res)
    setTasks(res);
  }

  getTasks();
}, [])

//FETCH TASKS FROM JSON SERVER

const fetchTasks = async () => {
  const res = await fetch(`http://localhost:3001/tasks`);
  const data = await res.json();
  return data;
}
fetchTasks();

//FETCH TASKS FROM JSON SERVER

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`);
  const data = await res.json();
  return data;
}

//ADD TASK

const addTask = async(task) => {

  const res = await fetch(`http://localhost:3001/tasks/`,{
    method : 'POST',
      headers : {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data]);

  // console.log('tasks', task);
  // const id = Math.floor(Math.random()*1000) +1;
  // console.log(id);
  // const newTask = {id, ...task}
  // setTasks([...tasks,newTask]);
}
 


  // DELETE TASK

  const deleteTask = async (id) => {
    console.log('delete', id)

    await fetch(`http://localhost:3001/tasks/${id}`,{
      method : 'DELETE'
    });

    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }

  // Toggle Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}

    //PUT request for updating the server
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method: 'PUT',
        headers : {
          'Content-type' : 'application/json',
        },
        body : JSON.stringify(updatedTask)
  })

  const data = await res.json();


    console.log("on double click",id);
   const reminder =  tasks.map(task => task.id === id ? {...task,reminder : data.reminder} : task)
   setTasks(reminder);
  }

  // Show ADD Task

  const showAdd = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <>
     <div className="App ui raised very padded text container segment">
      <h1>Task Tracker</h1>
     <Header showAdd={showAdd} show={showAddTask} />
     {showAddTask && <AddTask  addTask = {addTask} />}
     {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleReminder}/> : 'No posts to show for now!'}
    </div>
    <div className="footer container segment">
    <Footer/>
    </div>
    </>
  );
}

export default App;
