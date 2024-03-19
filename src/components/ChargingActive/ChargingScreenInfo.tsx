import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

const ChargingScreenInfo: React.FC = observer(() => {
  const { sessionStore } = useStore();
  const { startTime } = sessionStore;
  const formattedStartTime = startTime?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <div className="charger-info-container">
      <div className="flex-alling">
        <p className="font10 colorA6 w500">Energy Charged</p>
        <p className="font14 color3E w500">40kWh</p>
      </div>
      <div className="flex-alling">
        <p className="font10 colorA6 w500">Session Duration</p>
        <p className="font14 color3E w500">
          {sessionStore.formattedElapsedTime}
        </p>
      </div>
      <div className="flex-alling">
        <p className="font10 colorA6 w500">Session Start</p>
        <p className="font14 color3E w500">{formattedStartTime}</p>
      </div>
    </div>
  );
});

export default ChargingScreenInfo;
