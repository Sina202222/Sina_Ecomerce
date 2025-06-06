import {Route, Routes} from "react-router-dom"
import Api from "./pages/api/Api";

import Store from "./pages/store/Store";
import Home from "./pages/home/Home";

import ProductDtaile from "./component/product/ProductDtaile";

// import ProductEdit from "./component/product/ProductEdit";
// import AddProduct from "./component/product/AddProduct";
// import Layout from "./component/layout/Layout";



function App() {

  

  return (
    
    
    // <Layout>
      <Routes>

        <Route path='/' element={<Home />}  />

        <Route path='/api' element={<Api />}  />
        <Route path='/store' element={<Store />}  />
        {/* <Route path='/store/add_product' element={<AddProduct />}  /> */}


        
        <Route path="/store/product/:id" element={<ProductDtaile />} /> 

        {/* <Route path="/store/product/:id/dtaile/edit" element={ <ProductEdit /> } />  */}



      </Routes>
    // </Layout>
      
      
      
     
    
  )
}

export default App
