import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="container py-20">
      <div>
        <h1 className="text-mainTextColor text-2xl pb-5">
          <span className="text-[#ff6b66]">JOIN NOW </span>TO GET IN SHAPE
        </h1>
        <p className="text-mainTextColor text-sm pb-5 lg:w-1/2">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </div>
      <span className="flex flex-col gap-10 content-center pt-5 lg:flex-row">
        <ContactForm />
        <div className="relative flex-[2]">
          <div className="absolute -z-10 -bottom-14 left-0 lg:-left-14">
            <img src="/public/assets/contact-us/EvolveText.png" alt="img" />
          </div>
          <img
            className="w-full lg:w-[500px]"
            src="/public/assets/contact-us/ContactUsPageGraphic.png"
            alt="image"
          />
        </div>
      </span>
    </section>
  );
};

export default ContactUs;
