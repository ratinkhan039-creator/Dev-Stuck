import { RiMenu2Line } from 'react-icons/ri';
import MainLogo from '../assets/logo-text.png'


function Navbar() {
    return (
        <nav className="bg-white shadow-sm navbar fixed top-0 z-30">
            <div className="container mx-auto">
                <div className='md:px-6 px-2 md:py-3 flex justify-between items-center w-full'>
                <div className='flex gap-2 items-center'>
                    <div className='w-6 md:hidden'>
                    <RiMenu2Line className='w-full h-full' />
                </div>
                <div className='sm:flex md:items-center hidden'>
                    <img src={MainLogo} alt="DevStuck Logo" className='md:w-fit md:h-fit w-20' />
                </div>
                </div>
                <div className="flex justify-center">
                    <ul className="md:flex items-center justify-center lg:gap-5 md:gap-3 hidden ">
                        <li>
                            <a href="#" className="hover:text-pink-500 font-semibold">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-pink-500 font-semibold">Technologies</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-pink-500 font-semibold">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-pink-500 font-semibold">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-pink-500 font-semibold">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center lg:space-x-4 space-x-2.5 ">
                    <button className=" md:py-2 md:px-4 py-1 px-2.5 bg-gray-200 text-gray-800 rounded-2xl md:rounded-3xl hover:bg-pink-500 hover:text-white font-semibold lg:text-sm text-[13px]">Sign In</button>
                    <button className="md:py-2 py-1 md:px-4 px-2.5 bg-pink-500 text-white rounded-2xl md:rounded-3xl font-semibold lg:text-sm text-[13px]">Sign Up</button>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;