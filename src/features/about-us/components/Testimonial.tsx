import MainButton from "../../../components/button/MainButton";

const Testimonial = () => {
  return (
    <section className="flex flex-col gap-10 justify-between py-20 lg:flex-row ">
      <span className="content-center min-w-fit">
        <img src="/assets/about-us/BenefitsPageGraphic.png" alt="image" />
      </span>
      <span className="block content-center">
        <h2 className="text-mainTextColor text-xl font-montserrat sm:text-3xl">
          MILLIONS OF HAPPY MEMBERS GETTING
          <span className="text-[#ff6b66]"> FIT</span>
        </h2>
        <p className="w-full text-sm text-mainTextColor py-7 sm:text-lg">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>
        <p className="w-full text-sm text-mainTextColor pb-7 sm:text-lg">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
        <div>
          <span className="inline-block pr-5">
            <MainButton mainButtonText="Join Now" />
          </span>
        </div>
      </span>
    </section>
  );
};

export default Testimonial;
