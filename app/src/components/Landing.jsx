import { Link } from "react-router-dom"
import Logo from "../assets/ict.png"
const Landing = () => {
  return (
    <>
      <div className="w-full h-full md:h-[100vh] grid grid-flow-row place-content-center place-items-center">
          <div className="logo-container">
            <img src={Logo} alt="logo" className="w-full"/>
          </div>
          <h1 className="text-2xl md:text-5xl text-gray-700 font-semibold">Welcome to the Ministry ICT Help Desk System</h1>
          <div className="flex gap-5">
          <Link to='/login' className="my-10 bg-orange-600 hover:bg-orange-700 py-3 px-10 rounded font-semibold text-2xl text-white">Login</Link>
          <Link to='/register' className="my-10 bg-orange-700 hover:bg-orange-600 py-3 px-6 rounded font-semibold text-2xl text-white">Register</Link>
          </div>
      </div>
    </>
  )
}

export default Landing