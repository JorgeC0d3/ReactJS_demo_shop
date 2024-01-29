import { useState, useEffect } from 'react';
import Product from './Product';

function Index() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  const [category, setCategory] = useState('All');

  useEffect(() => {
    getProducts(category);
    getCategories();
    console.log(products);
    console.log(categories);
  }, [products.length, categories.length, category]);

  async function getProducts(categoryProduct) {
    var url = 'https://dummyjson.com/products?limit=100'; 
    if(categoryProduct !== 'All'){
      url = 'https://dummyjson.com/products/category/' + categoryProduct;
    }
    const data = await fetch(url);
    const products = await data.json();
    setProducts(products.products);
  }

  async function getCategories() {
    const data = await fetch('https://dummyjson.com/products/categories');
    const categories = await data.json();
    setCategories(categories);

  }

  function handleSelect(cat){
    setCategory(cat);
  }

  return (
    <div className="container mt-5">
      <div className="select-category mb-5">
        <select className="form-control" onChange={(e) => handleSelect(e.target.value)}>
          <option disabled selected>Select a category</option>
          {
            categories.map((category, index) => {
              return (
                <option value={category} key={index}>{category}</option>
              )
            })
          }

        </select>
      </div>

      <p className='text-center'>{category}</p>

      {
        products.length > 0 ? (

          <div className='row row-col-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3'>
            {
              products.map((product, index) => {
                return (
                  <div className='col-md-3 mb-3'>
                    <Product
                      product={product}
                      index={index}
                    />
                  </div>
                )
              })
            }
          </div>

        ) : (

          <h3 className='text-center mt-5'>Loading products...</h3>

        )
      }

    </div>
  );
}

export default Index;
