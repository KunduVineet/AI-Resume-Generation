import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-32 px-4 bg-gradient-to-r from-teal-900 via-gray-900 to-purple-900 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-80 h-80 bg-teal-600/30 rounded-full -top-40 left-10 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full -bottom-40 right-20 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl mt-6 text-gray-200 leading-relaxed max-w-2xl mx-auto"
          >
            We’d Love to Hear from You! Reach Out with Questions, Feedback, or Just to Say Hi.
          </motion.p>
          <motion.div variants={fadeIn} className="mt-8 flex gap-4 justify-center">
            <Link
              to="/generate-resume"
              className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              <FaPaperPlane /> Create Resume
            </Link>
            <a
              href="#contact-form"
              className="px-8 py-4 text-lg bg-transparent border border-teal-500 hover:bg-teal-500/20 text-teal-400 hover:text-white rounded-full transition-all duration-300"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12"
        >
          Send Us a Message
        </motion.h2>
        <motion.div
          variants={fadeIn}
          className="max-w-2xl mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-xl border border-gray-700/30"
        >
          <form id="contact-form">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-teal-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-teal-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-teal-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              variants={fadeIn}
              className="w-full px-6 py-3 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaPaperPlane /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-gray-850 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12"
          >
            Our Contact Details
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ContactCard
              icon={<FaEnvelope className="text-teal-400 text-4xl" />}
              title="Email Us"
              desc="kunduvineet6@gmail.com"
              link="mailto:kunduvineet6@gmail.com"
            />
            <ContactCard
              icon={<FaPhone className="text-teal-400 text-4xl" />}
              title="Call Us"
              desc="+91 8882924671"
              link="tel:8882924671"
            />
            <ContactCard
              icon={<FaMapMarkerAlt className="text-teal-400 text-4xl" />}
              title="Visit Us"
              desc="New Delhi, India"
              link="#"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Social Connect Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 text-center bg-gradient-to-b from-teal-900/50 to-gray-900"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-8"
        >
          Connect With Us
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Follow Us on Social Media for Updates, Tips, and Career Insights.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="flex justify-center gap-6"
        >
          <SocialLink
            icon={<FaTwitter className="text-3xl" />}
            href="https://twitter.com/resumegenix"
          />
          <SocialLink
            icon={<FaLinkedin className="text-3xl" />}
            href="https://linkedin.com/company/resumegenix"
          />
          <SocialLink
            icon={<FaGithub className="text-3xl" />}
            href="https://github.com/resumegenix"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

// ContactCard Component
const ContactCard = ({ icon, title, desc, link }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/60 p-6 rounded-2xl shadow-xl text-center flex flex-col items-center border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 group backdrop-blur-sm"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(13, 148, 136, 0.2)' }}
    >
      <div className="text-5xl text-teal-400 group-hover:text-teal-300 transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 text-gray-100">{title}</h3>
      <a
        href={link}
        className="text-gray-400 mt-2 text-sm hover:text-teal-400 transition-colors"
      >
        {desc}
      </a>
    </motion.div>
  );
};

// SocialLink Component
const SocialLink = ({ icon, href }) => {
  return (
    <motion.a
      variants={fadeIn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-teal-400 transition-colors"
      whileHover={{ scale: 1.2 }}
    >
      {icon}
    </motion.a>
  );
};

export default Contact;