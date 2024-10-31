import './Flickity.css';
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Flickity = () => {
  return (
    <>
      <div className="w-full h-[42px] bg-[#01455d] text-[14px] font-medium transition-all duration-500 flex items-center justify-center">
        <div className="container flex justify-center  md:justify-between mx-10 px-10">
          <div className="right flex text-white">
            <p className='flex items-center'> <TfiEmail /> <span className='mx-[5px] my-0'>hello@xtocast.com</span></p>
            <p className='flex items-center ml-6'> <FiPhone /> <span className='mx-[5px] my-0'>+233551196764</span></p>
          </div>
          <div className="left flex items-center hidden md:flex">
            <p className='mx-1.5 text-white text-opacity-50 text-[18px] transition-all ease-linear duration-400 hover:text-white cursor-pointer'><FaXTwitter /></p>
            <p className='mx-1.5 text-white text-opacity-50 text-[18px] transition-all ease-linear duration-400 hover:text-white cursor-pointer'><FaFacebook  /></p>
            <p className='mx-1.5 text-white text-opacity-50 text-[18px] transition-all ease-linear duration-400 hover:text-white cursor-pointer'><FaInstagram   /></p>
            <p className='mx-1.5 text-white text-opacity-50 text-[18px] transition-all ease-linear duration-400 hover:text-white cursor-pointer'><FaYoutube  /></p>
            <p className='mx-1.5 text-white text-opacity-50 text-[18px] transition-all ease-linear duration-400 hover:text-white cursor-pointer'><FaLinkedin   /></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flickity;
