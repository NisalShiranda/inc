import "./Works.css"
import Photography from "../../../public/photography.jpg"
import Laptop from "../../../public/laptop.jpg"
import Girl from "../../../public/girl.jpg"

function Works() {
  return (
    <>
        <div className="works-container px-5 sm:px-32 py-16" id="works">
            <div className="Header text-center flex flex-col justify-center items-center">
                <p className="text-sm font-semibold text-[#03AED2]">CREATIVE INC.</p>
                <p className="font-bold tracking-widest sm:text-3xl ">OUR AMAZING WORKS</p>
            </div>
            <div className="line mt-2"></div>

            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 pt-4">
                <div className="order-1 flex justify-center items-center lg:justify-end lg:mr-10">
                    <img className="image-work" src={Photography} alt="Photography"></img>
                </div>
                <div className="order-2">
                    <div className="text-center lg:text-start lg:pr-[250px] lg:pt-9">
                        <p className="text-[#03AED2] font-semibold sm:text-xl">CREATIVE DESIGN</p>
                        <p className="font-bold text-2xl tracking-widest sm:text-3xl">ART DIRECTION TO DHAKA ASIAN HIGHWAY</p>
                        <p className="lg:pt-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
                        
                    </div>
                </div>
                <div className="order-4 lg:order-3">
                    <div className="text-center lg:text-start lg:pl-[250px] lg:pt-10">
                        <p className="text-[#03AED2] font-semibold sm:text-xl">BUSINESS PLANNING</p>
                        <p className="font-bold text-2xl tracking-widest sm:text-3xl">BUSINESS PLANNING & STRATEGY FOR RAINY DESIGN</p>
                        <p className="lg:pt-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
                        
                    </div>
                </div>
                <div className="order-3 lg:order-4 flex justify-center items-center pt-5 lg:pt-0 lg:justify-start lg:ml-10">
                    <img className="image-work" src={Laptop} alt="Photography"></img>
                </div>
                <div className="order-5 flex justify-center items-center pt-5  lg:justify-end lg:mr-10 lg:pt-10">
                    <img className="image-work" src={Girl} alt="Photography"></img>
                </div>
                <div className="order-6">
                    <div className="text-center lg:text-start lg:pr-[250px] lg:pt-16">
                        <p className="text-[#03AED2] font-semibold sm:text-xl">UI DESIGN</p>
                        <p className="font-bold text-2xl tracking-widest sm:text-3xl">BRAND IDENTITY & MARKETING FOR STORM & RAIN</p>
                        <p className="lg:pt-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
                        
                    </div>
                </div>
            </div>

            
        </div>
    </>
  )
}

export default Works