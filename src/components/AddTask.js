import { useState } from "react";


const AddTask = ({addTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            return
        }
        addTask({text,day,reminder})
    }
        
    return(
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>Task</label>
                <input type="text" placeholder="Type Task" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className="field">
                <label>Day</label>
                <input type="text" placeholder="Enter Day" value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
                <label>Set Reminder</label>
                </div>
            </div>
            <input type='submit' value="Save Task" style={{marginBottom: '1rem'}}/>
        </form>
    )
}

export default AddTask;