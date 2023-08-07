import React, { useState } from 'react'
import { motion } from 'framer-motion';
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleMenuToggle = () => {
        setOpenNav((prevOpenNav) => !prevOpenNav);
    };
    return (
        <>
            {/* <div style={{ "position": "fixed", "zIndex": "9999", "inset": "16px", "pointerEvents": "none" }}></div> */}
            <nav className="w-full fixed top-4 sm:top-5 z-50 px-4">
                <div className="container py-4 bg-white backdrop-blur-sm rounded-[10px] shadow">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <button onClick={handleMenuToggle} className="lg:hidden flex justify-center items-center p-1 -mr-1 active:bg-[#eaeaea] rounded-[5px] duration-300">
                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" fill="currentColor"></path>
                                    <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" fill="currentColor"></path>
                                    <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" fill="currentColor"></path>
                                </svg>
                            </button>
                            <img className='pl-4' src="https://www.cyberyami.com/images/logo.svg" alt="" />
                        </div>
                        <div>
                            <ul className="lg:flex gap-12 hidden">
                                <div className="relative">
                                    <li className="cursor-pointer z-20 relative duration-300 hover:text-green-400">Academia</li>
                                </div>
                                <div className="relative">
                                    <li className="cursor-pointer z-20 relative duration-300 hover:text-green-400"><a className="w-full" target="_self" href="https://ctf.cyberyami.com/">CTF Warriors</a></li>
                                </div>
                                <div className="relative">
                                    <li className="cursor-pointer z-20 relative duration-300 hover:text-green-400"><a className="w-full" target="_self" href="/business-solutions">Business Solutions</a></li>
                                </div>
                                <div className="relative">
                                    <li className="cursor-pointer z-20 relative duration-300 hover:text-green-400">Resources</li>
                                </div>
                            </ul>
                        </div>
                        <div className="flex pr-4 gap-2 sm:gap-4 items-center">
                            <a type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white mr-2 md:mr-0" href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-zinc-700 hover:text-zinc-900 duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                                    <circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path>
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"></path>
                                </svg>
                            </a>
                            <a className="text-center hidden lg:block transition rounded px-5 py-1 font-normal text-base hover:text-green-900" href="http://accounts.cyberyami.com/signup?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">
                                Sign Up

                            </a>
                            <a className="border-2 bg-green-300 hover:bg-green-400 border-green-300 hover:border-green-400 transition rounded px-5 py-1 font-normal text-base hidden lg:block hover:shadow" href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">
                                Login

                            </a>
                        </div>

                    </div>
                </div>
                {openNav &&
                    <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed inset-0 bg-black/30 z-10"
                        style={{ "opacity": "1" }}>
                        <div className="h-full w-full max-w-xs bg-white relative z-100 py-8 overflow-auto" style={{ "transform": "translateX(0%) translateZ(0px)" }}>
                            <div className="flex justify-between items-center mb-6 px-6">
                                <a href="/"><img alt="logo" src="https://www.cyberyami.com/images/logo.svg" width="130" height="80" /></a>
                                <span onClick={handleMenuToggle} className="active:bg-[#eaeaea] rounded-md p-1.5 -mr-2 cursor-pointer">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex justify-between px-6 py-4 items-center cursor-pointer font-bold">
                                        Academia
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="duration-300 false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </li>
                                    <ul className="bg-[#eeeeee] overflow-hidden" data-projection-id="39" style={{ "height": "0px", "overflow": "hidden" }}>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_self" href="/products/skill-based-program">SkillUp Programs</a></li>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_self" href="/products/job-based-program">Job Track Courses</a></li>
                                    </ul>
                                    <li className="flex justify-between px-6 py-4 items-center cursor-pointer font-bold"><a target="_blank" href="https://ctf.cyberyami.com/">CTF Warriors</a></li>
                                    <li className="flex justify-between px-6 py-4 items-center cursor-pointer font-bold"><a target="_self" href="/business-solutions">Business Solutions</a></li>
                                    <li className="flex justify-between px-6 py-4 items-center cursor-pointer font-bold">
                                        Resources
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="duration-300 false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </li>
                                    <ul className="bg-[#eeeeee] overflow-hidden" data-projection-id="40" style={{ "height": "0px", "overflow": "hidden" }}>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_self" href="/about">About Us</a></li>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_self" href="/contact">Contact Us</a></li>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_self" href="/blogs">Blogs</a></li>
                                        <li className="cursor-pointer"><a className="px-6 py-4 block" target="_blank" href="http://forum.cyberyami.com/">Cyberyami Forum</a></li>
                                        <li className=" cursor-pointer bg-[#7289DA] text-white">
                                            <a className="flex items-center gap-4 h-fit px-6 py-4" target="_blank" href="https://discord.com/invite/5482bQBAMK">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="flex-none text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                                </svg>
                                                Join Discord
                                            </a>
                                        </li>
                                    </ul>
                                    <motion.li initial={{ y: 30 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }} className="px-6 py-4 flex gap-4">
                                        <a className="w-1/2 border-2 text-center bg-green-300 hover:bg-green-400 border-green-300 hover:border-green-400 transition rounded px-5 py-1 font-normal text-base hover:shadow" href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">Login</a>
                                        <a className="w-1/2 border-2 text-center border-green-300 hover:border-green-400 transition rounded px-5 py-1 font-normal text-base hover:text-green-900" href="http://accounts.cyberyami.com/signup?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">Sign Up</a></motion.li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                }
            </nav>

        </>

    )
}

export default Navbar
