import star from '../assets/images/star-solid.svg';
import { Link } from 'react-router-dom';


function Product({ product, index }) {

    const productData = encodeURIComponent(JSON.stringify(product));


    return (
        <div className='card' key={index}>
            <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center">
                    <h6>{product.title}</h6>
                    <h6>{product.price}$</h6>
                </div>

                <Link to = {`/ProductPage/${productData}`} >

                    <img className="object-fit-cover mt-2 mb-2" src={product.thumbnail} alt={product.title} width="100%" height="200" />
                
                </Link>

                <p className="text-start text-muted"><small>{product.description}</small></p>
                <div className="d-flex justify-content-start align-items-center">
                    <p className="text-start">{product.rating}</p>
                    <img src={star} className='mx-2 star' alt="rating" width="20"/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold text-danger'>-{product.discountPercentage}%</p>
                    <div className='card'>
                        <div className='card-body'>
                            <small>{product.category}</small>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Product;