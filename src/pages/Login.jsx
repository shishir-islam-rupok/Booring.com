import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            login({ email });
            navigate('/');
        } else {
            // Handle registration
            console.log('Registration:', { name, email, password });
            setIsLogin(true);
        }
    };

    const socialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        // Implement social login
    };

    return (
        <motion.div 
            className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-32 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-4xl w-full space-y-8 flex flex-col md:flex-row gap-8">
                {/* Left Side - Form */}
                <motion.div 
                    className="flex-1 bg-white p-8 rounded-2xl shadow-lg"
                    variants={formVariants}
                >
                    <div className="text-center mb-8">
                        <motion.h2 
                            className="text-3xl font-extrabold text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {isLogin ? 'Welcome Back!' : 'Create Account'}
                        </motion.h2>
                        <motion.p 
                            className="mt-2 text-sm text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {isLogin 
                                ? 'Sign in to access your account' 
                                : 'Join us and start your AI journey'}
                        </motion.p>
                    </div>

                    <motion.form 
                        className="mt-8 space-y-6" 
                        onSubmit={handleSubmit}
                        variants={formVariants}
                    >
                        <div className="space-y-4">
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <label className="text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </motion.div>
                            )}
                            
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        )}

                        <motion.button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </motion.button>

                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                className="text-sm text-gray-600 hover:text-red-500"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin 
                                    ? "Don't have an account? Sign up" 
                                    : "Already have an account? Sign in"}
                            </button>
                        </div>
                    </motion.form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <motion.button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => socialLogin('Google')}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img 
                                    className="h-5 w-5 mr-2" 
                                    src="https://www.svgrepo.com/show/475656/google-color.svg" 
                                    alt="Google logo" 
                                />
                                Google
                            </motion.button>

                            <motion.button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => socialLogin('GitHub')}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img 
                                    className="h-5 w-5 mr-2" 
                                    src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                    alt="GitHub logo" 
                                />
                                GitHub
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Features */}
                <motion.div 
                    className="flex-1 hidden md:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl text-white h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6">Why Choose Booring AI?</h3>
                        <ul className="space-y-4">
                            {[
                                "Advanced AI text generation capabilities",
                                "Secure and scalable platform",
                                "24/7 technical support",
                                "Regular feature updates",
                                "Competitive pricing plans",
                                "Custom AI model training"
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Login;
