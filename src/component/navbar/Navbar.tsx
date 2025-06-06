// // import React from 'react'
// import Container from '../container/Container'
import DropdownMenu from '../button/DropdownMenu'
import HamburgerMenu from '../button/HamburgerMenu'
import MegaMenu from '../button/MegaMenu'
import Search from '../search/Search'

// تعریف نوع برای props
interface NavbarProps {
  url: string;
  title: string;
  // سایر props اگر وجود دارند را اینجا اضافه کنید
}

function Navbar( props: NavbarProps ) {


  return (
    
    <nav className='  shadow    dark:bg-gray-900   p-5  '>
    {/* <Container> */}
        <div className=' flex   justify-between      '>
            <div className=' mx-6   '>
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold dark:text-white">Flowbite</span>
                </a>
            </div>
            <div className=' '>
                <Search />
            </div> 
            <div className='  mr-30 mt-1' > 
                <ul className=' flex  space-x-10   '> 
                    {/* <a href=""  className="block text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"> خانه </a> */}
                    <DropdownMenu />
                    <li>
                        <a href={props.url} className='block  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'> {props.title} </a>
                    </li>
                    <li>
                        {/* <a href="" className='block  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'> پروفایل</a> */}
                        <MegaMenu />    
                    </li>
                </ul>
            </div>
            <HamburgerMenu />

        </div>
    {/* </Container> */}
    </nav>

  
  )
}

export default Navbar