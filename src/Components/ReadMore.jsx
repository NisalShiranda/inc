
import "./ReadMore.css"
import { IoMdArrowForward } from "react-icons/io";

function ReadMore() {
  return (
    <div className="read-container flex justify-between">
        <div>
            <p className="pl-2">Read More</p>
        </div>
        <div className="read-box2 flex justify-center items-center">
            <IoMdArrowForward className="text-xl" />
        </div>
    </div>
  )
}

export default ReadMore