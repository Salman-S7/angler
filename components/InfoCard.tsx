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
        className={`bg-gradient-to-l from-slate-900 to-slate-700 border flex flex-col items-center border-gray-700 p-6 sm:p-8 rounded-lg lg:h-auto w-full lg:gap-16 gap-8 lg:${flex} lg:flex-row mb-12`}
      >
        <div className="rounded-lg">
          <Image
            className="rounded-lg"
            src={image}
            alt="Retailers & Marketplaces image"
          />
        </div>
        <div className="h-full flex flex-col lg:justify-between lg:w-[40%] w-full">
          <h1 className="font-bold lg:text-6xl text-2xl text-sky-400 pb-10">
            {heading}
          </h1>
          <ul className="lg:text-xl text-lg list-disc list-inside text-neutral-400">
            <span className="text-white mb-5 inline-block">{subHeading}</span>
            <li className="pb-2">{description[0]}</li>
            <li className="pb-2">{description[1]}</li>
            <li className="pb-2">{description[2]}</li>
            <li className="pb-2">{description[3]}</li>
          </ul>
        </div>
      </div>
    );
}

export default InfoCard