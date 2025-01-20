import { useEffect } from "react";
interface ServicesCard {
  title: string;
  paragraph: string;
  imgSource: string;
}

const ServicesCard: React.FC<ServicesCard> = ({
  title = "Weight Training Classes",
  paragraph = "Lorem",
  imgSource = "/assets/our-services/image3.png",
}) => {
  useEffect(() => {
    const servicesCard = document.querySelectorAll("#services-card");
    const handleCardHover = () => {
      servicesCard.forEach((card) => {
        const overCard = card.querySelector("#over-card") as HTMLElement;
        if (overCard) {
          (card as HTMLElement).onmouseenter = () => {
            overCard.style.display = "block";
          };
          (card as HTMLElement).onmouseleave = () => {
            overCard.style.display = "none";
          };
        }
      });
    };
    handleCardHover();
  });

  return (
    <>
      <div id="services-card" className="relative min-w-[450px]">
        <div
          id="over-card"
          className="absolute hidden opacity-80 text-center content-center text-white top-0 left-0 w-full h-full z-20 bg-[#ff6b66] p-10"
        >
          <h3 className="pb-5 text-2xl">{title}</h3>
          <p className="text-lg">{paragraph}</p>
        </div>
        <img src={imgSource} alt="image" />
      </div>
    </>
  );
};

export default ServicesCard;
