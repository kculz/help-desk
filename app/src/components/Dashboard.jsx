import Logo from "../assets/ict.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="md:px-10 px-2 w-full  bg-blue-50 grid grid-flow-row place-content-center place-items-center">

        <img src={Logo} alt="" />

        <div className="grid md:grid-cols-3 grid-flow-row gap-5 mb-10">

          <Link to="/network" className="py-20 px-3 rounded shadow bg-blue-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Network Connectivity</h1>
          </Link>

          <Link to="/hardware" className="py-20 px-3 rounded shadow bg-green-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Hardware Issues</h1>
          </Link>

          <Link to="/software" className="py-20 px-3 rounded shadow bg-blue-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Software Issues (SAP) </h1>
          </Link>

          <Link to="/email" className="py-20 px-3 rounded shadow bg-green-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Email Issues</h1>
          </Link>

          <Link to="/printer" className="py-20 px-3 rounded shadow bg-blue-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Printer Issues</h1>
          </Link>

          <Link to="/cybersecurity" className="py-20 px-3 rounded shadow bg-green-400">
            <h1 className="md:text-2xl text-white text-lg text-center">Cybersecurity</h1>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Dashboard
