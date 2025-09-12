import CoreValueBox from "./CoreValueBox";
import ideaIcon from "@/app/(frontend)/assets/images/about/value-icons/idea.png";
import qualityIcon from "@/app/(frontend)/assets/images/about/value-icons/quality.png";
import transparencyIcon from "@/app/(frontend)/assets/images/about/value-icons/transparency.png";
import partnershipIcon from "@/app/(frontend)/assets/images/about/value-icons/partnership.png";

const CoreValues = () =>{
    const values = [
        {
            icon: ideaIcon,
            title: "Innovation",
            description:
                "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.",
        },
        {
            icon: qualityIcon,
            title: "Quality",
            description:
                "Every project undergoes rigorous testing and quality assurance to ensure exceptional performance and reliability.",
        },
        {
            icon: transparencyIcon,
            title: "Transparency",
            description:
                "We believe in open communication and keep you informed throughout every stage of your project development.",
        },
        {
            icon: partnershipIcon,
            title: "Partnership",
            description:
                "We work as an extension of your team, understanding your goals and collaborating to achieve lasting success.",
        },
    ];

    return (
        <div className="frame-1200 pb-60">
            <h1 className="text-center py-20 fs-38">Our Core Values</h1>
            <p className="text-center">These values guide everything we do and shape our relationships with clients and team members</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10">
                {values.map((item) => (
                    <CoreValueBox
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default CoreValues;