import React from 'react'
import Container from '../container/Container'


function Navbar() {
  return (
    
    <nav className=' shadow    dark:bg-gray-900  h-10   '>
    {/* <Container> */}
        <div className=' flex  justify-center  justify-between   flex-row-reverse  '>


            <div className="hidden w-full" id="navbar-hamburger">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <li>
                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                    </li>
                </ul>
            </div>

            <div className='mt-2  mr-40' > 
                <ul className=' flex  space-x-10   '>
                    <li className=''>
                        <a href=""  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"> خانه </a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'> فروشگاه </a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'> پروفایل</a>
                    </li>
                </ul>
            </div>

            <div className=' mt-2  '>
                <img src="" alt=""  />
                <span className=' '> ecomerc </span>
            </div>

            

        </div>
    
        

    {/* </Container> */}
    </nav>

  
  )
}

export default Navbar