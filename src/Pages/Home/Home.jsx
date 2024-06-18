import "./Home.css"
import Homes from "../../../public/home.jpg"
import ReadMore from "../../Components/ReadMore"

// h-screen w-[100%] sm:h-screen sm:w-[60%]

function Home() {
  return (
    <>
        <div className="Home-container" id="home">
            <div className="Home-Image overflow-hidden">
                <img className="w-full h-screen object-cover absolute "src={Homes} alt="Hero Image"></img>
                <div className="Home-Text relative h-screen w-[100%] sm:w-[70%] flex justify-center items-center">
                    <div className="box1 flex flex-col text-center sm:text-start space-y-3 px-5 sm:px-32">
                        <p className="font-medium sm:text-xl">We are creative Inc.</p>
                        <p className="font-bold text-4xl sm:text-6xl lg:text-9xl">CLEAN SIMPLE AND MINIMAL</p>
                        <p>Lorem Ipsum Lorem Impsum Lorem Ipsum Lorem Ipsum Lorem Impsum Lorem Ipsum</p>
                        <div className="flex justify-center items-center sm:justify-start">
                            <ReadMore />
                        </div>

                    
                    </div>
                    <div></div>
                
                </div>
            </div>

           
            
        </div>
    </>
  )
}

export default Home