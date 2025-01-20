import { useEffect, useState } from "react";
import MainButton from "../button/MainButton";
import MobileNav from "../nav/MobileNav";
import Nav from "../nav/Nav";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <header className="container flex items-center w-full h-24 justify-between ">
      <div className="flex gap-10 justify-center">
        <div className="content-center">
          <img className="min-w-20" src="/assets/header/Logo.png" alt="logo" />
        </div>
        {screenWidth > 1100 ? (
          <Nav display="inline-block" fontSize="14px" />
        ) : null}
      </div>
      {screenWidth > 1100 ? (
        <div className=" flex gap-10 justify-center text-center pr-10">
          <p className="cursor-pointer font-montserrat text-lg content-center text-mainTextColor">
            Sign In
          </p>
          <MainButton mainButtonText="Become a Member" />
        </div>
      ) : (
        <div>
          <MobileNav />
        </div>
      )}
    </header>
  );
};

export default Header;
