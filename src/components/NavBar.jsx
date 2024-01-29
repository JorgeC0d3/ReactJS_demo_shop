import cart from '../assets/images/cart-shopping-solid.svg';
import { useState } from 'react';
import CartModal from './CartModal';

function NavBar({ cartItems, totalCart, emptyCart, deleteProduct }) {

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }


    return (
        <>
            <nav class="navbar navbar-light">
                <span class="navbar-brand mb-0 h1 p-3 mx-5">SHOP</span>
                <div className='mx-5'>

                    <img src={cart} alt="cart" width="25" variant="primary" id="cart-icon" onClick={handleShow} />
                    <span className='mx-2'>{cartItems.length}</span>

                </div>
            </nav>
            <CartModal
                onShow={handleClose}
                show={show}
                items={cartItems}
                total={totalCart}
                emptyCart={emptyCart}
                deleteProduct={deleteProduct}
            />
        </>
    )
}

export default NavBar;