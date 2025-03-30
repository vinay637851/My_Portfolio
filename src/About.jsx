import "./App.css"
import Button from '@mui/material/Button';
import { Download } from 'lucide-react';
import {UserRound,Award,Heart,BriefcaseBusiness,Target} from "lucide-react"
function About(){
    return (
        <div id="About" className="min-h-screen h-max w-screen py-10 flex flex-col justify-between items-center mr-0 p-0 box-border">
            <span className="flex text-4xl font-bold justify-center items-center gap-2 text-gray-700"><UserRound size={35} className="text-indigo-800" /> About Me</span>
            <div className="w-screen py-10 text-justify text-gray-600 flex flex-col md:flex-row">
                <p className="w-screen md:w-1/2 p-10 text-lg flex flex-col items-center">
                I am a Full Stack Developer pursuing a Master’s in Computer Applications (MCA) from NIT Bhopal, with a Bachelor’s degree from CIITM College, Jaipur. <br />

                Proficient in C and Java, I have solved 400+ coding problems across platforms and have a strong grasp of Operating Systems, Database Management Systems, and Object-Oriented Programming. I am currently expanding my expertise by learning the MERN stack. <br /><br />

                Previously, I participated in a group internship at IBM as a Data Analyst, collaborating with a team to analyze social and economic data, enhancing my skills in data interpretation and teamwork. <br />

                I am passionate about developing scalable solutions, learning new technologies, and working on impactful projects. <br /><br />
                <a href="/Vinay_resume.pdf" download="Vinay_resume.pdf">
                    <Button variant="contained"  size="medium" startIcon={<Download />}>
                    My Resume
                    </Button>
                </a>
                </p>
                <div className="w-screen md:w-1/2 h-max flex flex-wrap gap-5 justify-around items-center">
                    <Container title="Internship" icon={BriefcaseBusiness} color="blue" content={<p>Data Analysis Group Intern at IBM May - July 2024.</p>} />
                    <Container title="Achievements" icon={Award} color="orange" content={<p>AIR 419 @ NIMCET-2023 <br />Solve 400+ DSA problems</p>} />
                    <Container title="Interests" icon={Heart} color="green" content={<p>Full Stack Development, Problem Solving, Reading Tech Blogs</p>} />
                    <Container title="Career Goals" icon={Target} color="red" content={<p>Lead innovative tech projects Contribute to emerging technologies</p>} />
                </div>
            </div>
        </div>
    )
}
const colorClasses = {
    blue: ["text-blue-600","bg-blue-100"],
    orange: ["text-orange-600","bg-orange-100"],
    green: ["text-green-600","bg-green-100"],
    red: ["text-red-600","bg-red-100"]   ,
};

function Container({title,icon: Icon,color,content}){
    return (
        <div className="w-2/3 md:w-1/3 min-h-[20vh] h-max p-2 shadow-2xl flex flex-col justify-center gap-5 duration-500 hover:scale-110">
            <span className="flex gap-3 font-bold">
                {Icon &&<Icon className={`${colorClasses[color][0]} p-2 rounded-md h-[5vh] w-[5vh] ${colorClasses[color][1]}`} /> }
                {title}
            </span>
            <p className="text-gray-500 text-[14px]">
                {content}
            </p>
        </div>
    )
}

export default About;