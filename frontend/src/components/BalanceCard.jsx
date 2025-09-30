import React from 'react';

const BalanceCard = ({ balance, incomes, expenses }) => {
  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="rounded-xl shadow-sm px-6 py-4 bg-[#181820] text-center min-w-[260px]" style={{background: 'rgba(24,24,32,0.95)'}}>
        <div className="text-lg font-semibold mb-2 text-gray-200">Balance</div>
        <div className="text-2xl font-bold mb-4" style={{color: '#4ADE80'}}>
          ₹{balance}
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">Income</span>
          <span className="font-semibold" style={{color: '#60A5FA'}}>₹{incomes}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Expenses</span>
          <span className="font-semibold" style={{color: '#F87171'}}>₹{expenses}</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;