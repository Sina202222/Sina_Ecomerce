import React from 'react'

function ProductDtaile() {
  return (
    
    
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6"> 
      
      {/* <!-- نام محصول -->  */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">نام محصول</h1> 
      
      {/* <!-- برند و دسته‌بندی -->  */}
      <div className="flex flex-wrap text-gray-600 mb-4 gap-6"> 
        
        <div className="border border-gray-300 rounded px-3 py-1"> 
          <span className="font-semibold">برند:</span> 
          نام برند 
        </div> 
       
        <div className="border border-gray-300 rounded px-3 py-1">
          <span className="font-semibold">دسته‌بندی:</span> نام دسته‌بندی 
        </div> 
       
        {/* <!-- تصویر محصول -->  */}
        <div className="mb-6"> 
          <img src="https://via.placeholder.com/600x400" alt="تصویر محصول" 
           className="rounded-lg w-full object-cover" /> 
        </div>
          
          {/* <!-- توضیحات محصول --> */}
          <p className="mb-6 text-gray-700 leading-relaxed">
            توضیحات محصول در این قسمت قرار می‌گیرد. این متن می‌تواند طولانی باشد و ویژگی‌ها و جزئیات محصول را شرح دهد.
          </p>
         
          {/* <!-- قیمت و تخفیف -->  */}
          <div className="flex items-center gap-4 mb-4"> 
            <span className="text-2xl font-bold text-gray-900">۵۰۰,۰۰۰ تومان</span>
            <span className="text-red-600 font-semibold bg-red-100 px-2 py-1 rounded">۲۰٪ تخفیف</span> 
          </div>

          {/* <!-- کد تخفیف -->  */}
          <div className="mb-6">
            <span className="font-semibold text-gray-700">کد تخفیف:</span>
            <span className="text-green-600 font-mono bg-green-100 px-2 py-1 rounded"> DISCOUNT20</span>
          </div>
         
          {/* <!-- وضعیت موجودی --> <div className="mb-6"> <span className="font-semibold">وضعیت موجودی: </span>  */}
          <span className="text-green-600 font-semibold">موجود</span>
          
          {/* <!-- اگر موجود نبود چطور --> <!--  */}
          <span className="text-red-600 font-semibold">  ناموجود  </span>  
          </div>
                         {/* <!-- دکمه افزودن به سبد خرید --> */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">افزودن به سبد خرید</button>

    </div>

    

  )
}

export default ProductDtaile