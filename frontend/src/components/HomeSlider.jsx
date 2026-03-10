// import { useState, useEffect } from "react";

// import img1 from "../assets/images/slider1.jpg";
// import img2 from "../assets/images/slider3.png";
// import img3 from "../assets/images/img.jpg";
// import img4 from "../assets/images/img1.jpg";
// import img5 from "../assets/images/img2.jpg";

// const images = [img1, img2, img3, img4, img5];

// const HomeSlider = () => {

//   const [current, setCurrent] = useState(0);
//   const [transition, setTransition] = useState(true);

//   // duplicate first image
//   const slides = [...images, images[0]];

//   const nextSlide = () => {
//     setCurrent((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     if (current === 0) {
//       setTransition(false);
//       setCurrent(images.length);
//       setTimeout(() => {
//         setTransition(true);
//         setCurrent(images.length - 1);
//       }, 20);
//     } else {
//       setCurrent((prev) => prev - 1);
//     }
//   };

//   // Auto Slide
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Reset without jump
//   useEffect(() => {
//     if (current === images.length) {
//       setTimeout(() => {
//         setTransition(false);
//         setCurrent(0);

//         setTimeout(() => {
//           setTransition(true);
//         }, 20);

//       }, 1000);
//     }
//   }, [current]);

//   return (
//     <div className="relative w-full h-[75vh] md:h-[650px] overflow-hidden">

//       <div
//         className={`flex h-full ${transition ? "transition-transform duration-1000 ease-in-out" : ""}`}
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >

//         {slides.map((img, index) => (
//           <div key={index} className="min-w-full h-full relative flex-shrink-0">

//             <img
//               src={img}
//               alt="slider"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/40"></div>

//           </div>
//         ))}

//       </div>

//       {/* Left */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
//       >
//         ❮
//       </button>

//       {/* Right */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`transition-all duration-300 rounded-full ${
//               current === index
//                 ? "w-8 h-3 bg-red-600"
//                 : "w-3 h-3 bg-white/80"
//             }`}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default HomeSlider;



import { useState, useEffect } from "react";

import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/Home page pic 01.JPG.jpeg";
import img3 from "../assets/images/Home page pic 02.JPG.jpeg";
import img4 from "../assets/images/img1.jpg";
import img5 from "../assets/images/img2.jpg";

const images = [img1, img2, img3, img4, img5];

const HomeSlider = () => {

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const slides = [...images, images[0]];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(images.length);

      setTimeout(() => {
        setTransition(true);
        setCurrent(images.length - 1);
      }, 20);

    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // reset slide
  useEffect(() => {
    if (current === images.length) {

      setTimeout(() => {

        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 20);

      }, 1000);

    }
  }, [current]);

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[780px] overflow-hidden">

      {/* Slides */}
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {slides.map((img, index) => (
          <div key={index} className="min-w-full h-full relative flex-shrink-0">

            <img
              src={img}
              alt="slider"
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

          </div>
        ))}

      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 md:left-6 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 md:right-6 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-6 md:w-8 h-2 md:h-3 bg-red-600"
                : "w-2 md:w-3 h-2 md:h-3 bg-white/80"
            }`}
          />
        ))}

      </div>

    </div>
  );
};

export default HomeSlider;