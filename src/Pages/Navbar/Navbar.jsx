import "./Navbar.css"
import Circle from "../../../public/circle.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <>
        <div className="navbar-container  flex flex-col justify-center items-center  sm:flex sm:flex-row sm:justify-between sm:px-32 sm:py-2">
            <div className="navbar-logo flex flex-row">
                <div><h1 className="font-bold text-2xl ">INC</h1></div>
                <div className="shape flex justify-center items-center">
                    <img className="circle" src={Circle} alt="circle" />
                    
                </div>
            </div>
            <BrowserRouter>
                <div className="navbar-links flex flex-col justify-center items-center sm:flex sm:flex-row sm:space-x-10 text-md">
                    <Link to="#home" className="text-black" smooth>Home</Link>
                    <Link to="#about" className="text-black" smooth>About</Link>
                    <Link to="#works" className="text-black" smooth>Works</Link>
                    <Link to="#people" className="text-black" smooth>People</Link>
                    {/* <a className=""href="/">Home</a>
                    <a className=""href="/about">About</a>
                    <a className=""href="/contact">Works</a>
                    <a className=""href="/contact">People</a> */}
                </div>
            </BrowserRouter>

        </div>

    </>
  )
}

export default Navbar