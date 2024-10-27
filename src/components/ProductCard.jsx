import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({productInfo}) => {
  const [readMore, setReadMore] = useState(false);
  console.log(productInfo.rating)
  return (
    <Link to={`/products/${productInfo.id}`} className='w-[47%] flex flex-col items-start justify-start md:w-[18%] xl:w-[16%]  shadow'>
      <img className='w-full p-2 h-[180px] object-contain ' src={productInfo.image} alt="" />
     <div className='w-full flex flex-col gap-1 shadow p-2'>
     {readMore? <h4>{productInfo.title}<button className='font-sm text-lg text-cyan-700 underline' onClick={()=>setReadMore(prev=>!prev)}>See less</button></h4> :<h4>{productInfo.title.substring(0,20)}...<button className='font-sm text-lg text-cyan-700 underline' onClick={()=>setReadMore(prev=>!prev)}>read more</button></h4>}

     <h4>৳ {productInfo.price}</h4>
    <h4>{productInfo.rating.rate}({productInfo.rating.count})</h4>
     </div>
    </Link>
  )
}

export default ProductCard