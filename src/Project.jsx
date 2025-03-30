import "./App.css"
import {ExternalLink,Github,Rocket} from "lucide-react"


function Project(){
    return(
        <div id="Project" className="w-screen h-max min-h-screen flex flex-col flex-wrap justify-around items-center gap-6 bg-white py-10">
            <span className="flex text-4xl font-bold justify-center items-center gap-2 text-gray-700"><Rocket size={35} className="text-green-800" /> Projects</span>
            <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 gap-10">
                <Conatiner image="Bloodproject.webp" title="Rakt Daan" description="A smart platform linking blood donors with blood banks, making donation requests and management seamless." tech={["EJS","CSS","JavaScript","Node.js","Express","MySql"]} demo="https://rakt-daan-lilac.vercel.app/" source="https://github.com/vinay637851/RaktDaan.git"/>
                <Conatiner image="Weatherproject.webp" title="Sky Pulse" description="A weather app, Sky Pulse provides real-time updates and forecasts for any location." tech={["HTML","CSS","JavaScript","APIs","Node.js","Express","MySql"]} demo="https://sky-pulse-kappa.vercel.app/weather/login" source="https://github.com/vinay637851/SkyPulse"/>
                <Conatiner image="Chatproject.webp" title="Chit Chat - Chatting Platform" description="A fast, secure, and user-friendly messaging platform for real-time communication and seamless interactions" tech={["Ejs","JavaScript","Node.js","Express","MongoDB"]} source="https://github.com/vinay637851/ChatWeb"/>
            </div>
        </div>
    )
}

function Conatiner({image,title,description,tech:Tech,demo,source}){
    return(
        <div className="w-full  bg-white rounded-2xl shadow-2xl duration-500 hover:-translate-y-6 ">
            <img src={image} alt="" className="w-full h-[30vh]  rounded-t-2xl" />
            <div className="w-full min-h-72 h-max p-4 flex flex-col justify-between">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-gray-500 text-lg">{description}</p>
                <div className="flex gap-2 flex-wrap text-base">
                    {
                        Tech.map((tech, index) => 
                            <span key={index} className="py-0.5 px-2.5 bg-blue-100 rounded-2xl  text-blue-600">{tech}</span>
                        )
                    }
                </div>
                <span className="flex justify-between">
                    <a href={demo} target="blank" className="flex gap-2 items-center text-indigo-600 text-lg"><ExternalLink size={20}/> Live Demo</a>
                    <a href={source} target="blank" className="flex gap-2 items-center text-gray-600 text-lg"><Github size={20}/> Source Code</a>
                </span>
            </div>
        </div>
    )
}

export default Project;