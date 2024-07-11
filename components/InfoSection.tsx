import { moreInfoItems } from "@/public/data"
import InfoCard from "./InfoCard";

const InfoSection = () => {
    console.log(moreInfoItems);
  return (
    <div className="sm:px-8 px-2">
      {moreInfoItems.map((item, i) => {
        return (
          <InfoCard
            key={item.heading}
            heading={item.heading}
            subHeading={item.subHeading}
            description={item.description}
            image={item.image}
            flex={i % 2 === 0 ? "flex-row" : "flex-row-reverse"}
          />
        );
      })}
    </div>
  );
}

export default InfoSection