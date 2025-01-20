import AllCards from "./AllCards";
import Testimonial from "./Testimonial";

const AboutUs = () => {
  return (
    <section className="container py-20">
      <span className="block">
        <h1 className="text-mainTextColor text-2xl font-montserrat pb-10">
          MORE THAN JUST GYM.
        </h1>
        <p className="w-full text-mainTextColor pb-10 md:w-4/5 xl:w-[63%]">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
        <AllCards />
      </span>
      <span className="block relative">
        <div className="absolute -z-10 w-fit top-5 xs:left-0 xs:top-16 sm:left-[80%] sm:top-28 md:left-2/3 lg:left-1/2 xl:left-[38%] 2xl:left-[30%]">
          <img src="/assets/about-us/AbstractWaves.png" alt="image" />
        </div>
        <Testimonial />
        <div className="absolute -z-10 w-fit right-14 -bottom-16 xs:right-10 xs:bottom-3">
          <img src="/assets/about-us/Sparkles.png" alt="image" />
        </div>
      </span>
    </section>
  );
};

export default AboutUs;
