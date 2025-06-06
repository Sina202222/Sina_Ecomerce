
import React from 'react';
import { type ProductApi } from '../types/ProductApi';

const Product: React.FC<ProductApi> = ({ 
  
  name_product,
  price,
  imageUrl,

 }) => {

  

  return (


    <div className=" px-2    ">
    {/* Grid container with 2 rows and 4 columns */}      
      <div className="h-80 shadow rounded-lg flex flex-col items-center p-3" >
        
        <img
          src={imageUrl}
          alt={name_product}
          className="h-40 w-40 object-contain"
        />

        <h1 className="text-right pt-5 w-full px-3 text-lg font-semibold">
          {name_product}
        </h1>

        <p className=" pl-3 pt-3 w-full text-left">4.5</p>
        <div className="flex mt-3 w-full justify-start pl-3 font-medium text-green-600">
          <span>{price} تومان</span>
        </div>

      </div>
    </div>

  );
};

export default Product;
