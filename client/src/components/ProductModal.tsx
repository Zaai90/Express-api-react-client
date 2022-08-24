import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Product } from '../models/product';

interface Props {
    product: Product;
    onDelete: () => void;
}

function ProductModal(props: Props) {

const [show, setShow] = useState<boolean>(false);

    return (
        <>
        <Button key={props.product.id+"-editBtn"} variant="primary" onClick={()=>setShow(true)}>Edit</Button>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header>
                <Modal.Title>{props.product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.product.description}</p>
                <p>{props.product.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );

}  

export default ProductModal;