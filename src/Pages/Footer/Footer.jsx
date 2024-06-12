import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
        <div className="footer-container px-5 sm:px-32 py-16 grid grid-cols-1 md:grid md:grid-cols-3">
            <div className="flex flex-col justify-center items-center">
                <div><p className="font-bold">SUBSCRIBE</p></div>
                <div className="social flex flex-row pt-3">
                    <div><FaFacebook className="text-2xl" /></div>
                    <div className="px-5"><RiInstagramFill className="text-2xl" /></div>
                    <div><FaTwitter className="text-2xl" /></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-5 sm:pt-0">
                <div><p className="font-bold">QUCIK LINKS</p></div>
                <div className="social flex flex-col pt-3 text-center">
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Custom Care</p>
                    <p>Pricing</p>
                    <p>Team Members</p>
                    <p>Carrer</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-5 sm:pt-0">
                <div><p className="font-bold">CONTACT</p></div>
                <div className="social flex flex-col pt-3 text-center">
                    <p>+71 485 15 236</p>
                    <p>+71 124 15 278</p>
                    
                </div>
            </div>
            
        </div>

        <div className="footer-line flex justify-center items-center">
            <p className="pt-8 font-thin tracking-widest text-xs">@ nisal shiranda</p>
        </div>
        
    </>
  )
}

export default Footer