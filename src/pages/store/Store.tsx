import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Product from '../../component/product/Product'



function Store() {
  return (

    
    <section className='  '>
      <Navbar title=" خانه "  url="/" />

      <div className='text-center h-20  shadow mt-8  '>
        <h1> به فروشگاه خوش آمدید</h1>
      </div>


      <Product/>
      
    </section>
    
    // <Navbar />

  )
}

export default Store


