import "./App.css"
import {School,GraduationCap,Building2,Calendar,BookOpen,MapPin} from "lucide-react"
function Education(){
    return (
        <div id="Education" className="w-screen min-h-screen h-max bg-gray-50 py-10 flex flex-col gap-6 justify-around items-center dark:bg-gray-950">
            <span className="flex text-4xl font-bold justify-center items-center gap-2 text-gray-700 dark:text-gray-400"><GraduationCap size={35} className="text-yellow-800 dark:text-yellow-400" /> Eduction</span>
            <div className="w-screen flex flex-col gap-10 p-4 items-center ">
                <div className="w-full md:w-2/3 p-4 flex justify-around gap-2 bg-white dark:bg-gray-900 shadow rounded-md hover:shadow-lg dark:shadow-gray-800">
                    <School size={50} className="p-1 bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-md"/>
                    <div className="w-full min-h-80 h-max p-2 flex flex-col justify-between">
                        <span className="flex gap-3 text-2xl text-gray-800 dark:text-gray-500 font-bold items-center"><GraduationCap size={20} className="text-indigo-800 dark:text-indigo-400"/> Master of Computer Applications (MCA)</span>
                        <span className="flex gap-3 text-indigo-500 font-bold items-center"><Building2 size={20}/> <a href="https://www.manit.ac.in/" target="blank">National Institute of Technology, Bhopal</a></span>
                        <span className="flex gap-6 text-gray-500">
                            <span className="flex gap-3 items-center"><Calendar size={20} className="text-gray-500"/> 2023-2026</span>
                            <span className="flex gap-3 items-center"><MapPin size={20} className="text-gray-500"/> Bhopal, India</span>
                        </span>
                        <div className="min-h-36 md:min-h-28 h-max bg-indigo-50 dark:bg-indigo-800 p-3 flex flex-col justify-between rounded-md">
                            <span className="flex gap-3 items-center dark:text-gray-50"><BookOpen size={20} className="text-indigo-800 dark:text-indigo-400"/> Core Focus Areas</span>
                            <p className="text-gray-600 dark:text-gray-300 text-[14px]">Database Management Systems,Java Programming Language, Data Structures, Operating System and MERN Development</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4 flex justify-around gap-2 bg-white dark:bg-gray-900 shadow rounded-md hover:shadow-lg dark:shadow-gray-800">
                    <School size={50} className="p-1 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-md"/>
                    <div className="w-full min-h-80 h-max] p-2 flex flex-col justify-between">
                        <span className="flex gap-3 text-2xl text-gray-800 dark:text-gray-500  font-bold items-center"><GraduationCap size={20} className="text-purple-800 dark:text-purple-400"/> Bachelor of Computer Applications (BCA)</span>
                        <span className="flex gap-3 text-purple-500 font-bold items-center"><Building2 size={20}/> <a href="https://www.ciitm.org/" target="blank">CIITM College, Jaipur</a></span>
                        <span className="flex gap-6 text-gray-500">
                            <span className="flex gap-3 items-center"><Calendar size={20} className="text-gray-500"/> 2020-2023</span>
                            <span className="flex gap-3 items-center"><MapPin size={20} className="text-gray-500"/> Jaipur, India</span>
                        </span>
                        <div className="min-h-36 md:min-h-28 h-max bg-purple-50 dark:bg-purple-800 p-3 flex flex-col justify-between rounded-md">
                            <span className="flex gap-3 items-center dark:text-gray-50"><BookOpen size={20} className="text-purple-800 dark:text-purple-400"/> Core Focus Areas</span>
                            <p className="text-gray-600 dark:text-gray-300 text-[14px]">Programming Fundamentals, Data Structures, Web Development, Problem Solving and Computer Networks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;