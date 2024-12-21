import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Prices = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Basic AI text generation',
        '100 images per month',
        'Email support',
        'API access',
        '1 user'
      ],
      highlighted: false,
      color: 'bg-gray-50'
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Advanced AI text generation',
        'Unlimited images',
        'Priority support',
        'API access',
        'Custom models',
        '5 team members',
        'Analytics dashboard'
      ],
      highlighted: true,
      color: 'bg-red-50'
    },
    {
      name: 'Enterprise',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Custom AI solutions',
        'Unlimited everything',
        '24/7 dedicated support',
        'Advanced API access',
        'Custom model training',
        'Unlimited team members',
        'Advanced analytics',
        'SLA guarantee'
      ],
      highlighted: false,
      color: 'bg-gray-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.div 
      className="min-h-screen py-40 px-4 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={itemVariants}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            Choose the perfect plan for your AI needs
          </motion.p>

          <motion.div 
            className="inline-flex items-center p-2 bg-gray-100 rounded-lg mb-12"
            variants={itemVariants}
          >
            <button
              className={"px-6 py-2 rounded-md " + 
                (billingCycle === 'monthly'
                  ? 'bg-white shadow-md text-gray-900'
                  : 'text-gray-600')
              }
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={"px-6 py-2 rounded-md " + 
                (billingCycle === 'yearly'
                  ? 'bg-white shadow-md text-gray-900'
                  : 'text-gray-600')
              }
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="ml-2 text-red-500 text-sm">Save 20%</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={"rounded-2xl p-8 " + plan.color + " " +
                (plan.highlighted
                  ? 'ring-2 ring-red-500 transform scale-105'
                  : '')
              }
              variants={itemVariants}
              whileHover={{ 
                scale: plan.highlighted ? 1.05 : 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <motion.ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className={"w-full py-3 px-6 rounded-lg text-white font-semibold " +
                  (plan.highlighted
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gray-900 hover:bg-gray-800')
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all plans come with a 14-day free trial. No credit card required."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-left"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Prices;