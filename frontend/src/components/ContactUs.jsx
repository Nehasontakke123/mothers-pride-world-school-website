// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <section className="relative py-24 bg-gray-100">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE MAP */}
//         <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">

//           <iframe
//             src="https://maps.google.com/maps?q=Mothers%20Pride%20World%20School%20Bilaspur&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             className="w-full h-full"
//             loading="lazy"
//           ></iframe>

//         </div>

//         {/* RIGHT SIDE CONTACT */}
//         <div className="bg-white p-10 rounded-2xl shadow-xl">

//           <h2 className="text-4xl font-bold mb-8">
//             Get In <span className="text-red-600">Touch</span>
//           </h2>

//           {/* Branch 2 */}
//           <div className="mb-8">

//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Branch 2
//             </h3>

//             <p className="flex gap-3 mb-2 text-gray-600">
//               <FaMapMarkerAlt className="text-red-600 mt-1"/>
//               In Front of Chakarbhata Railway Station
//             </p>

//             <p className="flex gap-3 mb-2 text-gray-600">
//               <FaPhone className="text-red-600 mt-1"/>
//               +91 7000356797
//             </p>

//             <p className="flex gap-3 text-gray-600">
//               <FaEnvelope className="text-red-600 mt-1"/>
//               motherspridewschool2@gmail.com
//             </p>

//           </div>

//           {/* Branch 1 */}
//           <div>

//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Branch 1
//             </h3>

//             <p className="flex gap-3 mb-2 text-gray-600">
//               <FaMapMarkerAlt className="text-red-600 mt-1"/>
//               D-18 Vidya Nagar, Near Shiv Temple, Bilaspur C.G
//             </p>

//             <p className="flex gap-3 mb-2 text-gray-600">
//               <FaPhone className="text-red-600 mt-1"/>
//               +91 8109773348
//             </p>

//             <p className="flex gap-3 text-gray-600">
//               <FaEnvelope className="text-red-600 mt-1"/>
//               motherspridewschool@gmail.com
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ContactUs;

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa";

const ContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone) newErrors.phone = "Phone number required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Your message has been sent successfully!");
    }

  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Contact <span className="text-red-600">Us</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-gray-100/80 backdrop-blur-xl p-12 flex flex-col justify-center border-r border-gray-200">

            <h3 className="text-3xl font-semibold mb-6 text-gray-800 tracking-wide">
              Get in Touch
            </h3>

            <p className="mb-8 text-gray-600">
              Have questions about admissions or academics?
              Send us a message and our team will contact you soon.
            </p>

            <div className="space-y-5 text-gray-700">

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600"/>
                Railway Station Main Road, Chakarbhata, Bilaspur (C.G.)
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-red-600"/>
                07752-299029
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-600"/>
                motherspridewschool2@gmail.com
              </p>

            </div>

          </div>


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-12 space-y-6 bg-white"
          >

            {/* NAME */}
            <div className="relative">

              <FaUser className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:border-red-500 focus:outline-none"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}

            </div>


            {/* EMAIL */}
            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:border-red-500 focus:outline-none"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}

            </div>


            {/* PHONE */}
            <div className="relative">

              <FaPhone className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:border-red-500 focus:outline-none"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}

            </div>


            {/* MESSAGE */}
            <div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:outline-none"
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              <FaPaperPlane />
              Send Message
            </button>

            {success && (
              <p className="text-green-600 text-center font-medium">
                {success}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;