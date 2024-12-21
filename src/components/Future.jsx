import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
    const futureFeatures = [
        {
            icon: "🧠",
            title: "Neural Networks",
            description: "Advanced deep learning models that understand and adapt",
            color: "from-purple-500 to-indigo-600",
            delay: 0.2
        },
        {
            icon: "🎯",
            title: "Precision AI",
            description: "99.9% accuracy in predictions and generations",
            color: "from-red-500 to-pink-600",
            delay: 0.3
        },
        {
            icon: "🌐",
            title: "Global Learning",
            description: "AI that learns from worldwide data in real-time",
            color: "from-blue-500 to-cyan-600",
            delay: 0.4
        },
        {
            icon: "🔮",
            title: "Predictive Analysis",
            description: "See the future with our advanced forecasting",
            color: "from-emerald-500 to-teal-600",
            delay: 0.5
        }
    ];

    const techStack = [
        "Neural Networks", "Machine Learning", "Deep Learning", "Computer Vision",
        "Natural Language Processing", "Reinforcement Learning", "Quantum Computing",
        "Edge AI", "AutoML", "Federated Learning", "Transfer Learning", "GANs"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    return (
        <section className="relative overflow-hidden  bg-gray-900 text-white py-40">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
                        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        The Future is AI
                    </motion.h2>
                    <p className="text-xl text-gray-300">
                        Discover how our cutting-edge AI technology is shaping tomorrow's innovations
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {futureFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur"></div>
                            <div className={`relative h-full bg-gradient-to-r ${feature.color} p-8 rounded-xl overflow-hidden`}>
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-200">{feature.description}</p>
                                
                                {/* Decorative Elements */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack Section */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Cutting-Edge Technology Stack</h3>
                        <p className="text-gray-300">Powered by the latest advancements in AI</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.1,
                                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                                }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join the AI Revolution
                    </motion.button>
                </motion.div>
            </div>

            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full"
                        style={{ top: `${20 * i}%` }}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Future;