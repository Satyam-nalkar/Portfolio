import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0ddpkh",      // SERVICE_ID
        "template_lesveso",     // TEMPLATE_ID
        formRef.current,
        "2T4RGJ1x-T4UyXq4h" // PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-20 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in <span className="text-red-500">Touch</span>
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 rounded-xl border border-gray-800"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows="5"
              name="message"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-red-500 rounded text-lg font-semibold"
          >
            Send Message
          </motion.button>

          {/* Success Message */}
          {success && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
