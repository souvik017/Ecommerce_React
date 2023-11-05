import React from 'react'

function Review({name, SeeMore=false}) {
    const More = SeeMore;
    if(!More){
  return (
    <div className='w-72 h-36 border-2 border-slate-600 overflow-hidden rounded-xl px-8 py-4 shadow-md duration-300 hover:scale-105 hover:shadow-lg'>
    <div className='flex'>
      <div>
        <p className='text-lg mr-2'><span className='text-lg'>👤</span>{name}</p>
      </div>
      <div className='py-0.5 text-sm'>
        <p>⭐⭐⭐⭐</p>
      </div>
    </div>
    <div className='my-2'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, minima.</p>
    </div>
    </div>
  )
    }else{
        return(
            <div className='w-72 h-36 border-2 border-slate-600 overflow-hidden rounded-lg px-8 py-4 shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'>
            <div className='text-2xl text-center py-8'>
                <p>See More</p>
                <p className='text-3xl'> → </p>
            </div>
            </div>
        )
    }
}

export default Review
