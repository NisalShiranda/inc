
import "./ReadMoreSection.css"
import Group from "../../../public/group.jpg"
import ReadMore from "../../Components/ReadMore"
function ReadMoreSection() {
  return (
    <>
        <div className="readSection-container px-5 sm:px-32 py-10 grid grid-cols-1 sm:grid lg:grid-cols-2 sm:gap-8">
            <div className="flex justify-center items-center">
              <img src={Group} alt="group photo"></img>
            </div>
            <div className="text-center sm:text-start">
              <p className="text-[#03AED2] font-semibold sm:text-xl">CREATIVE IN MIND</p>
              <p className="font-bold text-2xl tracking-widest sm:text-5xl">OUR CREATIVITY HAS NO LIMIT</p>
              <p className="md:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. <br></br><br></br> <span className="hidden xl:block">If you are going to use a passage of Lorem Ipsum, you need to be sure there isnott anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span> </p>
              <div className="flex justify-center items-center md:pt-5 lg:flex lg:justify-start lg:items-start">
                <ReadMore />
              </div>
            </div>
        </div>
    </>
  )
}

export default ReadMoreSection