import { FaTimes} from 'react-icons/fa'
import './css/Task.css';

const Task = ({task, onDelete, onToggle}) => {
    return(
        <div className={task.reminder ? 'reminder': ''} style={{marginBottom: '10px', backgroundColor: '#e5e5e5', padding: '0.5rem'}} onDoubleClick={()=> onToggle(task.id)}>
            <p style={{margin: '0px', display: 'flex', justifyContent: 'space-between'}}>{task.text} <FaTimes onClick={()=> onDelete(task.id)}/></p>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;