import "./ChargingCircle.css";
import Icon from "../../assets/images/Charging/LightingIcon.png";

interface Props {
  percentage: number;
  setPercentage: (perc: number) => void;
}

const ChargingCircle: React.FC<Props> = ({ percentage, setPercentage }) => {
  const circleWidth = 215;
  const radius = 92;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className="outer-circle">
      <svg width={circleWidth} height={circleWidth} viewBox="0 0 215 215">
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
          strokeWidth="18px"
          r={radius}
          className="circle-background"
        ></circle>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="18px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <image width={9} height={16} x="48%" y="28%" href={Icon} />
        <text className="percentage" x="50%" y="55%" textAnchor="middle">
          {percentage}%
        </text>
        <text className="battery" x="50%" y="69%" textAnchor="middle">
          Battery
        </text>
      </svg>
    </div>
  );
};

export default ChargingCircle;
