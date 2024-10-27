import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import getData from '../../apiCalling/ApiCalling.js';
import { GET_ALL_PRODUCTS } from '../../apiUrl/ApiUrl.js';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthProduct = async () => {
            try {
                const response = await getData(GET_ALL_PRODUCTS);
                setProducts(response.data);
            } catch (error) {
                console.log(error.message)
            }
        }
        fecthProduct();
    }, []);

    return (
        <div>
            <h1>All products</h1>
            <div className='w-full'>
                <div className='w-full flex flex-wrap px-4 justify-center gap-3 py-4'>
                    {products.map((item) => (
                        <ProductCard key={item.id} productInfo={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home