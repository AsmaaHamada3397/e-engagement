import Navbar from "./Navbar";
import img1 from "../assets/images/IMG-20241213-WA0020.jpg";
import img2 from "../assets/images/IMG-20250205-WA0063.jpg";
import img3 from "../assets/images/IMG-20250923-WA0040.jpg";
import img4 from "../assets/images/IMG_20250922_082359.jpg";
import img5 from "../assets/images/Gemini_Generated_Image_85grsz85grsz85gr.jpg";
export default function () {
  const heroImgs = [
    {
      id: 1,
      name: "Day 1",
      image: img1,
    },
    {
      id: 2,
      name: "Day 2",
      image: img2,
    },
    {
      id: 3,
      name: "Day 3",
      image: img3,
    },
    {
      id: 4,
      name: "Day 4",
      image: img4,
    },
    {
      id: 5,
      name: "Day 5",
      image: img5,
    },
  ];

  return (
    <div className="relative">
      <Navbar />

      <div className="carousel carousel-vertical w-full h-dvh">
        {heroImgs.map((heroImg) => (
          <div
            key={heroImg.id}
            className="carousel-item relative w-full h-full"
          >
            <img
              src={heroImg.image}
              alt={heroImg.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center flex-col gap-12 ">
              <h1 className="text-white text-[clamp(2.5rem,10vw,5rem)] font-bold">
                {heroImg.name}
              </h1>

              <a className=" cursor-pointer bg-button text-white rounded-xl border-none text-[clamp(1.25rem,4vw,1.5rem)] p-3 shadow-none ">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
