import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import './Global.css';
import EnactusLogo from "../../../public/Orgami.png";

function Navbar() {
    const [ navbar, setNavbar] = useState(false);
    const [ burger, setBurger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isScrolled = scrollY > 0;

            setNavbar(isScrolled);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div className=" sticky  ">
        <nav classname ={`w-full bg-white shadow bg-transparent`}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/Home" className="logoenactus">
                            <Image src={EnactusLogo} className=" w-full h-full" width="100" height="50" />
                        </a>
                        <div className="md:hidden" style={{
                            transition: '1s ease-in-out !important'
                            }}>
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setBurger(!burger)}
                                style={{
                                    transition: 'transform 0.5s ease-in-out',
                                    transform: burger ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}
                            >
                                {burger ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            burger ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className={` hover:text-yellow-600 ${navbar ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} sm:text-black`}>
                                <Link className="ili" href="/Home">Home</Link>
                            </li>
                            <li className={` hover:text-yellow-600 ${navbar ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} sm:text-black`}>
                                <Link className="ili" href="/Events">Events</Link>
                            </li>
                            <li className={` hover:text-yellow-600 ${navbar ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} sm:text-black`}>
                                <Link className="ili" href="/Team">Team</Link>
                            </li>
                            <li className={` hover:text-yellow-600 ${navbar ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} sm:text-black`}>
                                <Link className="ili" href="/OurProjects">Our Projects</Link>
                            </li>
                            <li className={` hover:text-yellow-600 ${navbar ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} sm:text-black`}>
                                <Link className="ili" href="/ContactUS">Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}
export default Navbar;
