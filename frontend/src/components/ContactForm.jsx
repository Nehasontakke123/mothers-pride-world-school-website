import { useState } from "react";

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

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } 
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number required";
    } 
    else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

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
    } 
    else {
      setErrors({});
      setSuccess("Your message has been sent successfully!");
      console.log(form);
    }
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-red-600">Us</span>
        </h2>

        <div className="bg-white shadow-xl rounded-xl p-10 grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-600 mb-6">
              If you have any questions regarding admissions,
              academics or facilities feel free to contact us.
            </p>

            <div className="space-y-4 text-gray-700">

              <p>
                📍 Railway Station Main Road, Chakarbhata,
                Bilaspur (C.G.)
              </p>

              <p>
                📞 07752-299029
              </p>

              <p>
                ✉ motherspridewschool2@gmail.com
              </p>

            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-red-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-red-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-red-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-red-500"
              ></textarea>

              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 text-center">
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