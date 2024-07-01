const Navbar = () => {
    return (
      <div className="sticky top-0 bg-opacity-70 backdrop-blur-sm bg-[#232323] flex py-3 px-4 justify-between">
        <img
          className="h-5 w-13 mt-[2px] mr-5"
          src="/gww.png"
          alt="logo"
        />
        <ul>
          <li className="text-[#c9c9c9e5]">
            <a
              className="mr-3 focus:text-slate-50 hover:text-slate-50 transition duration-500 ease-in-out"
              href="#home"
            >
              Home
            </a>
            <a
              className="mr-3 focus:text-slate-50 hover:text-slate-50 transition duration-500 ease-in-out"
              href="#about"
            >
              About
            </a>
            <a
              className="mr-3 focus:text-slate-50 hover:text-slate-50 transition duration-500 ease-in-out"
              href="#project"
            >
              Project
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;
  