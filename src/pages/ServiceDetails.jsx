import { container, h1 } from "../assets/style";

import img1 from "../assets/images/IMG-20241213-WA0020.jpg";
import img2 from "../assets/images/IMG-20250205-WA0063.jpg";
import img3 from "../assets/images/IMG-20250923-WA0040.jpg";
import img4 from "../assets/images/IMG_20250922_082359.jpg";
import img5 from "../assets/images/Gemini_Generated_Image_85grsz85grsz85gr.jpg";

import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Contact from "../componenets/Contact";
export default function ServiceDetails() {
  return (
    <div className=" min-h-dvh">
      <Navbar />

      <div>
        <img
          src={img1}
          className="h-auto max-h-[85dvh] object-cover w-full"
          alt=""
        />
      </div>

      <div className={`${container} pt-6 space-y-16`}>
        <div>
        <div className="flex gap-4 pb-6 flex-wrap">
          <div className="badge badge-secondary">#badge </div>
          <div className="badge badge-accent"> #badge </div>
          <div className="badge badge-neutral"> #badge </div>
          <div className="badge badge-info"> #badge </div>
          <div className="badge badge-success"> #badge </div>
        </div>
        <h1 className={`${h1} text-start`}>Event one</h1>

        <p className="max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          architecto cupiditate placeat dolorem ea facere corporis iusto quaerat
          officiis ex laudantium in cum aliquam aspernatur, alias velit rerum
          sequi corrupti.
        </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img src={img2} alt="img2" />
            </figure>
            <div className="card-body">
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="card-actions justify-center pt-4">
                <button className="cursor-pointer bg-button p-2 text-white rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img src={img2} alt="img2" />
            </figure>
            <div className="card-body">
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="card-actions justify-center pt-4">
                <button className="cursor-pointer bg-button p-2 text-white rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img src={img2} alt="img2" />
            </figure>
            <div className="card-body">
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="card-actions justify-center pt-4">
                <button className="cursor-pointer bg-button p-2 text-white rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <h1 className={`${h1} h-[50rem]`}>
            {" "}
            Events you May Interested In
          </h1>
        </div>

        <Contact />
      </div>

      <Footer />
    </div>
  );
}
