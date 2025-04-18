import React, { useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';

Modal.setAppElement('#root');

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('hideWelcomeModal', 'true');
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-xl outline-none p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center"
    >
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Welcome to Advanced Forex Trading AI</h2>
        <p className="mb-4 text-gray-600">
          Experience the power of artificial intelligence in forex trading. Our advanced AI system analyzes market conditions, 
          technical indicators, and fundamental factors to provide you with high-probability trading signals.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-indigo-900 mb-2">Key Features:</h3>
          <ul className="space-y-2 text-indigo-700">
            <li>• Real-time market analysis and trading signals</li>
            <li>• Advanced technical indicator analysis</li>
            <li>• Fundamental market driver insights</li>
            <li>• Multi-timeframe trading strategies</li>
            <li>• Risk management recommendations</li>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Don't show this message again</span>
          </label>
          
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Start Trading
          </button>
        </div>
      </div>
    </Modal>
  );
}