import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about">
      <h3>ABOUT US:</h3>
      <p className="tekst" style={{ marginBottom: "10px" }}>
        Owner of the Power Up application:
      </p>
      <p className="tekst">Infinite Loop IT Ltd.</p>
      <p className="tekst">Sesvete (City of Zagreb)</p>
      <p className="tekst">Ivana Meštrovića Street 35</p>
      <div style={{ display: "flex" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          OIB (Personal Identification Number):
        </p>
        <p className="tekst">84297429419</p>
      </div>
      <div style={{ display: "flex" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          MBS (Company Registration Number):
        </p>
        <p className="tekst">081353568</p>
      </div>
      <p className="tekst">
        Registered at the Commercial Court in Zagreb under number Tt-21/6143-2
      </p>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <p className="font12" style={{ marginRight: "4px" }}>
          Contact::
        </p>
        <p className="tekst">contact@power-up.green</p>
      </div>
    </div>
  );
};

export default AboutUs;
