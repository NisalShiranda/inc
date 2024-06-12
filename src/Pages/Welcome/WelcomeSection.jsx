
import "./WelcomeSection.css"
import { PiAnchor } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { RxRocket } from "react-icons/rx";

function WelcomeSection() {
  return (
    <div className="WelcomeSection px-5 sm:px-32 pt-10">
        <div className="Header text-center flex flex-col justify-center items-center">
            <p className="text-sm font-semibold text-[#03AED2]">CREATIVE INC.</p>
            <p className="font-bold tracking-widest sm:text-3xl ">YOU ARE WELCOME</p>
        </div>

        <div className="line">

        </div>

        <div className="welcome-box1 grid grid-cols-1 pt-4 sm:grid-cols-3 sm:py-20">
            <div className="sm:px-5">
                <div className=" flex justify-center items-center text-2xl sm:text-4xl"><PiAnchor className="welcome-logo" /></div>
                <div className="flex flex-col justify-center items-center text-center pt-4">
                    <p className="font-bold">CREATIVE CONCEPT</p>
                    <p className="pt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
            <div className="sm:px-5 pt-4 sm:pt-0">
                <div className=" flex justify-center items-center text-2xl sm:text-4xl"><CiImageOn className="welcome-logo" /></div>
                <div className="flex flex-col justify-center items-center text-center pt-4">
                    <p className="font-bold">CREATIVE CONCEPT</p>
                    <p className="pt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
            <div className="sm:px-5 pt-4 sm:pt-0">
                <div className=" flex justify-center items-center text-2xl sm:text-4xl"><RxRocket className="welcome-logo" /></div>
                <div className="flex flex-col justify-center items-center text-center pt-4">
                    <p className="font-bold">CREATIVE CONCEPT</p>
                    <p className="pt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>   
                </div>
            </div>
        </div>

    </div>
  )
}

export default WelcomeSection