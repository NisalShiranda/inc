
import "./Card.css"
import Double from "../../public/double.svg"
import Person1 from "../../public/girl.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card() {

    

  return (
    <>
        
        <div className="card-container p-5">
            <div className="flex justify-center items-center">
                <img className="comma"src={Double} alt="double comma"></img>
            </div>
            <div className="pt-2">
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="person-container pt-5 pb-2 flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between ">
                <div className="img-person flex justify-center items-center">
                    <img className="person" src={Person1} alt="person" />
                </div>
                <div className="text-person flex flex-col justify-center items-center sm:justify-start sm:items-start">
                    <p className="font-bold tracking-wider">Nisal Shiranda</p>
                    <p>Manager</p>
                </div>

            </div>

        </div>
    </>
  )
}

export default Card