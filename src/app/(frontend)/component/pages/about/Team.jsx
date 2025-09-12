import SquareBox from "./SquareBox";
import img1 from "@/app/(frontend)/assets/images/about/team/1.jpg";
import img2 from "@/app/(frontend)/assets/images/about/team/2.jpg";
import img3 from "@/app/(frontend)/assets/images/about/team/3.jpg";
import img4 from "@/app/(frontend)/assets/images/about/team/4.jpg";

const Team = () => {
  const teamData = [
    {
      image: img1.src,
    },
    {
      number: "15+",
      title: "Senior Developers",
      tags: ["React", "Node.Js", "Laravel", "Python"],
    },
    {
      image: img2.src,
    },
    {
      number: "10+",
      title: "UI/UX Designers",
      tags: ["Figma", "Adobe Creative Suite", "Prototyping"],
    },
    {
      number: "8+",
      title: "Project Managers",
      tags: ["Agile", "Scrum", "Client Communication"],
    },
    {
      image: img4.src,
    },
    {
      number: "6+",
      title: "Quality Assurance",
      tags: ["Automated Testing", "Manual Testing", "Performance"],
    },
    {
      image: img3.src,
    },
  ];

  return (
    <div className="pb-60">
      <h1 className="text-center pt-50 pb-20">Our Expert Team</h1>
      <p className="text-center mb-12">
        A Diverse Group Of Talented Professionals Dedicated To Delivering Exceptional Results
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {teamData.map((item, idx) => (
          <SquareBox
            key={idx}
            number={item.number}
            title={item.title}
            tags={item.tags}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
