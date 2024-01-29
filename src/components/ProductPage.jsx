import { useParams, Link } from 'react-router-dom';
import star from '../assets/images/star-solid.svg';
import ImageGallery from "react-image-gallery";

function ProductPage({onAddToCart}){

    const {productData} = useParams();
    const product = JSON.parse(decodeURIComponent(productData));
    console.log(product);


    var images = [];

    for(let i = 0; i < product.images.length; i++){
        images.push({
            original: product.images[i],
            thumbnail: product.images[i]
        })
    }


    return(

        <div className="container mt-5">
            
            <Link to='/' className='link'>
                Volver
            </Link>

            <h3 className='text-start mt-5 mb-5'>{product.title}</h3>

            <div className='row'>
                <div className='col-8'>
                    {/* Image gallery (npm install react-image-gallery) */}

                    <ImageGallery items={images} />

                </div>
                <div className='col-4'>
                    <p className='text-start'><span className='fw-bold'>Brand:</span> {product.brand}</p>
                    <p className='text-start'><span className='fw-bold'>Product description:</span> {product.description}</p>

                    <hr/>

                    <p className='text-start'><span className='fw-bold'>Price:</span> {product.price}$ <span className='text-danger'> - {product.discountPercentage}%</span></p>
                    <p className='text-start'>{product.stock} units in stock</p>
                    <div className="d-flex justify-content-start align-items-center">
                        <p className="text-start">{product.rating}</p>
                        <img src={star} className='mx-2 star' alt="rating" width="20"/>
                    </div>

                    <p className='text-start text-muted'><small>{product.category}</small></p>
                    <button className='btn btn-primary' onClick={() => onAddToCart(product)}>Add to cart</button>

                </div>

            </div>

        </div>
        

    )
}

export default ProductPage;