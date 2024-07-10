const Footer = () => {
  return (
    <div className="md:px-8 px-2 w-full h-[24vh]">
      <div className="h-full flex flex-col justify-between items-center  border-t border-l border-r border-gray-600 rounded-t-3xl p-8 bg-gradient-to-t from-gray-800 to-stone-900">
        <div className="w-full flex justify-between items-center sm:text-3xl">
          <div className="">Angler</div>
          <div className="hover:text-sky-400">Contact us</div>
        </div>
        <div className="bg-gradient-to-l from-transparent via-sky-600 to-transparent h-[1px] w-full" />
        <div className="w-full text-center text-stone-400">
          © 2024 Angler Technologies, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
