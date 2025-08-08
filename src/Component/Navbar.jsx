import React, { use, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import Loading from '../Pages/Loading';
import btn_logo from "../assets/stretching-round-svgrepo-com2.svg"


const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut Successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  if (loading) {
    return <Loading />; 
  }


     const links = (
    <ul className="flex flex-col lg:flex-row bg-white/70 lg:bg-transparent pl-3 pb-1.5 text-[#0F0F0FB3] font-medium">
      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
             ? 'text-[#1a8012] underline'
              : 'text-[#1E293B] hover:text-[#1a8012] hover:underline'
          }
        >
          Home
        </NavLink>
      </li>

      
      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/browseEvents"
          className={({ isActive }) =>
            isActive
             ? 'text-[#1a8012] underline'
              : 'text-[#1E293B] hover:text-[#1a8012] hover:underline'
          }
        >
         Browse Events
        </NavLink>
      </li>

      {user && <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            isActive
             ? 'text-[#1a8012] underline'
              : 'text-[#1E293B] hover:text-[#1a8012] hover:underline'
          }
        >
          My Bookings
        </NavLink>
      </li>}

       

   
     


      
   <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/addEvent"
          className={({ isActive }) =>
            isActive
               ? 'text-[#1a8012] underline'
              : 'text-[#1E293B] hover:text-[#1a8012] hover:underline'
          }
        >
          Add Event
        </NavLink>
      </li>

      {user && <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/myPostedEvents"
          className={({ isActive }) =>
            isActive
               ? 'text-[#1a8012] underline'
              : 'text-[#1E293B] hover:text-[#1a8012] hover:underline'
          }
        >
          My Events
        </NavLink>
      </li>}

    </ul>
  );
    return (
       <div className="w-full bg-white/70  fixed top-0 left-0 right-0 shadow-sm z-50">

      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex gap-0.5 justify-center items-center">
            <img className="w-12 h-6  cursor-pointer" src={btn_logo} alt="" />
            <a className="lg:text-2xl text-xl  text-green-700 font-extrabold roboto">AthleticHub </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{links}</ul>
        </div>
  



        <div className='flex navbar-end gap-5'>
    
          <div>
            {user ? (
          <div className=" flex lg:gap-3 gap-2 relative" ref={dropdownRef}>
            <img
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="lg:w-12 lg:h-11 w-10 h-10 rounded-full cursor-pointer border border-gray-300"
              src={user?.photoURL || btn_logo}
              alt="user"
            />
            <button
              className="lg:px-7 lg:py-5.5 py-3 cursor-pointer btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300
"
              onClick={handleSignOut}
            >
              SignOut
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-14    w-64 py-4  bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="p-3 border-b border-gray-100 text-gray-700 font-semibold">
                  {user.displayName}
                </div>
               <div className=''>
                 <button
                  onClick={() => {
                    handleSignOut();
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 font-semibold   rounded-lg cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  SignOut 
                  <HiArrowLeftOnRectangle />
                </button>
                
               </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="px-5 cursor-pointer font-medium py-3 border border-[#1a8012]   duration-300 ease-in-out rounded-md transition"
            >
              Login
            </Link>

            <Link
              to="/auth/signUp"
              className="px-7  py-6 hover:rounded-full btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300
"
            >
              Get Started
            </Link>
          </div>
        )}
          </div>
        </div>

      </div>
    </div>
    );
};

export default Navbar;