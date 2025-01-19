import ServicesCard from "./ServicesCard";

const AllServicesCards = () => {
  return (
    <>
      <span className="flex gap-7 overflow-x-scroll px-5">
        <ServicesCard
          title="Weight Training Classes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imgSource="/public/assets/our-services/image1.png"
        />
        <ServicesCard
          title="Yoga Classes"
          paragraph=""
          imgSource="/public/assets/our-services/image2.png"
        />
        <ServicesCard
          title="Ab Core Classes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imgSource="/public/assets/our-services/image3.png"
        />
        <ServicesCard
          title="Adventure Classes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imgSource="/public/assets/our-services/image4.png"
        />
        <ServicesCard
          title="Fitness Classes"
          paragraph=""
          imgSource="/public/assets/our-services/image5.png"
        />
        <ServicesCard
          title="Training Classes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imgSource="/public/assets/our-services/image6.png"
        />
      </span>
    </>
  );
};

export default AllServicesCards;
