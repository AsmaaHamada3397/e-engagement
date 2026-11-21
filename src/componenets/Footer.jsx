import { container } from "../assets/style";
import { BsTwitterX } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";

export default function Footer() {
  return (
    <div className=" bg-textPrimary text-white ">
      <footer className={`${container} flex flex-col gap-10 items-center pb-5`}>
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0 w-full container">
          <aside>
            <p>logo</p>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>

          <nav className="text-base flex flex-col gap-4">
            <a>Home</a>
            <a>About Us</a>
            <a>Events</a>
            <a>Contact Us</a>
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
