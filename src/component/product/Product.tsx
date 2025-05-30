
import React, { useEffect, useState } from 'react';

 interface Product {
        id: number;
        name: string;   
        price: number;
    }

function Product() {

    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/')
            .then(res => res.json())
            .then((data :  Product[]) => setProducts(data))
            .catch(err => console.error(err));
            
        }, []);
    

  return (
    <section className='  mt-10'>
      <h2>لیست محصولات</h2>
      {/* <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} تومان
          </li>
          
        ))}
        
      </ul> */}

      <div className='  gap-4 grid grid-cols-4 space-x-4 text-center mx-8'>

        <div className='  h-80  shadow space-x-4  mt-20 '>
          <img src="../../assets/images/41wiL2UfugL._SX300_SY300_QL70_FMwebp_.webp" className='h-40 w-40 mx-8 ' alt="" />
          
          <h1 className='  text-right pt-5 pr-6 '> کیف چرم</h1>
          
          <p className='  text-left pl-2 pt-3'> 4.5 </p>
          
          <div className='flex mt-3  '>
            
            <span  className='px-1'> 12000 تومان </span>
            {/* <p> : قیمت </p> */}
          </div>
        </div>

        <div className='  h-60  shadow space-x-4  mt-20'>
          <img src="../../assets/images/41wiL2UfugL._SX300_SY300_QL70_FMwebp_.webp" className='h-40 w-40 mx-8 ' alt="" />
          <h1> کیف چرم</h1>
          <div className='flex mt-3'>
            <hr />
            <span  className='px-1'> 12000 تومان </span>
            <p> : قیمت </p>
          </div>
        </div>


        <div className=' h-60  shadow space-x-4  mt-20'>
          <img src="../../assets/images/41wiL2UfugL._SX300_SY300_QL70_FMwebp_.webp"  className='h-40 w-40 mx-8 ' alt="" />
          <h1> کیف چرم</h1>
          <div className='flex mt-3'>
            <hr />
            <span  className='px-1'> 12000 تومان </span>
            <p> : قیمت </p>
          </div>
            
        </div>


        <div className=' h-60  shadow space-x-4  mt-20'>
          <div>
            <img src="../../assets/images/41wiL2UfugL._SX300_SY300_QL70_FMwebp_.webp"  className='h-40 w-40  mx-8 '  alt="" />
            <h1> کیف چرم</h1>
          </div>

          <div className='flex mt-3'>
            <span  className='px-2'> 12000 تومان </span>
            <p> : قیمت </p>
          </div>
            
        </div>



        <div className='h-60  shadow space-x-4  mt-20'>
          <div>
            <img src="../../assets/images/41wiL2UfugL._SX300_SY300_QL70_FMwebp_.webp"  className='h-40 w-40  mx-8 '  alt="" />
            <h1 className='  right-5  '> کیف چرم</h1>
          </div>

          <div className='flex mt-3'>
            <span  className='px-2'> 12000 تومان </span>
            <p> : قیمت </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Product