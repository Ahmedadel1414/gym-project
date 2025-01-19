import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./features/about-us/components/AboutUs";
import ContactUs from "./features/contact-us/components/ContactUs";
import Hero from "./features/hero/components/Hero";
import OurPartners from "./features/our-partners/components/OurPartners";
import OurServices from "./features/our-services/components/OurServices";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurPartners />
      <AboutUs />
      <OurServices />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
