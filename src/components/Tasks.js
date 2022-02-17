import Task from "./Task";


const Tasks = ({tasks, onDelete, onToggle}) => {
    const task = tasks.map(task => {
        return(
            <Task onDelete={onDelete} onToggle = {onToggle} key={task.id} task={task}/>
        )
    })
    return(
        <div>
           {task}
        </div>
    )
}

export default Tasks;
