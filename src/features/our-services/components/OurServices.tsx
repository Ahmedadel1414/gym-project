import AllServicesCards from "./AllServicesCards";

const OurServices = () => {
  return (
    <section className="bg-pink py-20">
      <span className="container block">
        <h1 className="pb-10 text-mainTextColor text-lg font-montserrat xs:text-3xl">
          OUR CLASSES
        </h1>
        <p className="pb-10 text-mainTextColor text-sm font-montserrat xs:text-lg ">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </span>
      <span className="block">
        <AllServicesCards />
      </span>
    </section>
  );
};

export default OurServices;
