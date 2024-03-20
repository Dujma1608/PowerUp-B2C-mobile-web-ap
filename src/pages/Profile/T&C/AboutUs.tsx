import { CompanyDetails } from "../../../WebApp/models/company";
import "./AboutUs.css";

interface Props {
  data: CompanyDetails | null;
}
const AboutUs: React.FC<Props> = ({ data }) => {
  return (
    <div className="about">
      <h3>ABOUT US:</h3>
      <p className="tekst" style={{ marginBottom: "10px" }}>
        Owner of the Power Up application:
      </p>
      <p className="tekst">{data?.companyName}</p>
      <p className="tekst">
        {data?.country}, {data?.city} {data?.postalNumber}
      </p>
      <p className="tekst">{data?.street}</p>
      <div style={{ display: "flex" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          OIB (Personal Identification Number):
        </p>
        <p className="tekst">{data?.oib}</p>
      </div>
      <div style={{ display: "flex" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          MBS (Company Registration Number):
        </p>
        <p className="tekst">{data?.mbs}</p>
      </div>
      <p className="tekst">
        Registered at the Commercial Court in Zagreb under number Tt-21/6143-2
      </p>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          Contact::
        </p>
        <p className="tekst">{data?.supportEmail}</p>
      </div>
    </div>
  );
};

export default AboutUs;
