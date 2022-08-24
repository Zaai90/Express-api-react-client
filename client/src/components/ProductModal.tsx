import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Product } from '../models/product';

interface Props {
    show: boolean;
    product?: Product;
    onHide: () => void;
}

const ProductModal = (props: Props) => {
    const [show, setShow] = useState<boolean>(props.show);

    const onClose = () => {
        props.onHide();
        setShow(false);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onClose}
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{"Edit " + props.product?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={() => { }}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" defaultValue={props.product?.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" className="form-control" id="price" defaultValue={props.product?.price} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" rows={3} defaultValue={props.product?.description} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="text" className="form-control" id="image" defaultValue={props.product?.image} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { }}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={() => { }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ProductModal;