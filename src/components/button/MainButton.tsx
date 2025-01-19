interface MainButton {
  paddingX?: string;
  paddingY?: string;
}

const MainButton: React.FC<MainButton> = ({
  paddingX = "40px",
  paddingY = "8px",
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
        Become a Member
      </button>
    </>
  );
};

export default MainButton;
