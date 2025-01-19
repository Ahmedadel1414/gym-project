import Card from "./Card";
import { MdFactory } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";

const AllCards = () => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 justify-center xs:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        <Card
          icon={<MdFactory />}
          title="State of the Art Facilities"
          paragraph="Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
        />
        <Card
          icon={<FaPeopleGroup />}
          title="100's of Diverse Classes"
          paragraph="Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
        />
        <Card
          icon={<FaGraduationCap />}
          title="Expert and Pro Trainers"
          paragraph="Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
        />
      </div>
    </>
  );
};

export default AllCards;
