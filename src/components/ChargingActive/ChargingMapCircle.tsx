import "./ChargingCircle.css";
import Icon from "../../assets/images/Charging/LightingIcon.png";
import "./ChargingMapCircle.css";

interface Props {
  //   percentage: number;
  //   setPercentage: (perc: number) => void;
}

const ChargingMapCircle: React.FC<Props> = ({}) => {
  const circleWidth = 90;
  const radius = 34;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * 75) / 100;
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
          {75}%
        </text>
      </svg>
    </div>
  );
};

export default ChargingMapCircle;
