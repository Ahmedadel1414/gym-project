import { MdFactory } from "react-icons/md";
interface CardContent {
  icon: JSX.Element;
  title: string;
  paragraph: string;
}
const Card: React.FC<CardContent> = ({
  icon = <MdFactory />,
  title = "State of the Art Facilities",
  paragraph = "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
}) => {
  return (
    <section className="p-3 text-center border border-solid border-[#decaca] rounded-md xs:p-14">
      <div className="flex justify-center items-center h-14 w-14 m-auto bg-red-100 border border-solid border-[#decaca] rounded-full">
        {icon}
      </div>
      <h3 className="text-mainTextColor font-montserrat pt-5">{title}</h3>
      <p className="text-mainTextColor font-montserrat py-5">{paragraph}</p>
      <a href="#" className="text-[#ff6b66] underline">
        Learn More
      </a>
    </section>
  );
};

export default Card;
