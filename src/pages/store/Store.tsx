// Store.tsx
import Navbar  from "../../component/navbar/Navbar";
import { useEffect, useState } from 'react';
// import Navbar from '../../component/navbar/Navbar';
import Product from '../../component/product/Product';
import { Link } from 'react-router-dom';
import { type ProductApi } from '../../component/types/ProductApi';

function Store() {
  const [products, setProducts] = useState<ProductApi[]>([]);
  const itemsPerRow = 4;
  const rowsPerPage = 1;
  const itemsPerPage = itemsPerRow * rowsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/store/products/')
      .then(res => res.json())
      .then((data: ProductApi[]) => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

 
  return (
    <section>
      <Navbar url="/" title="خانه" />
      <div className=" gap-12 mt-20 text-center" style={{ gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`, gridAutoRows: 'auto' }}>
        <h1> به فروشگاه خوش آمدید</h1>
        <Link to={"/store/add_product"} className=''>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition  m-5">اضافه کردن محصول</button>
        </Link>
      </div>

      <div className=' mt-10 grid grid-cols-4   '>
      {currentProducts.map((product) => (
        
          
            <Link key={product.id}  to={`/store/product/${product.id}`} >
              <Product     {...product}  />
            </Link>

            // <Link className='' to={`/store/product_dtaile/${product.id}`} key={product.id}>
            //   <Product key={product.id} {...product}  />
            // </Link>
          
        
      ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button onClick={handlePrev} disabled={currentPage === 1} className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          قبلی
        </button>
        <span>صفحه {currentPage} از {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          بعدی
        </button>
      </div>
    </section>
  );
}

export default Store;
