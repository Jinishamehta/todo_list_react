import '../styles/AddTask.css'

export const AddTask = ({ tasks, setTasks, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatedTask = tasks.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo
            ))
            setTasks(updatedTask)
        } else { 
            const date = new Date();
            const newTask = {
                id:date.getTime(), 
                name: e.target.task_name.value, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasks([...tasks, newTask]);
        }
        setTask({})
    }
  return (
    <section className="addTask">
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder='add task' name='task_name' autoComplete="off" maxLength= "50" value={ task.name ? task.name: "" }  onChange={e => setTask({...task, name: e.target.value})} />
            <button type='submit'> { task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}