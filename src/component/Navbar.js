import Logo from './h.png';
import 'animate.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-30 bg-white h-28 shadow-md shadow-black px-1">
      <div className="max-w-[1440px] container mx-auto px-5 h-full">
        <div className="w-full flex justify-between items-center">
          <div className="animate__animated animate__slideInLeft">
            <img
              alt="logo"
              src={Logo}
              className="w-48 h-20 my-5 "
              onClick={() => {
                navigate('/');
              }}
            ></img>
          </div>
          <div className="hidden  md:flex items-center gap-4 text-lg font-serif font-bold animate__animated animate__slideInRight">
            <Link to="/blog" className="hover:text-red-600">
              BLOG
            </Link>
            <Link to="/memories" className="hover:text-red-600">
              MEMORIES
            </Link>
            <Link to="/contact" className="hover:text-red-600">
              CONTACT
            </Link>
          </div>
          <div onClick={handleNav} className="block md:hidden items-center">
            {isOpen ? (
              <GrClose className="text-3xl text-black" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-black" />
            )}
          </div>
          <ul
            className={
              isOpen
                ? 'fixed z-50 left-0 top-0 w-[60%] h-full text-white border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500'
                : 'ease-in-out duration-500 fixed text-white left-[-100%] z-50'
            }
          >
            <h1 className="flex justify-center w-full text-3xl font-bold text-white mt-10 ">
              Menu
            </h1>
            <div className="flex flex-col justify-center w-full">
              <Link
                className={`mt-10 flex justify-center text-center text-3xl hover:-translate-y-1 hover:scale-90 hover:text-red-500 duration-300 ... ${
                  location.pathname === '/' && 'text-green-600'
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`mt-10 text-center text-lg hover:-translate-y-1 hover:scale-90 hover:text-red-500 duration-300 ${
                  location.pathname === '/blog' && 'text-red-600'
                }`}
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className={`mt-10 text-center text-lg hover:-translate-y-1 hover:scale-90 hover:text-red-500 duration-300 ${
                  location.pathname === '/memories' && 'text-blue-600'
                }`}
                to="/memories"
              >
                Memories
              </Link>
              <div className="mt-10 flex justify-center">
                <Link
                  className={`text-center text-lg shadow-sm shadow-red-500 border-2 rounded-lg w-24  transition ease-in-out delay-50 bg-gray-700 hover:-translate-y-1 hover:scale-110      
                hover:bg-red-500 text-white duration-300 ${
                  location.pathname === '/contact' && 'text-white bg-red-600'
                }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
