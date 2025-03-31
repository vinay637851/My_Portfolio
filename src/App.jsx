import Home from "./Home.jsx"
import About from "./About.jsx"
import Education from "./Education.jsx"
import Project from "./Project.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"



function App() {

  const toggleDarkMode = (ele) => {
      if(document.getElementsByTagName('html')[0].classList.contains("light")){
        document.getElementsByTagName('html')[0].classList.add("dark");
        document.getElementsByTagName('html')[0].classList.remove("light");
      }
      else{
        document.getElementsByTagName('html')[0].classList.add("light");
        document.getElementsByTagName('html')[0].classList.remove("dark");
      }
      if(ele.target.classList.contains("fa-moon")){
        ele.target.classList.add("fa-sun");
        ele.target.classList.remove("fa-moon");
      }
      else{
        ele.target.classList.add("fa-moon");
        ele.target.classList.remove("fa-sun");
      }
      ele.target.classList.toggle("text-yellow-400")
  };
  return (
    <>
      <i  onClick={(e)=>{toggleDarkMode(e)}} className="fa-regular fa-moon cursor-pointer fixed top-2 right-2 text-2xl text-gray-800 z-1"></i>
      <Home/>
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
