import SureModal from "../../app/common/tabbar/SureModal";
import { SessionResponse } from "../../app/models/session";

interface Props {
  session: SessionResponse | null;
  price: number;
}

const ChargingScreenFooter: React.FC<Props> = ({ session, price }) => {
  const modalTitle = "Stop Charging";
  const modalSubtitle = "Are you sure you want to stop charging?";
  const modalButtonText = "Yes";

  return (
    <>
      <div className="footer-container">
        <div>
          <p className="font10 colorA6 w500 currentBill">Current Bill</p>
          <h2 className="font24 color021 w700 priceBill">
            {session?.currency.currencyISO} {price.toFixed(2)}
          </h2>
        </div>
        <button className="stop" id="open-sure-modal">
          Stop Charging
        </button>
      </div>
      <SureModal
        title={modalTitle}
        subtitle={modalSubtitle}
        buttonText={modalButtonText}
        isCharging
      />
    </>
  );
};

export default ChargingScreenFooter;
