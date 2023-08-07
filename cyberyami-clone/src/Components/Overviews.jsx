import React from 'react'
const Overviews = ({ StyleText, StyleContent }) => {
    return (
        <div className='px-12'>
            <section className="w-full px-5 sticky top-[24px] sm:top-[27px] lg:top-[30px] z-50 my-10">
                <div className="container bg-white rounded-lg">
                    <div className="flex justify-between items-center border-b  relative">
                        <ul className="flex gap-8 overflow-x-auto overflow-y-hidden">
                            <li className="relative py-4 px-2 cursor-pointer whitespace-nowrap">Overview</li>
                            <li className="relative py-4 px-2 cursor-pointer whitespace-nowrap">
                                Reviews
                                <div className="underline1" data-projection-id="9" style={{ "transform": "none", "transformOrigin": "50% 50% 0px", "opacity": "1" }}></div>
                            </li>
                        </ul>
                        <StyleContent><a className="px-7 py-3 font-bold rounded-lg text-base bg-green-200 hover:bg-green-300 duration-300 ml-4 float-right whitespace-nowrap hidden sm:block"
                            href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">Login To Enroll</a></StyleContent>
                    </div>
                </div>
            </section>
            <section className="w-full px-4">
                <div className="container py-8">
                    <div className="flex gap-8 lg:gap-32 flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-medium mb-2">Overview</h2>
                            <p className="text-base text-zinc-800">
                                <StyleText>Burpsuite bootcamp brings you a detailed, structured way of learning and practicing this tool. This tool is highly used in the industry and mainly is used for conducting WAPT i.e Web Application Penetration Testing. You will learn about every aspect and sub-tools included in the burp suite included in this bootcamp are practice labs to get your hands on the burp suite and theory lectures with interactive video demonstrations.</StyleText>
                            </p>
                        </div>
                        <StyleContent className="lg:w-1/2">
                            <h3 className="text-xl font-medium mb-4">Top skill you will learn</h3>
                            <div className="space-y-4">
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Understanding of Burpsuite
                                </p>
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Know the tools offered by the burp suite
                                </p>
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Use burp suite with ease in your testing
                                </p>
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Know the difference between the pro &amp; free edition
                                </p>
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Perform full-fledged WAPT using only BurpSuite
                                </p>
                                <p className="flex gap-2.5 text-base text-zinc-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#00CB45] flex-none mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    Learn Real-world techniques
                                </p>
                            </div>
                        </StyleContent>
                    </div>
                    <h3 className="text-xl font-medium mt-16">This course will includes:</h3>
                </div>
            </section>



        </div>

    )
}

export default Overviews
