import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Developer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/shishir-islam-rupok',
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/shishir-islam-rupok',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/shishir_rupok',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:shishir.islam.rupok@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  const skills = [
    'React.js', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <motion.div
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <img
              src="https://github.com/shishir-islam-rupok.png"
              alt="Shishir Islam"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-2">Shishir Islam</h1>
            <p className="text-xl text-gray-600">Full Stack Developer</p>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-colors duration-200 ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with a focus on creating beautiful and functional web applications. 
              I love working with modern technologies and am always eager to learn new things. 
              Currently, I'm exploring AI integration in web applications and contributing to open-source projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Booring AI</h3>
                <p className="text-gray-600">A modern AI-powered web application built with React and Node.js</p>
              </li>
              <li>
                <h3 className="font-semibold">Portfolio Website</h3>
                <p className="text-gray-600">Personal portfolio showcasing projects and skills</p>
              </li>
              <li>
                <h3 className="font-semibold">E-commerce Platform</h3>
                <p className="text-gray-600">Full-stack e-commerce solution with Next.js and MongoDB</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p className="text-gray-600">Working on various web applications and client projects</p>
              </li>
              <li>
                <h3 className="font-semibold">Open Source Contributor</h3>
                <p className="text-gray-600">Contributing to various open-source projects on GitHub</p>
              </li>
              <li>
                <h3 className="font-semibold">Freelance Developer</h3>
                <p className="text-gray-600">Building custom solutions for clients worldwide</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Developer;
