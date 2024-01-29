import card from '../assets/images/credit-card-regular.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function PayForm({ emptyCart, cartItems, totalCart }) {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        telephone: '',
        email: '',
        cardOwner: '',
        cardNumber: '',
        validity: '',
        securityCode: ''
    });

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    };




    return (

        <div className='card' id='pay-card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <p className='text-start'>Name & surnames</p>
                    <input type='text' className='form-control mb-3' name='name' onChange={handleInputChange} />
                    <p className='text-start'>Address</p>
                    <input type='text' className='form-control mb-3' name='address' onChange={handleInputChange} />
                    <p className='text-start'>Telephone</p>
                    <input type='text' className='form-control mb-3' name='telephone' onChange={handleInputChange} />
                    <p className='text-start'>Email</p>
                    <input type='text' className='form-control mb-3' name='email' onChange={handleInputChange} />
                    <hr />
                    <h5>Payment details</h5>
                    <p className='text-start'>Card owner</p>
                    <input className='form-control mb-3' type="text" name='cardOwner' onChange={handleInputChange} />
                    <p className='text-start'>Card number</p>
                    <input
                        className='form-control mb-3'
                        type="text"
                        name='cardNumber'
                        onChange={handleInputChange}
                        placeholder="**** **** **** ****"
                        maxLength={19}
                    />
                    <div className='row'>
                        <div className='col'>
                            <p className='text-start'>Period of validity</p>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name='validity'
                                onChange={handleInputChange}
                                placeholder="00/00"
                                maxLength={5}
                            />
                        </div>
                        <div className='col'>
                            <p className='text-start'>Security code</p>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name='securityCode'
                                onChange={handleInputChange}
                                placeholder="000"
                                maxLength={3}
                            />
                        </div>

                    </div>
                    <Link to={`/ThanksPage/${encodeURIComponent(JSON.stringify(formData))}/${encodeURIComponent(JSON.stringify(cartItems))}/${totalCart}`}>
                        <button className='btn btn-primary w-100' type='submit' onClick={emptyCart}><img src={card} alt='' width='25' /> Pay with card</button>
                    </Link>


                </form>
            </div>
        </div>

    )
}

export default PayForm;
