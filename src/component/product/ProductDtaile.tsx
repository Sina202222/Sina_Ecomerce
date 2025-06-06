// import axios from 'axios'
// import  { useEffect, useState } from 'react'
// import {  useParams  } from 'react-router-dom'
// import { type ProductApi } from '../types/ProductApi';

// import type { FC } from "react"



// function ProductDtaile( ) {
  
//   const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
//   const [product, setProduct ] = useState<ProductApi>()
//   const [loading, setLoading]   = useState(true)
//   const [error, setError]      = useState('')
//   const params= useParams()
  

//   useEffect(() => {  
    

//     if (!id) {
//       setError('شناسه محصول نامعتبر است.');
//       setLoading(false);
//       return;
//     }
      
//     axios
//       .get(`http://127.0.0.1:8000/api/products/${params.id}`)
//       .then(res => {

//         setProduct(res.data)

//         setProduct(res.data)
//         setLoading(false)

//       })
//       .catch((err) => {
//         console.error(err);
//         setError(' دریافت محصولات نا موفق بود.');
//         setLoading(false);
//       });

//   } , [])

//     if (loading) return <div>در حال بارگذاری...</div>;
//     if (error) return <div className="text-red-600">{error}</div>;
//     if (!product) return <div>محصولی یافت نشد.</div>; // Handle case where product is not found


  

//   return (
      

//     <div  className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6"> 
//       {/* <!-- نام محصول -->  */}
//       <h1 className="text-3xl font-bold mb-4 text-gray-800"> {product?.name_product} </h1> 
      
//       {/* <!-- برند و دسته‌بندی -->  */}
//       <div className="flex flex-wrap text-gray-600 mb-4 gap-6"> 
        
//         <div className="border border-gray-300 rounded px-3 py-1"> 
//           <span className="font-semibold">برند:</span> 
//           {product?.brand}
//         </div> 
       
//         <div className="border border-gray-300 rounded px-3 py-1">
//           <span className="font-semibold">دسته‌بندی:</span> {product?.category}
//         </div> 
       
//         {/* <!-- تصویر محصول -->  */}
//         <div className="mb-6"> 
//           <img src="https://via.placeholder.com/600x400" alt="تصویر محصول" 
//            className="rounded-lg w-full object-cover" /> 
//         </div>
          
//           {/* <!-- توضیحات محصول --> */}
//           <p className="mb-6 text-gray-700 leading-relaxed">{product?.description} </p>
         
//           {/* <!-- قیمت و تخفیف -->  */}
//           {/* <div className="flex items-center gap-4 mb-4">  */}
//             {/* <span className="text-2xl font-bold text-gray-900"> {product.price}تومان</span> */}
//             {/* <span className="text-red-600 font-semibold bg-red-100 px-2 py-1 rounded">۲۰٪ تخفیف</span> 
//           </div> */}

//           {/* <!-- کد تخفیف -->  */}
//           {/* <div className="mb-6">
//             <span className="font-semibold text-gray-700">کد تخفیف:</span>
//             <span className="text-green-600 font-mono bg-green-100 px-2 py-1 rounded"> DISCOUNT20</span>
//           </div> */}
         
//           {/* <!-- وضعیت موجودی --> <div className="mb-6"> <span className="font-semibold">وضعیت موجودی: </span>  */}
//           {/* <span className="text-green-600 font-semibold">موجود</span> */}
          
//           {/* <!-- اگر موجود نبود چطور --> <!--  */}
//           {/* <span className="text-red-600 font-semibold">  ناموجود  </span>   */}
//           </div>
//                          {/* <!-- دکمه افزودن به سبد خرید --> */}
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">افزودن به سبد خرید</button>
//         {/* <Link to={"edit"}> */}
//          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">   ویرایش محصول </button>
//         {/* </Link>  */}
//     </div>
    
    
 

    

//   )
// }

// export default ProductDtaile




import React from 'react';
import { type ProductApi } from '../types/ProductApi';


const ProductDtaile: React.FC<ProductApi> = ({
  
  name_product,
  description,
  price,
 
  brand,
  category,

 }) => {

  return (
      

    <div  className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6"> 
      {/* <!-- نام محصول -->  */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800"> {name_product} </h1> 
      
      {/* <!-- برند و دسته‌بندی -->  */}
      <div className="flex flex-wrap text-gray-600 mb-4 gap-6"> 
        
        <div className="border border-gray-300 rounded px-3 py-1"> 
          <span className="font-semibold">برند:</span> 
          {brand}
        </div> 
       
        <div className="border border-gray-300 rounded px-3 py-1">
          <span className="font-semibold">دسته‌بندی:</span> {category}
        </div> 

        <div className="border border-gray-300 rounded px-3 py-1">
          <span className="font-semibold"></span> {price}
        </div>
       
        {/* <!-- تصویر محصول -->  */}
        <div className="mb-6"> 
          <img src="https://via.placeholder.com/600x400" alt="تصویر محصول" 
           className="rounded-lg w-full object-cover" /> 
        </div>
          
          {/* <!-- توضیحات محصول --> */}
          <p className="mb-6 text-gray-700 leading-relaxed">{description} </p>
   
        </div>
    </div>
      
    
    
 

    

  )
}

export default ProductDtaile