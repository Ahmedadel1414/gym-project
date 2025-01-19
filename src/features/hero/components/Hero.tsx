import MainButton from "../../../components/button/MainButton";

const Hero = () => {
  return (
    <section className="container flex flex-col justify-between py-20 lg:flex-row">
      <span className="block content-center">
        <div className="relative">
          <img
            className="absolute -z-20 -top-5 -left-5 sm:-top-10 sm:-left-10 xl:-top-16 xl:-left-10"
            src="/public/assets/hero/EvolveText.png"
            alt="image"
          />
          <img src="/public/assets/hero/HomePageText.png" alt="image" />
        </div>
        <p className="text-mainTextColor py-10 text-sm lg:w-2/3">
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </p>
        <div>
          <span className="inline-block pr-5">
            <MainButton mainButtonText="Join Now" />
          </span>
          <a
            href="#"
            className="inline-block text-[#ff6b66] underline hover:text-[#ffbe3b] text-base"
          >
            Learn More
          </a>
        </div>
      </span>
      <span className="block content-center">
        <img src="/public/assets/hero/HomePageGraphic.png" alt="image" />
      </span>
    </section>
  );
};

export default Hero;
