import React from 'react'
import Carousel from '../Commponents/Carousel'
import SmallCard from '../Commponents/SmallCard'
import { Link } from 'react-router-dom'
function Home() {
  const images = [
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ffeb169a27907387.jpg?q=20",

  ]  
  return (
    <>
    <div>
      <Carousel images={images}/>
    </div>

    <div className='my-2'>
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/9ee27aa0c23e89ac.jpg?q=20" alt="#" 
      className='mx-auto'/>
    </div>
    <div className='my-1 mx-12'>
      <div  className='flex text-3xl mb-4 justify-between pr-16 pl-20'>
      <p className='font-bold mb-2'>Our Best Products</p>
      <Link to="/Product"><button className="px-4 py-2 text-xl text-blue-500 mr-2 hover:text-white hover:bg-blue-500 rounded cursor-pointer">Veiw All</button></Link>
      </div>
      <div className='pr-16 pl-20'>
      <SmallCard
      link="https://fakestoreapi.com/products?limit=5"
      gap="4"
      />
      </div>
    </div>

    <div className='cursor-pointer mx-10 p-16'>
      <p className='font-bold text-3xl mb-4'>Decor Items</p>
    <div className='flex gap-4 my-4'>
      <div>
        <img src="https://in-media.apjonlinecdn.com/wysiwyg/Featured_EN_2_.jpg" alt="r" className='w-[600px] h-[300px]' />
        <div className='mt-4'>
        <p className='font-semibold'>Sign Up and Save</p>
        <p className='text-zinc-500'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <Link to="/Products"><button
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'
        >Shop Now</button>
        </Link>
      </div>
      <div>
        <img src="https://in-media.apjonlinecdn.com/wysiwyg/Featured_Offer_v4.jpg" alt="q" className='w-[600px] h-[300px]' />
        <div  className='mt-4'>
        <p className='font-semibold' >Sign Up and Save</p>
        <p className='text-zinc-500'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <Link to="/Products"><button
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'
        >Shop Now</button>
        </Link>
        </div>
      </div>


      <div className='flex gap-4 my-4'>
      <div>
      <img src="https://in-media.apjonlinecdn.com/latestproducts_latest/nf/pc169562965225707.jpg" alt="s" className='w-[600px] h-[300px]' />
        <div className='mt-4'>
        <p className='font-semibold'>Sign Up and Save</p>
        <p className='text-zinc-500'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <Link to="/Products"><button
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'
        >Shop Now</button>
        </Link>
      </div>
      <div>
      <img src="https://in-media.apjonlinecdn.com/latestproducts_latest/ka/pc169813189384396.jpg" alt="p" className='w-[600px] h-[300px]' />
        <div  className='mt-4'>
        <p className='font-semibold' >Sign Up and Save</p>
        <p className='text-zinc-500'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <Link to="/Products"><button
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'
        >Shop Now</button>
        </Link>
        </div>
      </div>
     </div>


    <div className='flex mx-2 gap-x-2 pl-16 pr-20'>
      <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ff5fe829530cf197.jpg?q=20" alt="x" className='w-1/3' />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/07b437dc74cb4f25.jpg?q=20" alt="y" className='w-1/3' />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/001d5002a4adeeaf.jpg?q=20" alt="z" className='w-1/3'/>
    </div>
  

    <div className='mx-20 my-8'>
      <div>
      <p className='text-3xl text-zinc-700 mb-4'>Top Stories : Brand Directory</p>
      </div>
      <div className='text-zinc-500 text-sm'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos fugiat nisi modi ab ea voluptates explicabo iste vitae reiciendis recusandae deleniti doloribus, optio velit ratione repudiandae numquam hic veniam odio.
        Libero pariatur ipsa deserunt dolore incidunt adipisci consequatur eligendi earum. Ex unde, eos neque ipsa corrupti ab nesciunt. Laboriosam recusandae cumque aperiam sed exercitationem quos nulla. Omnis placeat neque culpa!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio neque unde exercitationem, soluta assumenda doloremque ullam libero! Totam sit asperiores blanditiis dolor quod cumque quisquam quidem atque error maxime.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptate alias blanditiis tempora sunt sed ipsa harum, voluptas corporis exercitationem quod! Tenetur voluptates repellat aliquid necessitatibus aperiam asperiores, sed quod!
        Esse nobis repellendus harum, accusamus atque, et rem non culpa eius consequuntur delectus dolorem, blanditiis iste doloremque labore in voluptate quia eligendi? Sunt omnis debitis corporis delectus ut accusantium vitae!
        Doloribus, hic dolores iusto sunt excepturi itaque illum? Qui explicabo odit quae numquam, illum odio quam, voluptates modi iusto vel, harum rerum? Illo cupiditate dolore, qui eius doloremque deserunt quas?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut exercitationem magnam vero minima culpa facere quibusdam! Ab distinctio harum saepe nam perferendis esse earum, placeat dolores nemo nostrum rerum iste.
        Dolorum, voluptatibus suscipit expedita odio quidem architecto doloremque distinctio dolor eum libero dolores, exercitationem quaerat illo fugiat id nesciunt est. Molestiae aperiam tempora, incidunt ab ipsam magnam recusandae sapiente velit?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio molestiae inventore consequatur, quibusdam modi excepturi quae eum laboriosam alias sequi eveniet ut iure, sapiente nam deleniti corporis quasi saepe minima.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eos, est dignissimos doloribus unde ipsa quidem! Sequi quod ea aliquam molestiae quae accusantium repudiandae dolore, voluptates laboriosam animi aut exercitationem.
        Deserunt vel veniam earum, ipsa cum debitis quos alias et dolorem dignissimos veritatis itaque minus praesentium hic, aut dolorum, pariatur sapiente. Provident veniam consectetur enim cum quas possimus commodi atque!
        Delectus eum ad nulla aspernatur doloribus dolores ab rerum dicta tempora sint, cumque ratione. Deserunt repudiandae molestiae praesentium minus ipsa, id nesciunt eligendi expedita labore error possimus. Eum, beatae dicta?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia error quae quisquam fugiat sed eligendi ipsam doloribus unde dignissimos maiores distinctio incidunt exercitationem facilis, alias aperiam tempora, quis esse.</p>
      </div>
    </div>
    </>
  )
}

export default Home
