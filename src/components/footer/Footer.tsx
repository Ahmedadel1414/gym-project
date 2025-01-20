const Footer = () => {
  return (
    <section className="bg-pink p-3 lg:p-20">
      <div className="container flex flex-col gap-10 lg:flex-row">
        <span className="flex-[2]">
          <div className="min-w-40 pb-5">
            <img src="/assets/header/Logo.png" alt="logo" />
          </div>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            © Evogym All Rights Reserved.
          </p>
        </span>
        <span className="flex-1">
          <h4 className="text-mainTextColor pb-3 text-center lg:text-start">
            Links
          </h4>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            Massa orci senectus
          </p>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            Et gravida id et etiam
          </p>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            Ullamcorper vivamus
          </p>
        </span>
        <span className="flex-1">
          <h4 className="text-mainTextColor pb-3 text-center lg:text-start">
            Contact Us
          </h4>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <p className="text-mainTextColor pb-3 text-center lg:text-start">
            (333)425-6825
          </p>
        </span>
      </div>
    </section>
  );
};

export default Footer;
