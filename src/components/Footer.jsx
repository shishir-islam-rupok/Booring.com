import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerSections = {
    company: {
      title: "Company",
      links: [
        { text: "About Us", to: "/about" },
        { text: "Careers", to: "/careers" },
        { text: "Contact", to: "/contact" }
      ]
    },
    services: {
      title: "Services",
      links: [
        { text: "AI Solutions", to: "/services" },
        { text: "Custom Development", to: "/development" },
        { text: "Consulting", to: "/consulting" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { text: "Documentation", to: "/docs" },
        { text: "Blog", to: "/blog" },
        { text: "Support", to: "/support" }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h2 
              className="text-2xl font-bold mb-4"
              whileHover={{ x: 5 }}
            >
              Booring AI
            </motion.h2>
            <p className="text-gray-300 mb-4">
              Transforming the future with innovative AI solutions. We make artificial intelligence accessible and practical for everyone.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {Object.values(footerSections).map((section) => (
            <motion.div 
              key={section.title}
              variants={itemVariants}
              className="col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li 
                    key={link.text}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={link.to}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
        >
          <motion.p 
            className="text-base text-gray-300"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            2023 Booring AI. All rights reserved. Made with{' '}
            <motion.span 
              className="text-red-500 inline-block"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              ❤️
            </motion.span>
            {' '}by{' '}
            <motion.a
              href="/developer"
              className="text-red-500 hover:text-red-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shishir
            </motion.a>
          </motion.p>

          <motion.div 
            className="flex space-x-6"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/sashko-dev/booring-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="mailto:contact@booringai.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer