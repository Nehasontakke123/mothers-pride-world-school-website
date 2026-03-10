// import { useState } from "react";

// import chairmanImg from "../assets/images/Chairman.jpeg";
// import principalImg from "../assets/images/principal.jpeg";

// const profiles = [
//   {
//     name: "Sabino D'Souza",
//     role: "Founder & Chairman, MPWS",
//     title: "Chairman's Message",
//     image: chairmanImg,
//     message:
//       "It has been my endeavour to provide a conductive environment for building a solid foundation in the early years of our pupils' life. Each child is special and God's miracle, so it is our duty to nurture talents, inculcate right values and encourage innovation.",
//   },
//   {
//     name: "Vandana D'Souza",
//     role: "Principal, MPWS",
//     title: "Principal's Message",
//     image: principalImg,
//     message:
//       "Welcome to Mother's Pride World family. We share a small amount of your child's life and strive to provide not only academic excellence but also a loving and secure environment for every student.",
//   },
// ];

// const MessageSection = () => {
//   const [index, setIndex] = useState(0);

//   const profile = profiles[index];

//   return (
//     <section className="w-full py-24 bg-gradient-to-b from-gray-100 to-gray-200">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden p-10">

//           {/* LEFT TEXT */}
//           <div className="flex flex-col justify-center">

//             {/* Quote icon */}
//             <div className="text-red-600 text-5xl font-serif mb-4">
//               “
//             </div>

//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               {profile.title}
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-8 text-lg">
//               {profile.message}
//             </p>

//             {/* line */}
//             <div className="w-24 h-1 bg-red-600 mb-6"></div>

//             <h3 className="text-2xl font-semibold text-gray-900">
//               {profile.name}
//             </h3>

//             <p className="text-red-600 font-medium mt-1">
//               {profile.role}
//             </p>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex flex-col items-center justify-center">

//             <div className="relative group">

//               <img
//                 src={profile.image}
//                 alt={profile.name}
//                 className="w-72 h-80 object-cover rounded-2xl shadow-xl transition duration-500 group-hover:scale-105"
//               />

//               {/* red accent border */}
//               <div className="absolute inset-0 rounded-2xl border border-red-500/20"></div>

//             </div>

//             {/* Pagination */}
//             <div className="flex gap-3 mt-8">

//               {profiles.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className={`transition-all duration-300 rounded-full ${
//                     i === index
//                       ? "w-8 h-3 bg-red-600"
//                       : "w-3 h-3 bg-gray-300"
//                   }`}
//                 />
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MessageSection;
import { useState } from "react";
import chairmanImg from "../assets/images/Chairman.jpeg";
import principalImg from "../assets/images/principal.jpeg";

const profiles = [
  {
    name: "Sabino D'Souza",
    role: "Founder & Chairman, MPWS",
    title: "Chairman's Message",
    image: chairmanImg,
    message:
      "It has been my endeavour to provide a conductive environment for building a solid foundation in the early years of our pupils' life. Each child is special and God's miracle, so it is our duty to nurture talents, inculcate right values and encourage innovation.",
  },
  {
    name: "Vandana D'Souza",
    role: "Principal, MPWS",
    title: "Principal's Message",
    image: principalImg,
    message:
      "Welcome to Mother's Pride World family. We strive to provide not only academic excellence but also a loving and secure environment for every student.",
  },
];

const MessageSection = () => {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];

  return (
    <section className="w-full py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* LEFT FULL IMAGE */}
          <div className="h-[520px]">

            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />

          </div>

          {/* RIGHT MESSAGE */}
          <div className="relative p-14 flex flex-col justify-center">

            <div className="absolute top-8 right-8 text-6xl text-gray-200 font-serif">
              ❝
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {profile.title}
            </h2>

            <div className="w-16 h-1 bg-red-600 mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {profile.message}
            </p>

            <div className="border-t pt-6">

              <h3 className="text-2xl font-semibold text-gray-900">
                {profile.name}
              </h3>

              <p className="text-red-600 font-medium">
                {profile.role}
              </p>

            </div>

            {/* Pagination */}
            <div className="flex gap-3 mt-8">

              {profiles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-red-600"
                      : "w-3 bg-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MessageSection;