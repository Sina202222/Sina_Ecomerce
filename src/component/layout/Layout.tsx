import React  from 'react'
import Navbar from '@/navbar/NavItem';


interface LayoutProps {
    children: React.ReactNode;
}


function Layout({children}: LayoutProps ) {
  return (
    <>
        <Navbar url="" title="" />
            {children}

       
  
    </>
    
  )
}
export default Layout