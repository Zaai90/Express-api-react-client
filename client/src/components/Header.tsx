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
                <Button variant='primary' onClick={() => { props.onAddClick(Mode.Add) }}>Add Product</Button>
            </div>
        </header>
    )
}

export default Header;