import { useState } from 'react';

function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="mega-menu-full-dropdown-button"
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Company
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
