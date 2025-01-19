interface MainButton {
  mainButtonText: string;
  paddingX?: string;
  paddingY?: string;
}

const MainButton: React.FC<MainButton> = ({
  paddingX = "40px",
  paddingY = "8px",
  mainButtonText = "Button",
}) => {
  return (
    <>
      <button
        className="bg-buttonColor rounded-md text-mainTextColor hover:bg-[#ff6b66] hover:text-white"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingRight: paddingX,
          paddingLeft: paddingX,
        }}
      >
        {mainButtonText}
      </button>
    </>
  );
};

export default MainButton;
