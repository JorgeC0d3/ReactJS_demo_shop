import { Link } from 'react-router-dom';
import PayForm from './PayForm';

function PayPage({ cartItems, totalCart, deleteProduct, emptyCart }) {

    return (
        <div className="container mt-5">

            <Link to='/' className='link'>
                Volver
            </Link>

            <h3 className='text-center mt-3 mb-5'>Pay form</h3>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='text-start mb-4'>Cart content: <span>{cartItems.length} articles</span></h5>
                            <ol className='text-start'>

                                {
                                    cartItems.map((item, index) => {

                                        return (
                                            <li key={index}><img src={item.thumbnail} className='object-fit-cover mx-2 mb-2' width="50" height="50" />{item.title}: <span className='mx-3'>{item.price}$</span><span onClick={() => deleteProduct(item)} className='text-danger fw-bold delete-product'> X</span></li>
                                        )

                                    })
                                }

                            </ol>
                        </div>
                        <div className='card-footer'>
                            <h5 className='text-start'>Total to pay: {totalCart}$</h5>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <PayForm
                        emptyCart={emptyCart}
                        cartItems={cartItems}
                        totalCart={totalCart}

                    />
                </div>
            </div>


        </div>
    )
}

export default PayPage;