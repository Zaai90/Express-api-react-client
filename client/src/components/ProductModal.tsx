import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Product } from '../models/product';
import { Mode } from "./App";

interface Props {
    show: boolean;
    product?: Product;
    onHide: () => void;
    onAdd: (product: Product) => void;
    onUpdate: (product: Product) => void;
    onDelete: (id: string) => void;
    mode: Mode;
}

const defaultProduct = (): Product => ({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    imageurl: ""
});

const ProductModal = (props: Props) => {
    const [show, setShow] = useState<boolean>(props.show);
    const [product, setProduct] = useState<Product>(props.product || defaultProduct());
    let useEffectInProgress: boolean = false;

    useEffect(() => {
        if (props.mode === Mode.Edit && props.product?.id && useEffectInProgress) {
            useEffectInProgress = true;
            fetch('/api/products/' + props.product?.id).then(res => res.json()).then(data => {
                setProduct(data)
            }).catch(() => {
                setProduct(props.product || defaultProduct())
            })
        }
        useEffectInProgress = false;
    }), [];

    const onClose = () => {
        props.onHide();
        setShow(false);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.mode === Mode.Edit ? props.onUpdate(product) : props.onAdd(product);
    }

    const handleInputChange = <K extends keyof Product, V extends Product[K]>(key: K, value: V) => {
        const updatedProduct = { ...product, [key]: value };
        setProduct(updatedProduct);
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onClose}
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.mode + " " + (props.product?.name ?? "product")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                defaultValue={props.product?.name}
                                onChange={(e) => { handleInputChange("name", e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                defaultValue={props.product?.price}
                                onChange={(e) => { handleInputChange("price", Number(e.target.value)) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description" rows={3}
                                defaultValue={props.product?.description}
                                onChange={(e) => { handleInputChange("description", e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                defaultValue={props.product?.category}
                                onChange={(e) => { handleInputChange("category", e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageUrl"
                                defaultValue={props.product?.imageurl}
                                onChange={(e) => { handleInputChange("imageurl", e.target.value) }} />
                        </div>
                        < Button variant="primary" type="submit">
                            {props.mode}
                        </Button>
                        {props.mode === Mode.Edit ? <Button variant="danger" onClick={() => { props.onDelete(product.id) }}>
                            Delete
                        </Button> : null}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductModal;