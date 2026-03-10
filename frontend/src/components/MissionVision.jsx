import missionImg from "../assets/images/misson.png";
import visionImg from "../assets/images/vision.jpg";

const MissionVision = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gray-800">"We Create</span>{" "}
          <span className="text-red-600">Life-Long Learners..."</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">

            {/* Image */}
            <img
              src={missionImg}
              alt="mission"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white">

              <div className="bg-red-600 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3">
                OUR MISSION
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Inspiring Lifelong Learning
              </h3>

              <p className="text-gray-200 mb-3 leading-relaxed">
                To equip learners with the spirit of life-long learning
                and values of equity, accountability, trust, respect,
                and commitment.
              </p>

              <p className="text-gray-200 mb-3 leading-relaxed">
                To empower learners with global consciousness and make
                them custodians of their physical, emotional and
                spiritual well-being.
              </p>

              <p className="text-gray-200 leading-relaxed">
                To extend quality education services to the community.
              </p>

            </div>

          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">

            {/* Image */}
            <img
              src={visionImg}
              alt="vision"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white">

              <div className="bg-red-600 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3">
                OUR VISION
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Leading Educational Excellence
              </h3>

              <p className="text-gray-200 mb-3 leading-relaxed">
                We envision developing ourselves to rise and lead
                the pursuit of excellence in learning, nurturing,
                inspiring and enriching lives.
              </p>

              <p className="text-gray-200 leading-relaxed">
                To create a learner-centered institute committed to
                providing excellence in every aspect of student life.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;










// const MissionVision = () => {
//   return (
//     <section className="relative w-full py-24 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-gray-900">"We Create</span>{" "}
//           <span className="text-red-600">Life-Long Learners..."</span>
//         </h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Mission Card */}
//           <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

//             {/* Red Glow Border */}
//             <div className="absolute inset-0 rounded-2xl border border-red-500/20 group-hover:border-red-500 transition"></div>

//             <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider">
//               OUR MISSION
//             </span>

//             <h3 className="text-3xl font-bold mt-4 mb-6 text-gray-900">
//               Inspiring Lifelong Learning
//             </h3>

//             <p className="text-gray-700 mb-4 leading-relaxed">
//               To equip learners with the spirit of life-long learning and
//               values of equity, accountability, trust, respect and commitment.
//             </p>

//             <p className="text-gray-700 mb-4 leading-relaxed">
//               To empower learners with global consciousness and make them
//               custodians of their physical, emotional and spiritual well-being.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               To extend quality education services to the community as well.
//             </p>

//           </div>

//           {/* Vision Card */}
//           <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

//             {/* Red Glow Border */}
//             <div className="absolute inset-0 rounded-2xl border border-red-500/20 group-hover:border-red-500 transition"></div>

//             <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider">
//               OUR VISION
//             </span>

//             <h3 className="text-3xl font-bold mt-4 mb-6 text-gray-900">
//               Leading Educational Excellence
//             </h3>

//             <p className="text-gray-700 mb-4 leading-relaxed">
//               We envision developing ourselves to rise and lead the pursuit
//               of excellence in learning, nurturing, inspiring and enriching
//               the lives of every student.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               To create a learner-centered educational institute committed
//               to providing excellence in every aspect of student life.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MissionVision;