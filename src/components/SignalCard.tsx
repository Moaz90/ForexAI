import React, { useEffect, useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, Clock } from 'lucide-react';

interface SignalProps {
  type: 'Buy' | 'Sell';
  pair: string;
  explanation: string;
  timestamp: string;
  isNew?: boolean;
}

const SignalCard: React.FC<SignalProps> = ({
  type,
  pair,
  explanation,
  timestamp,
  isNew = false,
}) => {
  const [highlight, setHighlight] = useState(isNew);
  
  useEffect(() => {
    if (isNew) {
      setHighlight(true);
      const timer = setTimeout(() => {
        setHighlight(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isNew]);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-5 transition-all duration-500 ${
        highlight ? 'transform scale-102 shadow-lg ring-2 ring-yellow-400' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          {type === 'Buy' ? (
            <ArrowUpCircle className="h-6 w-6 text-green-500 mr-2" />
          ) : (
            <ArrowDownCircle className="h-6 w-6 text-red-500 mr-2" />
          )}
          <span className={`font-bold ${type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
            {type}
          </span>
        </div>
        <span className="text-xl font-bold">{pair}</span>
      </div>
      
      <p className="text-gray-700 mb-4">{explanation}</p>
      
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>{timestamp}</span>
      </div>
      
      {isNew && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white font-bold py-1 px-2 rounded-full">
          NEW
        </div>
      )}
    </div>
  );
};

export default SignalCard;