import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function CartModal({ onShow, show, items, total, emptyCart, deleteProduct }) {

    return (
        <Modal show={show} onHide={onShow}>
            <Modal.Header closeButton>
                <Modal.Title>Your cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                {
                    items.length > 0 ? (
                        <ol>

                            {
                                items.map((item, index) => {

                                    return (
                                        <li key={index}><img src={item.thumbnail} className='object-fit-cover mx-2 mb-2' width="50" height="50" />{item.title}: <span className='mx-3'>{item.price}$</span><span onClick={() => deleteProduct(item)} className='text-danger fw-bold delete-product'> X</span></li>
                                    )

                                })
                            }

                        </ol>

                    ) : (

                        <h5 className='text-center'>The cart is empty</h5>

                    )
                }

            </Modal.Body>
            <Modal.Footer>
                <h6>Total: {total}$</h6>
                <Button variant="secondary" onClick={emptyCart}>
                    Empty cart
                </Button>

                {
                    items.length > 0 && (
                        <Link to={'/PayPage'} className='btn btn-primary'>
                            Pay
                        </Link>
                    )
                }



            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;