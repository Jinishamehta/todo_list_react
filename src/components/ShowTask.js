import '../styles/ShowTask.css'

export const ShowTask = ({ tasks, setTasks, task, setTask}) => {

    const handleDelete = (id) => {
        setTasks(tasks.filter(todo => todo.id !== id))
    }

    const handleEdit = (id) => {
        const newTask = tasks.find(todo => todo.id === id)
        setTask(newTask)

    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count"> { tasks.length }</span>
            </div>
            <button className='clearAll' onClick={() => setTasks([])}>Clear All</button>
        </div>
        <div className="cards">
            <ul>
                { tasks.map( (todo) => (
                    <li key={ todo.id }>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i className='bi bi-pencil-square' onClick={() =>  handleEdit(todo.id) }></i>
                    <i className='bi bi-trash' onClick={() =>  handleDelete( todo.id )}></i>
                </li>
                ))}
                
            </ul>
        </div>
    </section>
  )
}
