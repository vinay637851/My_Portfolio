import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {MessageCircle,Mail,Phone,Headphones,Linkedin,Sparkles} from "lucide-react"
function Contact(){
    return (
        <div id='Contact' className="w-screen min-h-screen h-max flex flex-col justify-around items-center gap-6 py-10 bg-gray-50 dark:bg-gray-950">
            <span className="flex text-4xl font-bold justify-center items-center gap-2 text-gray-700 dark:text-gray-400"><Headphones size={35} className="text-rose-800 dark:text-rose-400" /> Let's Connect</span>
            <div className="w-screen h-max flex flex-col md:flex-row gap-10 justify-center items-center p-4 md:p-10">
                <div className="w-screen  min-h-96 h-max flex flex-col gap-6 p-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-500 flex items-center gap-3"><MessageCircle className="text-indigo-800"/> Contact information</p> 
                    <Conatiner icon={Mail} color="blue" title="Email" description="vinaysharma637851@gmail.com" className={`dark:${colorClasses2["blue"][1]}`}/>
                    <Conatiner icon={Phone} color="green" title="Phone" description="+91 6378518756"/>
                    <Conatiner icon={Linkedin} color="pink" title="Linkedin" description="www.linkedin.com/in/vinay-sharma-538360285/"/>
                </div>
                <div className="w-full min-h-96 h-max bg-white dark:bg-gray-900">
                    <p className="text-2xl p-2 font-bold text-gray-900 flex items-center gap-3 dark:text-gray-400"><Sparkles className="text-purple-800"/> Send a Message</p>
                    <Box component="form" className='flex flex-col p-4 justify-between h-[50vh]'>
                        <TextField className='shadow-lg  dark:shadow-gray-800 dark:bg-gray-900 ' id="outlined-basic" label="Name" variant="outlined" required InputLabelProps={{style: { color: '#22d3ee' }, }}  InputProps={{style: { color: "#38bdf8" },}} />
                        <TextField className='shadow-lg dark:shadow-gray-800 dark:bg-gray-900' id="outlined-basic" label="Email" variant="outlined" required InputLabelProps={{style: { color: '#22d3ee' }, }} InputProps={{style: { color: "#38bdf8" },}} />
                        <TextField className='shadow-lg dark:shadow-gray-800 dark:bg-gray-900' label="Message" multiline rows={4} required InputLabelProps={{style: { color: '#22d3ee' }, }} InputProps={{style: { color: "#38bdf8" },}}/>
                        <Button type='submit' variant="contained" className='flex gap-3'><Mail/>Send Message</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

const colorClasses = {
    blue: ["text-blue-500","bg-blue-50"],
    green: ["text-green-500","bg-green-50"],
    pink: ["text-pink-500","bg-pink-50"]   ,
};

const colorClasses2 = {
    blue: ["text-blue-500","bg-blue-950"],
    green: ["text-green-500","bg-green-950"],
    pink: ["text-pink-500","bg-pink-950"]   ,
};


function Conatiner({icon:Icon,color,title,description}){
    return (
        <div className="w-full min-h-20 h-max bg-white dark:bg-gray-900 flex gap-4 items-center p-3 rounded-md hover:shadow-2xl dark:shadow-gray-800">
            {
                Icon&&<Icon className={`h-[7vh] w-[7vh] ${colorClasses[color][0]}  ${colorClasses[color][1]}  p-3 rounded-2xl`}/>
            }
            <span>
                <p className="font-bold text-gray-800 dark:text-gray-400">{title}</p> 
                <p className="text-gray-600 dark:text-gray-500">{description}</p>
            </span>
        </div>
    )
}

export default Contact;