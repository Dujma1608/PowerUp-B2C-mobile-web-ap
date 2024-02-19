import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about">
      <h3>O Nama</h3>
      <p className="tekst" style={{ marginBottom: "10px" }}>
        Vlasnik Power Up aplikacije:
      </p>
      <p className="tekst">Infinite Loop IT j.d.o.o</p>
      <p className="tekst">Sesvete (Grad Zagreb)</p>
      <p className="tekst">Ulica Ivana Meštrovića 35</p>
      <div style={{ display: "flex" }}>
        <p className="font12 w600" style={{ marginRight: "4px" }}>
          OIB:
        </p>
        <p className="tekst">84297429419</p>
      </div>
      <div style={{ display: "flex" }}>
        <p className="font12 w600" style={{ marginRight: "4px" }}>
          MBS:
        </p>
        <p className="tekst">081353568</p>
      </div>
      <p className="tekst">
        Upisano kod Trgovačkog suda u Zagrebu pod brojem Tt-21/6143-2
      </p>
      <div style={{ display: "flex" }}>
        <p className="font12 w600" style={{ marginRight: "4px" }}>
          Kontakt:
        </p>
        <p className="tekst">contact@power-up.green</p>
      </div>
    </div>
  );
};

export default AboutUs;
