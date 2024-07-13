import React, { useState, useEffect } from "react";
// import '../UI/Style.css'
import '../fonts.css';

const CountingNumbers = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / 50);
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount >= targetNumber ? targetNumber : nextCount;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <p className="lg:text-3xl text-xl font-bold text-black">
      {count}%
    </p>
  );
};

export default function Stats() {
  return (
    <div className="font-sp-pro">
      <div className="relative w-full p-px mx-auto mb-4 duration-300 rounded lg:mb-8 lg:max-w-4xl group">
        <div className="relative flex justify-between items-center h-full duration-300 bg-white rounded-sm transition-color sm:items-stretch">
          <div className="lg:text-start md:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={92} />
            <p className="text-center md:text-start lg:text-sm text-xs text-black">
            Customer Satisfaction Score (CSAT) 
            </p>
          </div>
          <div className="lg:text-start md:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={86} />
            <p className="text-center md:text-start lg:text-sm text-xs text-black">Increased Productivity</p>
          </div>
          <div className="lg:text-start md:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={96} />
            <p className="text-center md:text-start lg:text-sm text-xs text-black">Reduction in Production Costs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
