import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import assets, { imageMap } from '../assets/assets';
import About from '../components/About';
import Future from '../components/Future';

function Home() {
    const { isAuthenticated } = useAuth();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const features = [
        {
            icon: "🚀",
            title: "Lightning Fast",
            description: "Generate high-quality AI content in seconds"
        },
        {
            icon: "🎨",
            title: "Creative Freedom",
            description: "Unlimited possibilities with our advanced AI models"
        },
        {
            icon: "🔒",
            title: "Secure & Private",
            description: "Your data is always protected and encrypted"
        },
        {
            icon: "💡",
            title: "Smart Solutions",
            description: "Intelligent automation for your workflow"
        }
    ];

    const stats = [
        { number: "99%", label: "Accuracy Rate" },
        { number: "24/7", label: "Support" },
        { number: "10M+", label: "Generated Images" },
        { number: "50K+", label: "Happy Users" }
    ];

    return (
        <motion.div 
            className="w-full py-10 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Section */}
            <motion.section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            className="text-center lg:text-left"
                            variants={itemVariants}
                        >
                            <motion.h1 
                                className="text-5xl lg:text-7xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                Transform Ideas with{' '}
                                <motion.span 
                                    className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
                                    whileHover={{ 
                                        scale: 1.05,
                                        rotate: [0, 5, -5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    AI Magic
                                </motion.span>
                            </motion.h1>
                            <motion.p 
                                className="text-xl text-gray-600 mb-8"
                                variants={itemVariants}
                            >
                                Create stunning images and content with our advanced AI technology.
                                Experience the future of creative generation.
                            </motion.p>
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                variants={itemVariants}
                            >
                                <Link 
                                    to={isAuthenticated ? "/dashboard" : "/login"}
                                    className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                                >
                                    Get Started Free
                                </Link>
                                <a 
                                    href="#features"
                                    className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:border-red-500 hover:text-red-600 transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="relative"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.img 
                                    src={assets.images.cat}
                                    alt="AI Generated Art" 
                                    className="w-full h-full object-cover"
                                    initial={{ filter: "blur(10px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </motion.div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    className="max-w-7xl mx-auto mt-20 px-4"
                    variants={itemVariants}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-2xl shadow-lg">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div 
                                    className="text-3xl font-bold text-red-600"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <motion.section 
                id="features"
                className="py-20 bg-gray-50"
                variants={itemVariants}
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl font-bold mb-4">Why Choose Booring AI?</h2>
                        <p className="text-xl text-gray-600">Discover the power of next-generation AI technology</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl font-bold mb-4">AI Generated Masterpieces</h2>
                        <p className="text-xl text-gray-600">Explore the possibilities of AI-powered creativity</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {imageMap.cat.map((image, index) => (
                            <motion.div 
                                key={index}
                                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img 
                                    src={image} 
                                    alt={`AI Generated ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    initial={{ filter: "blur(5px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white text-xl font-semibold">Creation #{index + 1}</h3>
                                        <p className="text-gray-200">AI Generated Artwork</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Other Components */}
            <About />
            <Future />
        </motion.div>
    );
}

export default Home;
