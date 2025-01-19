import MainButton from "../../../components/button/MainButton";

const ContactForm = () => {
  return (
    <>
      <div className="flex-[3]">
        <form className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#ffa6a3] p-5 mb-5 rounded-lg placeholder-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#ffa6a3] p-5 mb-5 rounded-lg placeholder-white"
          />
          <textarea
            name="massage"
            placeholder="Massage"
            className="bg-[#ffa6a3] p-5 mb-5 rounded-lg placeholder-white pb-28"
          />
        </form>
        <MainButton mainButtonText="SUBMIT" paddingX="70px" paddingY="13px" />
      </div>
    </>
  );
};

export default ContactForm;
