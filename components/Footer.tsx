const Footer = () => {
    return (
      <div className="md:p-8 p-2 w-full h-[30vh] flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl">Angler</div>
          <div className="text-3xl">Contact us</div>
        </div>
        <div className="w-full text-center text-slate-500">
          © 2024 Angler Technologies, Inc. All rights reserved.
        </div>
      </div>
    );
}

export default Footer;