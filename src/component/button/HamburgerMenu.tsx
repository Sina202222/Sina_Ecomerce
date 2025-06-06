import { useState, useEffect } from "react";

function HamburgerMenuWithAnimation() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [icon, setIcon] = useState("hamburger"); // 'hamburger' or 'close'

  // وقتی open تغییر می‌کند، انیمیشن شروع شود و بعد از 300ms آیکون تغییر کند
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setIcon(open ? "close" : "hamburger");
      setAnimating(false);
    }, 300); // مدت زمان انیمیشن به میلی‌ثانیه

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="   mx-8 mt-1 ">
      {/* دکمه همبرگر */}
      <button
        onClick={() => setOpen(!open)}
        className={`text-white  rounded-md focus:outline-none transition-transform duration-300  ${
          animating ? "scale-90 opacity-70" : "scale-100 opacity-100"
        }`}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {/* آیکون با تأخیر تغییر می‌کند */}
        {icon === "hamburger" ? (
          <span aria-hidden="true">&#9776;</span> // آیکون همبرگر
        ) : (
          <span aria-hidden="true">&#10005;</span> // آیکون ضربدر
        )}
      </button>

      {/* منو */}
      {open && (
        
          <ul className="absolute right-0  dark:bg-gray-800 shadow-lg text-white h-full  px-5 mt-6 ">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-5">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <li className="border-b border-indigo-800 px-7 py-2 hover:bg-indigo-600">
              <a href="#">خانه</a>
            </li>
            <li className="border-b border-indigo-800 px-5 py-2 hover:bg-indigo-600">
              <a href="#">خدمات</a>
            </li>
            <li className="border-b border-indigo-800 px-4 py-2 hover:bg-indigo-600">
              <a href="#">فروشگاه</a>
            </li>
            <li className="px-4 py-2 hover:bg-indigo-600">
              <a href="#">پروفایل</a>
            </li>
          </ul>
       
        
      )}
    </div>
  );
}

export default HamburgerMenuWithAnimation;








// import React, { useState } from "react";

// function HamburgerMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative w-50 mx-5">
//       {/* دکمه همبرگر */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="text-white p-2 rounded-md focus:outline-none "
//         aria-label="Toggle menu"
//         aria-expanded={open}
//       >
//         {/* تغییر آیکون بسته به وضعیت منو */}
//         {open ? (
//           <span aria-hidden="true">&#10005;</span> // آیکون ضربدر
//         ) : (
//           <span aria-hidden="true">&#9776;</span> // آیکون همبرگر
//         )}
//       </button>

//       {/* منو */}
//       {open && (
//         <ul className="absolute right-4 mt-2 bg-indigo-700 rounded-md shadow-lg text-white">
//           <li className="border-b border-indigo-600 px-7 py-2 hover:bg-indigo-600">
//             <a href="#">خانه</a>
//           </li>
//           <li className="border-b border-indigo-600 px-5 py-2 hover:bg-indigo-600">
//             <a href="#">خدمات</a>
//           </li>
//           <li className="border-b border-indigo-600 px-4 py-2 hover:bg-indigo-600">
//             <a href="#">فروشگاه</a>
//           </li>
//           <li className="px-4 py-2 hover:bg-indigo-600">
//             <a href="#">پروفایل</a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default HamburgerMenu;
