import React, { useState, useEffect } from "react";
// import '../UI/Style.css'

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
    <p className="lg:text[30px] text-[20px] font-bold text-primaryColor">
      {count}%
    </p>
  );
};

export default function Stats() {
  return (
    <div>
      <div className="relative w-full p-px mx-auto mb-4 duration-300 rounded lg:mb-8 lg:max-w-4xl group">
        <div className="relative flex justify-between items-center h-full duration-300 bg-white rounded-sm transition-color sm:items-stretch">
          <div className="lg:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={92} />
            <p className="text-center lg:text-[16px] text-[10px] text-primaryColor">
            User Growth
            </p>
          </div>
          <div className="lg:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={86} />
            <p className="text-center lg:text-[16px] text-[10px] text-primaryColor">Increased Productivity</p>
          </div>
          <div className="lg:text-start text-center flex flex-col gap-1">
            <CountingNumbers targetNumber={96} />
            <p className="text-center lg:text-[16px] text-[10px] text-primaryColor">Increased Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}
