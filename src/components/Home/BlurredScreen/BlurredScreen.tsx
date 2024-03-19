interface Props {
  handleBlur: () => void;
}

const BlurredScreen: React.FC<Props> = ({ handleBlur }) => {
  return (
    <div
      style={{
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
      <p className="font14 w500 color021">Tap anywhere to continue...</p>
    </div>
  );
};

export default BlurredScreen;
