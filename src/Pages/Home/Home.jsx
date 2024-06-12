import "./Home.css"
import Homes from "../../../public/home.jpg"

// h-screen w-[100%] sm:h-screen sm:w-[60%]

function Home() {
  return (
    <>
        <div className="Home-container ">
            <div className="Home-Image overflow-hidden">
                <img className="w-full h-screen object-cover absolute "src={Homes} alt="Hero Image"></img>
                <div className="Home-Text relative h-screen w-[100%] sm:w-[70%] flex justify-center items-center">
                    <div className="box1 flex flex-col text-center">
                        <p>We are creative Inc.</p>
                        <p>CLEAN SIMPLE AND MINIMAL</p>
                        <p>Lorem Ipsum Lorem Impsum Lorem Ipsum</p>

                    
                    </div>
                    <div></div>
                
                </div>
            </div>

           
            
        </div>
    </>
  )
}

export default Home