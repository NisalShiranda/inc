import "./People.css"

import Carousel from "../../Components/Carousel"

function People() {
  return (
    <>
        <div className="people-container px-5 sm:px-32 py-16" id="people">
            <div className="Header text-center flex flex-col justify-center items-center">
                <p className="text-sm font-semibold text-[#03AED2]">TESTIMONIAL</p>
                <p className="font-bold tracking-widest sm:text-3xl ">WHAT PEOPLE SAY</p>
            </div>
            <div className="line mt-2"></div>

            <div className="pt-5"><Carousel className="flex justify-center items-center" /></div>
        </div>
    </>
  )
}

export default People