const Footer = () => {
  return (
    <div className="md:px-8 px-2 w-full h-[24vh]">
      <div className="h-full flex flex-col justify-between items-center  border-t border-l border-r border-gray-600 rounded-t-3xl p-8">
        <div className="w-full flex justify-between items-center sm:text-3xl">
          <div className="">Angler</div>
          <div className="hover:text-sky-400">Contact us</div>
        </div>
        <div className="w-full text-center text-slate-500">
          © 2024 Angler Technologies, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
