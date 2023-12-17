import logo from '../assets/logo.png';
import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} width={200} height={200}  alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">Home</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">SKills</a></li>
            <li className="p-4"><a href="#projets" className="hover:underline">Projects</a></li>
            </ul>
            <a href={resume} rel="noreferrer" download="resume.pdf" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">my resume</a>
        </div>
    </div>
    )
}
