import {Route, Routes} from "react-router-dom"


import Api from "./pages/api/Api";
import Store from "./pages/store/Store";
import Home from "./pages/home/Home";
import Product from "./component/product/Product";
// import Layout from "./component/layout/Layout";



function App() {

  

  return (
    
    
    // <Layout>
      <Routes>

        <Route path='/' element={<Home />}  />
        <Route path='/store' element={<Store />}  />
        <Route path='/api' element={<Api />}  />

        <Route path="/store/product/:id" element={<Product />} />


      </Routes>
    // </Layout>
      
      
      
     
    
  )
}

export default App
