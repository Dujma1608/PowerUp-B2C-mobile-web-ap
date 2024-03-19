interface Props {
  address: string | undefined;
  energyConsumed: number | undefined;
  startTime: Date | null;
  finishTime: Date | null;
  duration: string | null;
}

const ChargingBillBasicInfo: React.FC<Props> = ({
  address,
  energyConsumed,
  startTime,
  finishTime,
  duration,
}) => {
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", options);
  };

  const formatAddress = (address: string | undefined): string => {
    if (!address) return "";
    const index = address.indexOf(",");
    return index !== -1 ? address.substring(0, index).trim() : address.trim();
  };

  return (
    <div className="bill-info-container">
      <div className="bill-address-flex flex-justify-space">
        <div style={{ width: "125px" }}>
          <p className="font10 w600 colorA6">Location Address</p>
          <p className="font12 w600 color021">{formatAddress(address)}</p>
        </div>
        <div>
          <p className="font10 w600 colorA6">Energy Consumed</p>
          <p
            className="font12 w600"
            style={{ color: "#3E3E3E", textAlign: "end" }}
          >
            {energyConsumed} kWh
          </p>
        </div>
      </div>
      <div className="bill-address-flex">
        <div>
          <p className="font10 w600 colorA6">Start Time</p>
          <p className="font12 w600 color021">{formatDate(startTime)}</p>
        </div>
      </div>
      <div className="bill-address-flex">
        <div>
          <p className="font10 w600 colorA6">Stop Time</p>
          <p className="font12 w600 color021">{formatDate(finishTime)}</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <p className="font10 w600 colorA6">Duration</p>
            <p className="font12 w600" style={{ color: "#3E3E3E" }}>
              {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingBillBasicInfo;
