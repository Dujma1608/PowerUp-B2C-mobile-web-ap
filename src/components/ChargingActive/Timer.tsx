import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 59 && seconds === 59) {
        setHours(hours + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  const formattedElapsedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return <p className="font14 color3E w500">{formattedElapsedTime}</p>;
};

export default Timer;
