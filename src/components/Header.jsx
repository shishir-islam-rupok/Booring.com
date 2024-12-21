import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaRobot, FaCog, FaQuestionCircle, FaSignOutAlt, FaChartBar, FaSun, FaMoon } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { BiDollarCircle } from 'react-icons/bi';
import { IoInformationCircle } from 'react-icons/io5';

function Header() {
    const { isAuthenticated, logout, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "/", text: "Home", icon: FaHome },
        { to: "/prices", text: "Pricing", icon: BiDollarCircle },
        { to: "/features", text: "Features", icon: HiSparkles },
        { to: "/about", text: "About", icon: IoInformationCircle },
    ];

    const dropdownLinks = [
        { text: "Dashboard", icon: FaChartBar, to: "/dashboard" },
        { text: "Settings", icon: FaCog, to: "/settings" },
        { text: "Help Center", icon: FaQuestionCircle, to: "/help" },
    ];

    return (
        <motion.header 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 shadow-lg' 
                    : 'bg-white/50 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                            <motion.div
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaRobot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </motion.div>
                            <motion.span 
                                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hidden sm:inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                Booring AI
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.to}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link 
                                    to={link.to} 
                                    className="px-3 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center space-x-2 group text-sm md:text-base"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center justify-center"
                                    >
                                        <link.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-red-600 transition-colors" />
                                    </motion.div>
                                    <span className="font-medium whitespace-nowrap">{link.text}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Auth Section */}
                    <div className="hidden md:flex items-center space-x-3">
                        {isAuthenticated ? (
                            <div className="relative">
                                <motion.div
                                    className="flex items-center space-x-2 md:space-x-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-red-600 group"
                                    >
                                        <motion.div 
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-semibold shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {user?.email?.[0]?.toUpperCase() || 'U'}
                                        </motion.div>
                                        <span className="hidden lg:inline text-sm md:text-base font-medium">{user?.email || 'User'}</span>
                                        <motion.svg
                                            className="w-4 h-4 md:w-5 md:h-5 transition-transform"
                                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-12 w-56 py-2 bg-white rounded-xl shadow-xl border border-gray-100"
                                            >
                                                {dropdownLinks.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <Link
                                                            to={item.to}
                                                            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 group text-sm md:text-base"
                                                        >
                                                            <item.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-red-600 transition-colors" />
                                                            <span className="font-medium">{item.text}</span>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                                <hr className="my-2 border-gray-100" />
                                                <motion.button
                                                    onClick={logout}
                                                    className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 group text-sm md:text-base"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <FaSignOutAlt className="w-4 h-4 md:w-5 md:h-5 group-hover:text-red-600 transition-colors" />
                                                    <span className="font-medium">Logout</span>
                                                </motion.button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                className="flex items-center space-x-2 md:space-x-3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <Link 
                                    to="/login"
                                    className="px-3 py-1.5 md:px-4 md:py-2 text-red-600 hover:text-red-700 font-medium hover:bg-red-50 rounded-lg transition-all duration-200 text-sm md:text-base whitespace-nowrap"
                                >
                                    Sign In
                                </Link>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link 
                                        to="/login"
                                        className="px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium flex items-center space-x-2 text-sm md:text-base whitespace-nowrap"
                                    >
                                        <span>Get Started</span>
                                        <HiSparkles className="w-4 h-4 md:w-5 md:h-5" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-1.5 rounded-lg hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </motion.svg>
                    </motion.button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden py-3 bg-white rounded-b-2xl shadow-lg"
                        >
                            <div className="flex flex-col space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            to={link.to} 
                                            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg group text-sm"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <link.icon className="w-4 h-4 group-hover:text-red-600 transition-colors" />
                                            <span className="font-medium">{link.text}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                                {isAuthenticated ? (
                                    <>
                                        {dropdownLinks.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: (navLinks.length + index) * 0.1 }}
                                            >
                                                <Link
                                                    to={item.to}
                                                    className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg group text-sm"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <item.icon className="w-4 h-4 group-hover:text-red-600 transition-colors" />
                                                    <span className="font-medium">{item.text}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                        <motion.button
                                            onClick={() => {
                                                logout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg group text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (navLinks.length + dropdownLinks.length) * 0.1 }}
                                        >
                                            <FaSignOutAlt className="w-4 h-4 group-hover:text-red-600 transition-colors" />
                                            <span className="font-medium">Logout</span>
                                        </motion.button>
                                    </>
                                ) : (
                                    <motion.div
                                        className="px-4 pt-2 flex flex-col space-y-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: navLinks.length * 0.1 }}
                                    >
                                        <Link 
                                            to="/login"
                                            className="w-full py-2 text-center text-red-600 hover:text-red-700 font-medium hover:bg-red-50 rounded-lg text-sm"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Sign In
                                        </Link>
                                        <Link 
                                            to="/login"
                                            className="w-full py-2 text-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium text-sm"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Get Started
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}

export default Header;