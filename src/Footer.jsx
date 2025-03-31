import "./App.css"
import {Phone,MapPin,Mail,Heart,Github,Linkedin,Instagram} from "lucide-react"

function Footer(){
    return (
        <div className="w-screeb min-h-90 h-max shadow-2xl  bg-white dark:bg-black flex flex-col justify-center gap-4 items-center">
            <div className="w-screen min-h-72 h-max p-2 flex justify-around items-center">
                {/* <div className="w-[15vw] h-[30vh] flex flex-col gap-6">
                    <h1 className="text-white font-bold text-2xl">Vinay Sharma</h1>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <p>A passionate Full Stack Developer crafting beautiful & functional digital experiences</p>
                        <span className="flex gap-3 items-center"><Heart size={20} className="text-rose-600"/> Available for work</span>
                    </div>
                </div> */}
                <div className="w-full md:w-1/5 min-h-56 h-max flex flex-col gap-6">
                    <h1 className="text-gray-800 dark:text-gray-400 font-bold">Quick Links</h1>
                    <div className="flex flex-col gap-1 text-gray-500 list-none">
                        <a href="#Home" className="hover:text-gray-900 hover:dark:text-gray-100" ><li>Home</li></a>
                        <a href="#About" className="hover:text-gray-900 hover:dark:text-gray-100" ><li>About Me</li></a>
                        <a href="#Education" className="hover:text-gray-900 hover:dark:text-gray-100" ><li>Education</li></a>
                        <a href="#Project" className="hover:text-gray-900 hover:dark:text-gray-100" ><li>Projects</li></a>
                        <a href="#Contact" className="hover:text-gray-900 hover:dark:text-gray-100" ><li>Let's Connect</li></a>
                    </div>
                </div>
                <div className="w-full md:w-1/5 min-h-56 h-max flex flex-col gap-6">
                    <h1 className="text-gary-800 dark:text-gray-400 font-bold">Contact Info.</h1>
                    <div className="flex flex-col gap-1 text-gray-500 list-none">
                        <li className="flex items-center gap-2"><MapPin size={17}/>Jaipur, Rajasthan</li>
                        <li className="flex items-center gap-2"><Phone size={17}/> +91 6378518756</li>
                    </div>
                </div>
                <div className="w-full md:w-1/5 min-h-56 h-max flex flex-col gap-6">
                    <h1 className="text-gary-800 dark:text-gray-400 font-bold">Connect</h1>
                    <div className="h-[20vh] grid grid-cols-2 dark:text-gray-400 text-gray-600 list-none">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinaysharma637851@gmail.com" target="blank" ><Mail className="h-[5vh] w-[5vh] p-2 dark:hover:text-gray-200 hover:text-gray-800 d dark:bg-gray-800 bg-gray-200 rounded-md"/></a>
                        <a href="https://github.com/vinay637851" target="blank" ><Github className="h-[5vh] w-[5vh] p-2 dark:hover:text-gray-200 hover:text-gray-800 d dark:bg-gray-800 bg-gray-200 rounded-md"/></a>
                        <a href="https://www.linkedin.com/in/vinay-sharma-538360285/" target="blank" ><Linkedin className="h-[5vh] w-[5vh] p-2 dark:hover:text-gray-200 hover:text-gray-800 d dark:bg-gray-800 bg-gray-200 rounded-md"/></a>
                        <a href="https://www.instagram.com/sharmavinay6378/?next=%2F&hl=en" target="blank" ><Instagram className="h-[5vh] w-[5vh] p-2 dark:hover:text-gray-200 hover:text-gray-800 d dark:bg-gray-800 bg-gray-200 rounded-md"/></a>
                    </div>
                </div>
            </div>
            <hr className="w-[80vw] text-gray-400" />
            <p className="text-gray-600 font-[monospace]">@ Create By Vinay Sharma</p>
        </div>
    )
}

export default Footer;