import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import allen from "../assets/image.png"
export default function Title(){

    return(
        <div className=' h-screen w-full flex sm:flex-col lg:flex-row bg-amber-50'>
        <div className='w-1/2 ml-12 pt-24'  >

        <p className=' font-serif text-lime-900 lg:text-6xl sm:text-4xl font-medium tracking-tighter'>Student. Programmer. Musician. Radio guy.</p>
        <p className='  font-serif text-lime-900 lg:text-6xl sm:text-4xl font-medium tracking-tighter'>A man you can trust.</p>
         <p className=" pt-5 font-serif text-lime-900 lg:text-3xl sm:text-xl font-medium tracking-tighter">
            Hi! I'm Allen Domingo, a sophomore studying computer science at Binghamton University. Welcome to my website where you can learn a little more about me!
         </p>

         <p className="  pt-12 text-lime-950 text-2xl font-sans tracking-tighter"> FIND ME ON:</p>
         <div className=" mt-4 bg-lime-950 flex w-fit rounded-lg">
            <a href="https://www.linkedin.com/in/allen-m-domingo/">
            <FaLinkedin className="h-16 w-16 my-4 mx-4 fill-amber-50 hover:fill-amber-100 hover:scale-110 transition-all" />
            </a>
            <a href="https://github.com/allen-domingo">
            <FaGithub className="h-16 w-16 my-4 fill-amber-50 hover:fill-amber-100 hover:scale-110 transition-all" />
            </a>
            <a href="mailto:adomin34@binghamton.edu">
            <SiGmail className="h-16 w-16 my-4 mx-4 fill-amber-50 hover:fill-amber-100 hover:scale-110 transition-all" />
            </a>
         </div>
         </div>
         <img src={allen} className=" p-12 scale-75" alt="" />
        </div>

    )
}