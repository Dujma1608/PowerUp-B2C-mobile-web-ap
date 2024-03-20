interface Props {
  handleBlur: () => void;
  isHome: boolean;
}

const BlurredScreen: React.FC<Props> = ({ handleBlur, isHome }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(4px)",
        zIndex: 9999,
      }}
      onClick={handleBlur}
    >
      {isHome && (
        <p className="font14 w500 color021">Tap anywhere to continue...</p>
      )}
    </div>
  );
};

export default BlurredScreen;
