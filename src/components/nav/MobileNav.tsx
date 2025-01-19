import { useEffect, useState } from "react";
import Nav from "./Nav";
import MainButton from "../button/MainButton";
const MobileNav = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavChecker = () => {
      if (mobileNav) {
        if (isHidden) {
          mobileNav.style.display = "none";
        } else {
          mobileNav.style.display = "block";
        }
      }
    };
    mobileNavChecker();
  }, [isHidden]);

  return (
    <>
      <section
        onClick={() => {
          setIsHidden((prev) => !prev);
        }}
        className="bg-buttonColor w-10 h-10 rounded-full cursor-pointer content-center"
      >
        <span className="block bg-white w-5 h-[2px] my-1 mx-auto"></span>
        <span className="block bg-white w-5 h-[2px] my-1 mx-auto"></span>
        <span className="block bg-white w-5 h-[2px] my-1 mx-auto"></span>
      </section>
      <div
        id="mobile-nav"
        className="absolute w-72 h-[100vh] bg-pink top-0 right-0 shadow-black drop-shadow-lg "
      >
        <span
          onClick={() => {
            setIsHidden((prev) => !prev);
          }}
          className="block absolute right-14 top-5 cursor-pointer text-gray-700 text-lg"
        >
          X
        </span>
        <div className="text-start pl-14">
          <Nav display="block" marginX="80px" fontSize="25px" />
        </div>
        <div className="text-center">
          <MainButton />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
