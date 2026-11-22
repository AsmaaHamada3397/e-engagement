import { container , h1 } from "../assets/style";
import { Link } from "react-router";
import img1 from "../assets/images/IMG-20241213-WA0020.jpg";
import img2 from "../assets/images/IMG-20250205-WA0063.jpg";
import img3 from "../assets/images/IMG-20250923-WA0040.jpg";
import img4 from "../assets/images/IMG_20250922_082359.jpg";
import img5 from "../assets/images/Gemini_Generated_Image_85grsz85grsz85gr.jpg";

const services = [
  {
    id: 1,
    title: "title 1 ",
    image: img1,
    related_data: [

    ],
  },
  {
    id: 2,
    title: "title 2 ",
    image: img2,
  },
  {
    id: 3,
    title: "title 3 ",
    image: img3,
  },
  {
    id: 4,
    title: "title 4 ",
    image: img4,
  },
  {
    id: 5,
    title: "title 5 ",
    image: img5,
  },
];

export default function Services() {
  return (
    <div className={`${container}`}>
     <h1 className={`${h1}`}>
        Our Events
      </h1>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {services.map((service) => {
          return (
       
<div
  key={service.id}
  className="mb-6 relative group scale-95 hover:scale-100 transition-all ease-in-out duration-300 break-inside-avoid rounded-xl overflow-hidden shadow-[0px_0.5px_10px_0.5px_rgba(185,8,37,0.1)]"
>
  <Link to={`/services/${service.id}`}>
    <img src={service.image} alt={service.title} />

    <div className="hidden group-hover:flex justify-end items-end absolute w-full h-full top-0 pointer-events-none bg-linear-to-b from-transparent to-black">
      <p className="text-white p-12 text-[clamp(1rem,5vw,1.5rem)]">
        {service.title}
      </p>
    </div>
  </Link>
</div>

          );
        })}
      </div>
   
    </div>
  );
}
