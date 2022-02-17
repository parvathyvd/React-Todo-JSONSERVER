import Button from './Button';
// import Lists from "./Lists";
import './css/Header.css';

const Header = ({showAdd, show}) => {
    return(
   <>
   <Button className={"btn"} text={show ? "Close": "Add"} color={"red"} showAdd={showAdd} show={show} />
   </>
    )
}

export default Header;