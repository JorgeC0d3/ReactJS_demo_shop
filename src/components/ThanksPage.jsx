import { Link, useParams } from 'react-router-dom';

function ThanksPage() {

    const { formData, cartItems, totalCart } = useParams();
    const data = JSON.parse(decodeURIComponent(formData));
    const items = JSON.parse(decodeURIComponent(cartItems));
    console.log(data);
    console.log(items);

    return (
        <div className="container mt-5">
            <Link to='/' className='link'>
                Volver
            </Link>

            <h3 className='text-center mt-3 mb-5'>Thanks for your purchase!</h3>

            <h5 className='text-start mb-3'>Your order</h5>
            <ul className='text-start'>
                <li>Name & surnames: {data.name}</li>
                <li>Address: {data.address}</li>
                <li>Telephone: {data.telephone}</li>
                <li>Email: {data.email}</li>
            </ul>

            <ol className='text-start'>

                {
                    items.map((item, index) => {

                        return (
                            <li key={index}><img src={item.thumbnail} className='object-fit-cover mx-2 mb-2' width="50" height="50" />{item.title}: <span className='mx-3'>{item.price}$</span></li>
                        )

                    })
                }

            </ol>

            <p className='text-start fw-bold'>Total paid: {totalCart}$</p>

        </div>
    )
}

export default ThanksPage;