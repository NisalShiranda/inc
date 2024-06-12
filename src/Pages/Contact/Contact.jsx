import ReadMore from "../../Components/ReadMore"
import "./Contact.css"

function Contact() {
  return (
    <>
        <div className="contact-container px-5 sm:px-32 py-16 flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between">
            <div className="flex flex-col  justify-center items-center">
                <p className="font-bold text-xl lg:text-3xl tracking-widest text-white">LETS START A PROJECT</p>
                <p className="font-thin text-xs lg:text-lg text-white">It will be fun. Lets together awesome experience.</p>
            </div>
            <div className="flex justify-center items-center pt-2">
                <ReadMore />
            </div>
        </div>
    </>
  )
}

export default Contact