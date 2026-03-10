import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE MAP */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">

          <iframe
            src="https://maps.google.com/maps?q=Mothers%20Pride%20World%20School%20Bilaspur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>

        </div>

        {/* RIGHT SIDE CONTACT */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Get In <span className="text-red-600">Touch</span>
          </h2>

          {/* Branch 2 */}
          <div className="mb-8">

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Branch 2
            </h3>

            <p className="flex gap-3 mb-2 text-gray-600">
              <FaMapMarkerAlt className="text-red-600 mt-1"/>
              In Front of Chakarbhata Railway Station
            </p>

            <p className="flex gap-3 mb-2 text-gray-600">
              <FaPhone className="text-red-600 mt-1"/>
              +91 7000356797
            </p>

            <p className="flex gap-3 text-gray-600">
              <FaEnvelope className="text-red-600 mt-1"/>
              motherspridewschool2@gmail.com
            </p>

          </div>

          {/* Branch 1 */}
          <div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Branch 1
            </h3>

            <p className="flex gap-3 mb-2 text-gray-600">
              <FaMapMarkerAlt className="text-red-600 mt-1"/>
              D-18 Vidya Nagar, Near Shiv Temple, Bilaspur C.G
            </p>

            <p className="flex gap-3 mb-2 text-gray-600">
              <FaPhone className="text-red-600 mt-1"/>
              +91 8109773348
            </p>

            <p className="flex gap-3 text-gray-600">
              <FaEnvelope className="text-red-600 mt-1"/>
              motherspridewschool@gmail.com
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;