import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBrain,
  FaHeart,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaStar,
  FaCode
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import TeamImage from '../assets/team.jpg';

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

const About = () => {
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
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={fadeIn} className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <motion.p
              variants={fadeIn}
              className="text-xl mt-6 text-gray-200 leading-relaxed max-w-lg"
              animate={{ x: [0, 10, 0], transition: { repeat: Infinity, duration: 3 } }}
            >
              We’re a Team Passionate about Empowering Your Career. Our AI-Driven Platform Transforms Your Unique Story into a Standout Resume.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex gap-4 justify-center md:justify-start">
              <Link
                to="/generate-resume"
                className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
              >
                <FaRocket /> Start Your Journey
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 text-lg bg-transparent border border-teal-500 hover:bg-teal-500/20 text-teal-400 hover:text-white rounded-full transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="md:w-1/2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={TeamImage}
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full object-cover h-64 md:h-96 border border-gray-700/50"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Journey Section */}
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
          Our Journey
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          Born from a Vision to Simplify Job Applications, We’re Redefining How Careers Begin with AI Innovation.
        </motion.p>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={fadeIn} className="lg:w-1/2">
            <img
              src={TeamImage}
              alt="Our Beginnings"
              className="rounded-2xl shadow-xl w-full object-cover h-64 lg:h-80 border border-gray-700/50"
            />
          </motion.div>
          <motion.div variants={fadeIn} className="lg:w-1/2">
            <p className="text-gray-300 leading-relaxed text-lg">
              It All Started with a Simple Idea: Every Job Seeker Deserves a Resume that Shines. Frustrated by Generic Templates and Complex Tools, We Set Out to Create Something Different. Powered by DeepSeek-R1’s AI Brilliance, Spring Boot’s Robust Backbone, and React’s Sleek Interface, Our Platform Crafts Resumes that Tell Your Unique Story. From Humble Beginnings to Empowering Thousands, We’re Here to Fuel Your Career Success.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
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
            Our Technology
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
          >
            Cutting-Edge Tools Powering Your Resume Revolution.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <TechCard
              icon={<FaCode className="text-teal-400 text-4xl" />}
              title="Spring Boot"
              desc="Our Robust Backend Delivers Lightning-Fast Performance, Ensuring Your Resumes Are Generated Seamlessly."
            />
            <TechCard
              icon={<FaRocket className="text-teal-400 text-4xl" />}
              title="React"
              desc="A Dynamic Frontend Brings Your Resume to Life with Intuitive, Real-Time Customization."
            />
            <TechCard
              icon={<FaBrain className="text-teal-400 text-4xl" />}
              title="DeepSeek-R1"
              desc="Our Advanced AI Understands Your Story, Crafting Resumes that Capture Your Unique Strengths."
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
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
          Meet Our Team
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          A Passionate Crew Dedicated to Your Career Success.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <TeamCard
            name="Alex Carter"
            role="AI Innovator"
            desc="Leading Our DeepSeek-R1 Magic, Alex Ensures Every Resume Feels Personal."
            icon={<FaBrain className="text-teal-400 text-2xl" />}
          />
          <TeamCard
            name="Maya Patel"
            role="Frontend Wizard"
            desc="Crafting Sleek React Interfaces, Maya Makes Your Experience Effortless."
            icon={<FaRocket className="text-teal-400 text-2xl" />}
          />
          <TeamCard
            name="Liam Chen"
            role="Backend Guru"
            desc="Powering Our Platform with Spring Boot, Liam Keeps Things Running Smoothly."
            icon={<FaCode className="text-teal-400 text-2xl" />}
          />
        </motion.div>
      </motion.section>

      {/* Our Impact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-gray-900 to-teal-900/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12"
          >
            Our Impact
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
          >
            Transforming Careers, One Resume at a Time.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ImpactCard
              icon={<FaUsers className="text-teal-400 text-4xl" />}
              value="100+"
              label="Resumes Created"
            />
            <ImpactCard
              icon={<FaGlobe className="text-teal-400 text-4xl" />}
              value="10+"
              label="Countries Reached"
            />
            <ImpactCard
              icon={<FaStar className="text-teal-400 text-4xl" />}
              value="4.8/5"
              label="User Rating"
            />
            <ImpactCard
              icon={<FaHeart className="text-teal-400 text-4xl" />}
              value="Countless"
              label="Dreams Fueled"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Join Our Mission Section */}
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
          Join Our Mission
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We’re Here to Empower Every Job Seeker with a Resume that Opens Doors. Be Part of Our Vision to Redefine Career Success.
        </motion.p>
        <motion.div variants={fadeIn} className="flex justify-center gap-4">
          <Link
            to="/generate-resume"
            className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
          >
            <FaRocket /> Create Your Resume
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 text-lg bg-transparent border border-teal-500 hover:bg-teal-500/20 text-teal-400 hover:text-white rounded-full transition-all duration-300"
          >
            Connect With Us
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

// TechCard Component
const TechCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/60 p-6 rounded-2xl shadow-xl text-center flex flex-col items-center border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 group backdrop-blur-sm"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(13, 148, 136, 0.2)' }}
    >
      <div className="text-5xl text-teal-400 group-hover:text-teal-300 transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 text-gray-100">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
};

// TeamCard Component
const TeamCard = ({ name, role, desc, icon }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/60 p-6 rounded-2xl shadow-xl text-center border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 group backdrop-blur-sm"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
      <p className="text-sm text-teal-400">{role}</p>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
};

// ImpactCard Component
const ImpactCard = ({ icon, value, label }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/60 p-6 rounded-2xl shadow-xl text-center border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 group backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-5xl text-teal-400 group-hover:text-teal-300 transition-colors">{icon}</div>
      <h3 className="text-2xl font-bold mt-4 text-gray-100">{value}</h3>
      <p className="text-gray-400 mt-2 text-sm">{label}</p>
    </motion.div>
  );
};

export default About;