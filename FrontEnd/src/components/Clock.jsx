import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isFridayBetween12PMAnd12AM = () => {
    const day = time.getDay(); // 0 is Sunday, 1 is Monday, ..., 5 is Friday, 6 is Saturday
    const hours = time.getHours();

    return day === 5 && hours >= 12 && hours < 24;
  };

  useEffect(() => {
    if (isFridayBetween12PMAnd12AM()) {
      // Trigger your event here
      console.log('It is Friday between 12 PM and 12 AM');
    }
  }, [time]);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="bg-gray-900 m-10 text-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl mb-4">offer : {formatTime(time)}</h1>
    </div>
  );
};

export default Clock;
