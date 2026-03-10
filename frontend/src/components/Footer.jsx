import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>

          <h3 className="text-2xl text-red-600 font-semibold mb-4">
            Mother's Pride World School
          </h3>

          <p className="text-gray-400 mb-6">
            We create life long learners nurturing excellence and innovation
            through dedicated care and modern pedagogy.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h4 className="text-lg font-semibold mb-4 border-b border-red-600 inline-block pb-1">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Programs</li>
            <li>Facilities</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Get In Touch */}
        <div>

          <h4 className="text-lg font-semibold mb-4 border-b border-red-600 inline-block pb-1">
            Get In Touch
          </h4>

          <p className="flex gap-2 mb-2 text-gray-400">
            <FaMapMarkerAlt className="text-red-600"/>
            In Front of Chakarbhata Railway Station
          </p>

          <p className="flex gap-2 mb-2 text-gray-400">
            <FaPhone className="text-red-600"/>
            +91 7000356797
          </p>

          <p className="flex gap-2 text-gray-400">
            <FaEnvelope className="text-red-600"/>
            motherspridewschool2@gmail.com
          </p>

        </div>

        {/* Map */}
        <div>

          <h4 className="text-lg font-semibold mb-4 border-b border-red-600 inline-block pb-1">
            Location
          </h4>

          <iframe
            src="https://maps.google.com/maps?q=Mothers%20Pride%20World%20School%20Bilaspur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40 rounded-lg border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 py-6 border-t border-gray-800 mt-10">
        © 2026 Mother's Pride World School. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;