// import { useState } from "react";

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex items-center justify-end">
//       <button
//         className="block lg:hidden focus:outline-none"
//         onClick={toggleMenu}
//       >
//         <svg
//           className="w-7 h-7"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           )}
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute top-16 right-0 z-10 bg-white shadow-md py-4 px-2 rounded-md">
//           <ul className="text-gray-600 text-lg font-semibold">
//             <li className="mb-2">
//               <a href="#" className="hover:text-gray-800">
//                 Accueil
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="hover:text-gray-800">
//                 Services
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BurgerMenu;

import { useState } from "react";
import { MdRoomService } from "react-icons/md";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <div className="flex items-center justify-end">
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 z-10 bg-white shadow-md py-4 px-2 rounded-md">
            <ul className="text-gray-600 text-lg font-semibold">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  <MdRoomService className="w-8 h-8" />
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Administrateur
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
