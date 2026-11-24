import { container } from "../assets/style";
import { BsTwitterX } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import logo from "../assets/images/e-engagement-logo-light.svg";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className=" bg-textPrimary text-white ">
      <footer className={`${container} flex flex-col gap-10 items-center pb-5`}>
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0 w-full container">
          <aside>
            <img src={logo} className="w-50 h-30" alt="" />
            <p>
              E-Engagment company, <br />
              Where employees connect
            </p>
          </aside>

          <nav className="text-base flex flex-col gap-4">
            <Link to="/#home">Home </Link>
            <Link to="/#about">About Us</Link>
            <Link to="/#events">Events</Link>
            <Link to="/#contact">Contact Us</Link>
          </nav>

          <nav>
            <h6 className="footer-title">Social Media</h6>
            <div className="flex gap-4">
              <a className="border w-9 h-9 flex justify-center items-center rounded-full">
                <BsTwitterX className="text-white" />
              </a>

              <a className="border w-9 h-9 flex justify-center items-center rounded-full">
                <CgFacebook className="text-white text-xl" />
              </a>
            </div>
          </nav>
        </div>

        <p className="">
          Copyright © {new Date().getFullYear()} - All right reserved by
          E-engagement
        </p>
      </footer>
    </div>
  );
}
