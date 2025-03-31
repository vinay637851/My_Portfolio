import Image from '/public/Profileph.jpg'
import { Mail ,Briefcase,Code,Coffee,Github,Linkedin,ChevronDown} from "lucide-react";
import "./App.css"
import Button from '@mui/material/Button';
function Home(){
    return(
        <div id="Home" className="w-screen relative min-h-screen max-h-max flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-950">
            <div className="w-screen h-max flex flex-col md:flex-row  justify-center items-center">
                <div className='w-screen md:w-1/2 h-max p-5 flex items-center md:items-baseline flex-col justify-center gap-[4vh]'>
                    <h3 className='w-max p-1 px-3 h-max font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded-[2vh]'>👋 Welcome to my portfolio</h3>
                    <h1 className='text-6xl font-bold text-gray-800 dark:text-gray-400'>Hi, I'm  <span className='text-transparent bg-gradient-to-r from-purple-800 to-indigo-800 bg-clip-text'>Vinay Sharma</span></h1>
                    <p className='text-xl text-gray-500'>A passionate Full Stack Developer building seamless and efficient digital experiences with expertise in front-end and back-end technologies.</p>
                    <div className='flex gap-2'>
                        <a href="#Project"><Button variant="contained" size='large' startIcon={<Briefcase/>}  >My Work</Button></a>
                        <a href="#Contact" ><Button variant="outlined" size="large" startIcon={<Mail />} >Let’s Talk</Button></a>
                    </div>
                    <div className='flex gap-5 text-gray-600'>
                        <a href="https://github.com/vinay637851" target='blank'><Github size={20}/></a>
                        <a href="https://www.linkedin.com/in/vinay-sharma-538360285/" target='blank'><Linkedin size={20}/></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinaysharma637851@gmail.com" target="_blank"><Mail size={20} /></a>
                    </div>
                </div>
                <div className='w-screen p-5 mt-10 mb-10 h-max md:w-1/3 flex justify-center items-center'>
                    <span className='h-fit w-fit p-3 rounded-[50%] bg-white dark:bg-gray-800 flex justify-center items-center shadow-lg dark:shadow-gray-800 relative top-[-15vh] left-[2vh]'><Code className='text-purple-800 dark:text-purple-400'/></span>
                    <img src={Image} className='h-60 w-60 outline-[2px] shadow-2xl object-cover outline-gray-600 rounded-[50%]' alt="" />
                    <span className='h-fit w-fit p-3 rounded-[50%] bg-white dark:bg-gray-800 flex justify-center items-center shadow-lg dark:shadow-gray-800 relative bottom-[-15vh] left-[-2vh] animate-bounce'><Coffee className='text-indigo-800 dark:text-indigo-400'/></span>
                </div>
            </div>
            <ChevronDown className='absolute bottom-2 dark:text-gray-100 animate-ping'/>
        </div>
    )
}

export default Home;