import { useState } from "react"
import { Link } from "react-router-dom"
import { BiMenuAltRight} from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "../assets/ict.png"
import { userData } from "../helper"

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleNav = () => {
        setOpenNav(false);
    }

    const user = userData();
  return (
    <>
    <header className="z-50 top-0  w-screen h-24 text-white bg-gray-900 fixed">
        <div className="flex justify-between items-center px-10 md:px-32 h-full w-full">
            <h1 className="text-2xl lg:text-3xl font-semibold">
                <Link onClick={handleNav} to={user ? '/dashboard' : '/' }>
                    <img src={Logo} alt="logo" width={130}/>
                </Link>
            </h1>
            <div className="flex gap-5 justify-center items-center">
            <ul className="hidden md:flex gap-5 text-xs lg:text-sm text-white">
                
                {user ? (<li><Link onClick={handleNav} to="/dashboard">Dashboard</Link></li>) : (<li><Link onClick={handleNav} to="/">Home</Link></li>)}
                <li><Link onClick={handleNav} to="/assistance">Get assistance</Link></li>
                <li><Link onClick={handleNav} to="/contact">Contact us</Link></li>
            </ul>
            <div className="block">
                {user ? (<Link to="/logout" className="bg-orange-600 text-white py-3 px-5 rounded" onClick={handleNav}>Logout</Link>) : (<Link to="/login" className="bg-orange-600 text-white py-3 px-5 rounded" onClick={handleNav}>Login</Link>)}
                
            </div>
            <Link onClick={() => setOpenNav(!openNav)} className="md:hidden block">
                {
                    !openNav ? <BiMenuAltRight size={30} className="text-lt-red"/> : <MdOutlineClose size={30} className="text-lt-red"/>
                }
            </Link>
            </div>
        </div>
        { openNav &&
        <ul className="bg-black/50 backdrop-blur md:hidden flex flex-col px-10 gap-4 top-24 ">
           {user ? ( <li><Link onClick={handleNav} to="/dashboard">Dashboard</Link></li>) : ( <li><Link onClick={handleNav} to="/">Home</Link></li>)}
            <li><Link onClick={handleNav} to="/assistance">Get assistance</Link></li>
            <li><Link onClick={handleNav} to="/contact">Contact us</Link></li>
            <hr className="text-lt-red" />
        </ul>
        }
    </header>
    </>
  )
}

export default Header