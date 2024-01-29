import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Index from './components/Index';
import ProductPage from './components/ProductPage';
import NavBar from './components/NavBar';
import PayPage from './components/PayPage';
import ThanksPage from './components/ThanksPage';

const Router = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    const handleAddToCart = (product) => {
        // Copia el estado actual del carrito y agrega el nuevo producto
        setCartItems([...cartItems, product]);
        setTotalCart(totalCart + product.price);
        //console.log(cartItems);
    }

    const emptyCart = () => {
        setTotalCart(0);
        setCartItems([]);
    }

    const deleteProduct = (elementToDelete) => {

        // Filtrar el array para obtener un nuevo array sin el elemento a eliminar
        const newArray = cartItems.filter(element => element !== elementToDelete);

        // Actualizar el estado con el nuevo array
        setCartItems(newArray);

        //Actualizamos el total
        setTotalCart(totalCart - elementToDelete.price);
    }

    return (

        <BrowserRouter>
            <NavBar
                cartItems={cartItems}
                totalCart={totalCart}
                emptyCart={emptyCart}
                deleteProduct={deleteProduct}
            />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/ProductPage/:productData" element={<ProductPage onAddToCart={handleAddToCart} />} />
                <Route exact path="/PayPage" element={
                    <PayPage
                        cartItems={cartItems}
                        totalCart={totalCart}
                        deleteProduct={deleteProduct}
                        emptyCart={emptyCart}
                    />
                } />
                <Route exact path="/ThanksPage/:formData/:cartItems/:totalCart" element={<ThanksPage />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router