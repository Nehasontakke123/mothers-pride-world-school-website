// import { Mail, Phone, User } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";

// /* Typing Animation */
// const TypingText = ({ text, speed = 40 }) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let index = 0;

//     const interval = setInterval(() => {
//       setDisplayText(text.slice(0, index + 1));
//       index++;

//       if (index === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return <span>{displayText}</span>;
// };

// const Navbar = () => {
//   return (
//     <header className="w-full sticky top-0 z-50 shadow-md">

//       {/* Top Header */}
//       <div className="bg-gray-100 border-b">

//         <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center">

//           {/* Logo Section */}
//           <div className="flex items-center gap-3">

//             <img
//               src={logo}
//               alt="logo"
//               className="w-12 h-12 object-contain"
//             />

//             <div>
//               <h1 className="text-lg font-bold text-gray-900">
//                 Mother's Pride World School
//               </h1>

//               <p
//                 className="text-xs italic text-gray-500"
//                 style={{ fontFamily: "cursive" }}
//               >
//                 We Create Life Long Learners...
//               </p>
//             </div>

//           </div>

//           {/* Contact Info */}
//           <div className="flex items-center gap-8 mt-3 lg:mt-0 text-sm">

//             {/* Email */}
//             <div className="flex items-center gap-2">

//               <div className="bg-red-100 p-2 rounded-full">
//                 <Mail className="w-4 h-4 text-red-500" />
//               </div>

//               <div>
//                 <p className="font-semibold">EMAIL US</p>
//                 <TypingText text="motherspridewschool2@gmail.com" />
//               </div>

//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-2">

//               <div className="bg-red-100 p-2 rounded-full">
//                 <Phone className="w-4 h-4 text-red-500" />
//               </div>

//               <div>
//                 <p className="font-semibold">CALL US</p>
//                 <TypingText text="07752-299029" />
//               </div>

//             </div>

//             {/* Principal */}
//             <div className="flex items-center gap-2">

//               <div className="bg-red-100 p-2 rounded-full">
//                 <User className="w-4 h-4 text-red-500" />
//               </div>

//               <div>
//                 <p className="font-semibold">PRINCIPAL</p>
//                 <span className="text-gray-600">
//                   +91 7000356792
//                 </span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Navigation */}
//       <nav className="bg-gradient-to-r from-red-600 to-red-700 text-white">

//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-10 font-medium text-sm">

//           {[
//             { name: "HOME", path: "/" },
//             { name: "ABOUT US", path: "/about" },
//             { name: "ADMISSION", path: "/admission" },
//             { name: "ACADEMICS", path: "/academics" },
//             { name: "FACILITIES", path: "/facilities" },
//             { name: "CO-CURRICULAR", path: "/co-curricular" },
//             { name: "GALLERY", path: "/gallery" },
//             { name: "CONTACT", path: "/contact" }
//           ].map((item) => (

//             <Link
//               key={item.name}
//               to={item.path}
//               className="relative group"
//             >
//               {item.name}

//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>

//             </Link>

//           ))}

//         </div>

//       </nav>

//     </header>
//   );
// };

// export default Navbar;




import { Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

/* Typing Animation */
const TypingText = ({ text, speed = 40 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* Top Header */}
      <div className="bg-gray-100 border-b">

        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Mother's Pride World School
              </h1>

              <p
                className="text-sm md:text-base italic text-gray-600"
                style={{ fontFamily: "cursive" }}
              >
                We Create Life Long Learners...
              </p>
            </div>

          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 mt-4 lg:mt-0 text-sm">

            {/* Email */}
            <div className="flex items-center gap-2">

              <div className="bg-red-100 p-2 rounded-full">
                <Mail className="w-4 h-4 text-red-500" />
              </div>

              <div>
                <p className="font-semibold text-xs">EMAIL US</p>
                <TypingText text="motherspridewschool2@gmail.com" />
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">

              <div className="bg-red-100 p-2 rounded-full">
                <Phone className="w-4 h-4 text-red-500" />
              </div>

              <div>
                <p className="font-semibold text-xs">CALL US</p>
                <TypingText text="07752-299029" />
              </div>

            </div>

            {/* Principal */}
            <div className="flex items-center gap-2">

              <div className="bg-red-100 p-2 rounded-full">
                <User className="w-4 h-4 text-red-500" />
              </div>

              <div>
                <p className="font-semibold text-xs">PRINCIPAL</p>
                <span className="text-gray-600">
                  +91 7000356792
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-red-600 to-red-700 text-white">

        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 md:gap-10 font-medium text-sm md:text-base">

          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "ADMISSION", path: "/admission" },
            { name: "ACADEMICS", path: "/academics" },
            { name: "FACILITIES", path: "/facilities" },
            { name: "CO-CURRICULAR", path: "/co-curricular" },
            { name: "GALLERY", path: "/gallery" },
            { name: "CONTACT", path: "/contact" }
          ].map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className="relative group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>

            </Link>

          ))}

        </div>

      </nav>

    </header>
  );
};

export default Navbar;