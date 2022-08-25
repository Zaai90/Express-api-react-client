import { Button } from 'react-bootstrap';
import '../css/Header.css';
import { Mode } from './App';

interface Props {
    onAddClick: (mode: Mode) => void;
}


const Header = (props: Props) => {
    return (
        <header>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <Button variant='primary' onClick={() => { props.onAddClick(Mode.Add) }}>Add</Button>
            </div>
        </header>
    )
}

export default Header;