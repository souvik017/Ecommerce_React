import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartButton from '../Commponents/CartButton';
import WishlistButton from '../Commponents/WishlistBtn';
import Review from '../Commponents/Review';
import SmallCard from '../Commponents/SmallCard';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    // Fetch the product details using the API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className=' text-3xl text-center my-80 w-screen h-screen font-bold '>
      <h1>Loading...</h1></div>;
  }

  return (
    <div className=" mx-28 p-4 ">
      <div className='mx-auto h-96 w-2/5 my-8' >
      <img src={product.image} alt={product.title} className="w-ful h-full rounded-lg p-auto m-4" />
      </div>
      <div className='mx-8 my-12'>
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <p className="text-xl my-8">{product.description}</p>
      <div className='flex my-8'>
        <div className='w-16 px-1 text-center bg-green-500 text-white mx'>
        <p className="text-xl font-semibold "> {product.rating.rate} ☆</p>
        </div>
        <div className='mx-8'>
          <p className="text-lg">Reviewed by {product.rating.count} people</p>
        </div>
        </div>
        <p className="text-lg my-2 text-green-500">Special offer</p>
        <div className='flex justify-between mr-8'>
          <div >
          <p className="text-3xl font-semibold mb-4">${product.price}</p>
          </div>
          <div className='flex gap-2'>
        <div><CartButton product={product}/></div>
        <div><WishlistButton product={product}/></div>
        </div>
        </div>
      <div>
      </div>
      </div >
      <div className='m-8'>
        <p className='text-2xl font-semibold mb-4'>Available Offer 🏷️</p>
        <ul className=' mx-4 text-xl text-gray-700 list-outside list-disc'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt, non quia debitis exercitationem quo dolorem architecto laborum libero harum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus voluptatibus obcaecati distinctio commodi dolores est! Sequi, minima.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem in repudiandae minus. Consequatur.</li>
        </ul>
      </div>
      <div className='m-8'>
        <p className='text-2xl font-semibold mb-2'>Product Detail</p>
        <ul className=' mx-4 text-xl text-gray-700 list-outside list-disc'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </div>
      <div>
        <p className='text-2xl font-semibold mb-2'>Review & Rating</p>
        <div className='flex gap-4'>
        <Review name="Jhone Doe"/>
        <Review name="Albert74"/>
        <Review name="Rohit Malikk"/>
        <Review SeeMore ={true} />
        </div>
      </div>
      <div className='my-12'>
      <div  className='flex text-2xl mb-6 justify-between'>
      <p className='font-semibold mb-2'>Other Products</p>
      <Link to="/Product"><button className="px-4  mr-12 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer">Veiw All</button></Link>
      </div>
         <SmallCard/>
      </div>
    </div>
  );
}

export default ProductDetail;
