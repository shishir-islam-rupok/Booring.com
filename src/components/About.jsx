import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaHeadset, FaGlobeAmericas } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';
import { IoMdFlash } from 'react-icons/io';
import { RiCommunityLine } from 'react-icons/ri';

const About = () => {
  const stats = [
    { number: "5M+", label: "Active Users", icon: FaUsers },
    { number: "98%", label: "Success Rate", icon: FaChartLine },
    { number: "24/7", label: "Support", icon: FaHeadset },
    { number: "50+", label: "Countries", icon: FaGlobeAmericas }
  ];

  const features = [
    {
      icon: BiTargetLock,
      title: "Our Mission",
      description: "To democratize AI technology and make it accessible to everyone, everywhere.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: IoMdFlash,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge AI solutions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: RiCommunityLine,
      title: "Community",
      description: "Building a global community of AI enthusiasts and creators.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            About Booring AI
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to revolutionize the way people interact with AI technology. 
            Our platform combines cutting-edge artificial intelligence with intuitive design 
            to create powerful, accessible solutions for everyone.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 text-blue-600">
                <stat.icon className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl`}></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">
                  <feature.icon className="w-12 h-12 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-6">Join Our Journey</h3>
          <p className="text-gray-600 mb-8">
            We're building the future of AI technology and we want you to be part of it. 
            Join our community of innovators, creators, and AI enthusiasts.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default About;