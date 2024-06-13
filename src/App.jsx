import Navbar from "./Pages/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import WelcomeSection from "./Pages/Welcome/WelcomeSection"
import ReadMoreSection from "./Pages/ReadMore/ReadMoreSection"
import Skills from "./Pages/Skills/Skills"
import Works from "./Pages/Works/Works"
import Contact from "./Pages/Contact/Contact"
import People from "./Pages/People/People"
import Footer from "./Pages/Footer/Footer"
import './App.css'
import BacktoTopButton from "./Components/BackToTopButton"
function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <WelcomeSection />
      <ReadMoreSection />
      <Skills />
      <Works />
      <Contact />
      <People />
      <Footer />
      <BacktoTopButton />
    </>
  )
}

export default App
