import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black/10 h-24 text-center">
      <div className="flex gap-2 py-3 items-center justify-center">
        <FaFacebook className="text-orange-600 text-2xl" /> 
        <FaInstagramSquare className="text-orange-600 text-2xl"/>
        <FaXTwitter className="text-orange-600 text-2xl"/>
      </div>
      <h1 className="text-gray-500 text-xs">Copyright &copy;2024  ICT Department. Powered by Ministry of ICT. All rights reserved. </h1>
    </div>
  )
}

export default Footer