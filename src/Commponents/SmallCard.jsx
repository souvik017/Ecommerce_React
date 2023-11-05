import React from 'react'
import { useState, useEffect } from 'react'

function SmallCard({
  link="https://fakestoreapi.com/products?limit=5",
  gap="2"
}) {
  const [Product, setProduct] = useState([]);

useEffect(() => {
  fetch(link)
    .then((response) => response.json())
    .then((response) => setProduct(response));
}, [link]);

  return (
    <>
    <div className={`flex gap-${gap} flex-wrap `}>
    {Product.map((product , index)=>
      <div key={index}
       className='w-[14.5rem] h-36 border-2 border-slate-400 overflow-hidden rounded-xl px-4 py-4 shadow-md duration-300 hover:scale-105 overflow-hidden hover:shadow-lg'>
      <div className='flex px-2'>
        <div className='w-40 h-28 mr-4'>
          <img src={product.image} alt={product.tittle}  className='w-36 h-full'/>
        </div>
        <div className='m-auto text-xs font-semibold '>
          <p>{product.title}</p>
          <p className='py-2 font-bold text-sm'>${product.price}</p>
        </div>
      </div>
      </div>
    )}
    </div>
     </>
    
  )
}

export default SmallCard
