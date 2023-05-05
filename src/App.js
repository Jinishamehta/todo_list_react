import './App.css';
import { Header } from  './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <Header />
      <AddTask tasks={ tasks } setTasks={ setTasks } task= { task } setTask={ setTask }/>
      <ShowTask tasks={ tasks } setTasks={ setTasks } task= { task } setTask={ setTask }/>      
    </div>
  );
}

export default App;
