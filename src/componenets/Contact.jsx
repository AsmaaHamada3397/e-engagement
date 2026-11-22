import { container } from "../assets/style";
import { FaWhatsapp } from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
  return (
    <div className="">
      <div className={`${container} py-10 space-y-4`}>
        <h1 className="font-bold pb-6 text-[clamp(1rem,5vw,2rem)] text-center">
          Contact Us
        </h1>

        <p className=" text-[clamp(0.8rem,5vw,1.5rem)] text-center">
          We’d love to hear from you. Feel free to reach out anytime!
        </p>

        <div className="flex justify-center pt-10 flex-wrap gap-16">
          <div className="rounded-xl shadow-[0px_2px_5px_2px_rgba(0,0,0,0.2)] p-6  flex flex-col gap-6 items-center justify-center">
            
            
            <FaWhatsapp className="text-button text-[2.5rem]" />
            <p className="text-xl">whatsapp</p>

            <a href="" className="font-bold text-button text-lg md:text-2xl">
              {" "}
              +20 102 495 9020
            </a>
          </div>
          <div className="rounded-xl shadow-[0px_2px_5px_2px_rgba(0,0,0,0.2)] p-6  flex flex-col gap-6 items-center justify-center">
            
            
            <LiaPhoneSolid className="text-button text-[2.5rem]" />
            <p className="text-xl">Call Us</p>
            <a href="" className="text-button text-lg md:text-2xl font-bold">
              
              +20 102 495 9020
            </a>
          </div>
          <div className="rounded-xl shadow-[0px_2px_5px_2px_rgba(0,0,0,0.2)] p-6  flex flex-col gap-6 items-center justify-center">
            
            
            <TfiEmail className="text-button text-[2.5rem]" />
            <p className="text-xl">Email</p>

            <a href="" className="text-button text-lg  font-bold">hossamhassan@go-game.tech</a>
          </div>
        </div>
      </div>
    </div>
  );
}
