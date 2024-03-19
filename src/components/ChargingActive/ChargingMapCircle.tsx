import "./ChargingCircle.css";
import Icon from "../../assets/images/Charging/LightingIcon.png";
import "./ChargingMapCircle.css";
import { useEffect, useRef } from "react";

interface Props {
  percentage: number;
}

const ChargingMapCircle: React.FC<Props> = ({ percentage }) => {
  const circleWidth = 94;
  const radius = 36;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const dotRadius = 2.5;
  const dotCount = 10; // Number of green dots
  const dotSpeed = 1; // Speed of the dots in pixels per frame
  const dotInterval = 15;

  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    const moveDots = () => {
      dotsRef.current.forEach((dot) => {
        const currentY = parseFloat(dot.getAttribute("cy") || "0");
        const newY = currentY - dotSpeed;
        dot.setAttribute("cy", newY.toString());

        // If dot reaches the top of the circle or goes outside the progress circle, reset its position to the bottom
        if (
          newY < circleWidth / 2 - radius ||
          newY >
            circleWidth / 2 - radius + (radius * Math.PI * 2 * percentage) / 100
        ) {
          dot.setAttribute("cy", (circleWidth / 2 + radius).toString());
        }
      });
    };

    const intervalId = setInterval(moveDots, dotInterval);

    return () => clearInterval(intervalId);
  }, [percentage]);

  return (
    <div className="outer-map-circle">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="25%" stopColor="#00FF6D" />
            <stop offset="45%" stopColor="#06d65f" />
            <stop offset="60%" stopColor="#0AB051" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="7px"
          r={radius}
          className="map-circle-background"
        ></circle>
        {/* <g className="green-dots">
          {Array.from({ length: dotCount }, (_, index) => (
            <circle
              key={index}
              ref={(element) => {
                if (element) dotsRef.current[index] = element;
              }}
              cx={Math.random() * circleWidth - 10}
              cy={Math.random() * circleWidth - 10}
              r={dotRadius}
              className="green-dot"
            />
          ))}
        </g> */}
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="map-circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <image width={5} height={16} x="48%" y="26%" href={Icon} />
        <text className="map-percentage" x="50%" y="62%" textAnchor="middle">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ChargingMapCircle;
