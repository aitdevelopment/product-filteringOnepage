import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getData from '../../apiCalling/ApiCalling.js';
import { GET_ALL_PRODUCTS } from '../../apiUrl/ApiUrl';

const SingleProduct = () => {
    const [product, setProduct] = useState({});

    const productId = useParams();

    useEffect(() => {
        const fecthProduct = async () => {
            try {
                const response = await getData(`${GET_ALL_PRODUCTS}${productId.aaa}`);
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fecthProduct();
    }, [productId]);

    return (
        <div className='w-full p-8'>
            <div className='w-full flex gap-3'>
                <img className='w-[420px] p-4 shadow' src={product?.image} alt="" />
                <div className='flex flex-col gap-4'>
                    <Link to={`/category/${product?.category}`} className='font-normal w-[max-content] text-sm text-cyan-600 px-6 py-1 shadow rounded-3xl'>{product?.category}</Link>
                    <h4 className='font-bold text-3xl text-cyan-800'>{product?.title}</h4>
                    <span className='text-xl font-semibold capitalize'>{product?.description}</span>

                    <div className='w-full flex justify-start gap-4 mt-8'>
                        <h4 className='px-6 py-1 shadow text-white bg-cyan-700 font-normal text-xl rounded-3xl' >Price : {product?.price}</h4>
                        <h4 className='px-6 py-1 shadow text-white bg-cyan-700 font-normal text-xl rounded-3xl' >Rating : {product?.rating?.rate}({product?.rating?.count})</h4>
                    </div>
                    <div className='flex gap-4 items center'>
                        <button className='px-6 py-1 text-xl font-semibold font-sans shadow border-2 border-cyan-600 rounded-3xl'>Add to Cart</button>
                        <button className='px-6 py-1 text-xl font-semibold font-sans shadow border-2 border-cyan-600 rounded-3xl'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct