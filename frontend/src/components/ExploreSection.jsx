import classroom from "../assets/images/smartclassroom.jpg";
import library from "../assets/images/library.jpg";
import lab from "../assets/images/laboratory.jpg";
import computer from "../assets/images/clab.jpg";

const data = [
  {
    title: "Smart Classroom",
    img: classroom,
    desc: "Smart Classrooms make the process of learning fun and ensure lasting impact on tech-savvy minds of today's generation.",
  },
  {
    title: "Library",
    img: library,
    desc: "Reading adds new dimensions to knowledge. We believe in building a strong reading culture that enhances education.",
  },
  {
    title: "Laboratories",
    img: lab,
    desc: "Well equipped labs allow young innovators to meet curriculum demands and convert theory into practice.",
  },
  {
    title: "Computer Lab",
    img: computer,
    desc: "Information Technology is essential today and we ensure students become proficient with modern tools.",
  },
];

const ExploreSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden">

      {/* background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            Explore
          </h2>

          <div className="w-16 h-[3px] bg-red-600 mx-auto mt-4"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* underline */}
                <div className="w-10 h-[2px] bg-red-600 mt-4 transition-all duration-300 group-hover:w-16"></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExploreSection;