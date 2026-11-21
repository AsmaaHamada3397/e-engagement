import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" px-3 py-5 container mx-auto fixed inset-x-0 z-20">
      <div className="navbar bg-white/40 backdrop-blur-md shadow-lg rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="px-3 lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="hover:bg-transparent active:!bg-transparent focus:!bg-transparent">
                  Home
                </a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Events</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="md:px-3">
            <img src={logo} className="w-[clamp(6rem,15vw,8rem)]" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]">
                Home
              </a>
            </li>
            <li>
              <a className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]">
                About Us
              </a>
            </li>
            <li className="dropdown">
              <div
                className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]"
                tabIndex={0}
                role="button"
              >
                Events
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-50 w-40 p-2 shadow-lg"
              >
                <li>
                  <a className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="font-bold text-textPrimary text-[clamp(1rem,10vw,1.1rem)]"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-button text-white rounded-xl border-none shadow-none me-2">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
