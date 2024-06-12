import "./Navbar.css"
import Circle from "../../../public/circle.svg";

function Navbar() {
  return (
    <>
        <div className="navbar-container flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between sm:px-32">
            <div className="navbar-logo flex flex-row">
                <div><h1 className="font-bold text-2xl ">INC</h1></div>
                <div className="shape flex justify-center items-center">
                    <img className="circle" src={Circle} alt="circle" />
                    
                </div>
            </div>
            <div className="navbar-links flex flex-col justify-center items-center sm:flex sm:flex-row sm:space-x-10">
                <a className=""href="/">Home</a>
                <a className=""href="/about">Services</a>
                <a className=""href="/contact">Works</a>
                <a className=""href="/contact">About</a>
            </div>

        </div>

    </>
  )
}

export default Navbar