import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Advanced Forex Trading AI</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We combine cutting-edge artificial intelligence with proven trading strategies to help traders
            make informed decisions in the forex market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To democratize forex trading by providing advanced AI-powered tools that were previously
              only available to institutional traders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Our Team</h3>
            <p className="text-gray-600 text-center">
              A diverse group of experts in artificial intelligence, financial markets, and software
              development working together to revolutionize forex trading.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Our Values</h3>
            <p className="text-gray-600 text-center">
              We believe in transparency, reliability, and continuous innovation while maintaining the
              highest standards of security and ethical trading practices.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <p className="ml-3 text-gray-600">Advanced AI-powered trading signals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <p className="ml-3 text-gray-600">Real-time market analysis and insights</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <p className="ml-3 text-gray-600">24/7 automated trading capabilities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <p className="ml-3 text-gray-600">Comprehensive risk management tools</p>
                </li>
              </ul>
            </div>
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
                alt="Trading dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}