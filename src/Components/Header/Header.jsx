import "./Header.css";
import { Link } from "react-scroll";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const NavLinks = ({ OpenNav }) => {

  return (
    <>
      {/* hidden lg:flex */}
      <ul
        className={`transition-all duration-300 ease-in-out ${
          OpenNav ? "left-0" : "left-[-332px]"
        } absolute  w-[300px] h-full z-[1000] bg-white lg:relative lg:left-auto lg:w-auto lg:h-auto lg:z-auto lg:bg-transparent lg:flex`}
      >
        <Link to="Home" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Home
          </li>
        </Link>
        <Link to="Evoting" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Evoting
          </li>
        </Link>
        <Link to="Donation" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Donation
          </li>
        </Link>
        <Link to="Events" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Events
          </li>
        </Link>
        <Link to="Results" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Results
          </li>
        </Link>
        <Link to="Blog" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Blog
          </li>
        </Link>
        <Link to="Pages" className="lg:px-[18px] py-0 flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer">
          <li className="flex items-center justify-between w-full py-[12px] pr-[15px] pl-[26px] lg:w-auto lg:py-0 lg:pr-0 lg:pl-0">
            Pages <RiArrowDropDownLine className="text-[22px]" />
          </li>
        </Link>
        <Link to="HostEvent" className="p-[18px] pt-[10px] flex items-center justify-center border-t border-t-[#f0f0f0] lg:border-t-0 hover:text-[#01455d] cursor-pointer lg:pl-[18px] lg:py-0">
          <li className="w-full py-[12px] pr-[15px] pl-[26px] bg-[#d0e7ef] text-[#01455d] rounded-[50px] lg:w-auto lg:px-[25px] lg:py-[12px] hover:text-[#d0e7ef] hover:bg-[#01455d] ">
            Host Event
          </li>
        </Link>
      </ul>
    </>
  );
};

const Header = () => {
  const [isOpenNav, setisOpenNav] = useState(false);
  const toggleNavFunction = () => {
    setisOpenNav(!isOpenNav);
    console.log(isOpenNav);
  };

  return (
    <>
      {/* jkh  */}
      <div className="w-full h-[80px] bg-white text-[14px] font-medium transition-all duration-500 flex items-center justify-center">
        <div className="container flex justify-between lg:justify-between px-2 md:mx-10 ">
          <div className="right">
            <p className=" flex items-center justify-center text-[30px]">
              LOGO
            </p>
          </div>
          <div className="left">
            <NavLinks OpenNav={isOpenNav} />
            {/* className={`hamburger ${isOpenNav? "open" : ""}`} onClick={toggleNavFunction} */}
            <div
              className="flex justify-center items-center  lg:hidden"
              onClick={toggleNavFunction}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
