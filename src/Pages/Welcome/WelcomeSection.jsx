
import "./WelcomeSection.css"
import { PiAnchor } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { RxRocket } from "react-icons/rx";

function WelcomeSection() {
  return (
    <div className="WelcomeSection px-5 sm:px-32 pt-10">
        <div className="Header text-center flex flex-col justify-center items-center">
            <p className="text-sm font-semibold text-[#03AED2]">CREATIVE INC.</p>
            <p className="font-bold tracking-widest sm:text-xl">YOU ARE WELCOME</p>
        </div>

        <div className="line">

        </div>

        <div className="welcome-box1 flex flex-col justify-center items-center pt-2 sm:pt-5  sm:flex sm:flex-row sm:justify-center sm:items-center">
            <div className="sm:px-5">
                <div className=" flex justify-center items-center sm:text-4xl"><PiAnchor className="welcome-logo" /></div>
                <div>
                    <p>CREATIVE CONCEPT</p>
                </div>
            </div>
            <div className="sm:px-5">
                <div className=" flex justify-center items-center sm:text-4xl"><CiImageOn className="welcome-logo" /></div>
                <div>
                    <p>CREATIVE CONCEPT</p>
                </div>
            </div>
            <div className="sm:px-5">
                <div className=" flex justify-center items-center sm:text-4xl"><RxRocket className="welcome-logo" /></div>
                <div>
                    <p>CREATIVE CONCEPT</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WelcomeSection