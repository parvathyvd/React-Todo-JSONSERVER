import './css/Button.css';

const Button = ({className, text, color, showAdd, show}) => {
   
    return(
        <div className="btn-block">
            <button style={{background: color}} onClick={showAdd} style={{marginBottom: '1rem', background: show ? 'red' : 'green' }}>{text}</button>
        </div>
    )
}

export default Button;