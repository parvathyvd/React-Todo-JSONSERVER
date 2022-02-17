import {React,useRef} from "react";
import './css/Lists.css';

const Lists = ({tasks, onClickHandler}) => {
    
    const item = useRef(null);

    const task = tasks.map(({id, text}) => {
        return(
            <div className="ui relaxed divided list" key={Math.random()} ref={item}>
            <div className="item">
              <div className="content">
                  <div className="task-content">
                        {text} 
                        {text ? <i className="large cut right aligned icon" onClick={() => onClickHandler(id)}></i>: ''}
                  </div>
              </div>
            </div>
          </div>
        )
    }) 

    return(
        <div>
            {task}
        </div>
    )
    
}


export default Lists;