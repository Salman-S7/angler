import Image from "next/image";



const InfoCard = ({ heading, subHeading, description, image, flex }: {
    heading: string,
    subHeading: string,
    description: string[],
  image: any,
    flex: string
}) => {
    return (
      <div
        className={`border flex flex-col lg:flex-row items-center border-[#e5e7eb] p-2 lg:p-8 rounded-lg lg:h-[90vh] w-full lg:gap-16 gap-8 lg:${flex} mb-12`}
      >
        <div className="rounded-lg">
          <Image
            className="rounded-lg"
            src={image}
            alt="Retailers & Marketplaces image"
          />
        </div>
        <div className="h-full flex flex-col lg:justify-between lg:w-[40%] w-full">
          <h1 className="font-bold lg:text-6xl text-2xl text-sky-400">{heading}</h1>
          <ul className="lg:text-xl text-lg list-disc list-inside">
            <span className="text-neutral-400">{subHeading}</span>
            <li>{description[0]}</li>
            <li>{description[1]}</li>
            <li>{description[2]}</li>
            <li>{description[3]}</li>
          </ul>
        </div>
      </div>
    );
}

export default InfoCard