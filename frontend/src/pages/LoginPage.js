import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/profile');
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative flex items-center justify-center">
      <AnimatedBackground />
      <Card className="p-8 bg-white/90 backdrop-blur-sm w-full max-w-md relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          {isRegistering ? 'Create Account' : 'Welcome Back'}
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          {isRegistering ? 'Already have an account? ' : 'Need an account? '}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login here' : 'Register now'}
          </button>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;