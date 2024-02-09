import React, { useState } from 'react';
import useCountdownTimer from './useCountdownTimer';


function App() {
  const [targetDay, setTargetDay] = useState<string>('May 30,2024 00:00:00');
  const remainingTime = useCountdownTimer(targetDay);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetDay(event.target.value);
  };

  return (
    <>
      <div>
        <label>Select Target Date:</label>
        <select value={targetDay} onChange={handleDateChange}>
          <option value="June 28, 2024 08:00:00">June 28, 2024 08:00:00</option>
          <option value="June 30, 2024 00:00:00">June 30, 2024 08:00:00</option>
          <option value="February 06, 2024 00:00:00">February 06, 2024 00:00:00</option>
          <option value="2024-05-30T00:00:00">2024-05-30</option>
          <option value="June 30, 2029 00:00:00">June 30, 2029 08:00:00</option>
        </select>
      </div>

      <p>{remainingTime.years}:{remainingTime.days}:{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</p>
    </>
  );
}

export default App;
