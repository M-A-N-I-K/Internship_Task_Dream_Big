import React from 'react'

const CourseInfo = () => {
    return (
        <>
            <section className=" bg-zinc-50 w-full px-4 relative overflow-hidden">
                <div className="container sm:p-16 py-8 grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    <div className="flex justify-center">
                        <div className="p-5 max-w-full aspect-square shadow w-fit rounded-lg bg-white bg-opacity-50 flex flex-col items-center justify-center space-y-4 sm:space-y-10">
                            <div className="w-full max-w-[3rem] sm:max-w-[5rem] aspect-square relative"><img src="https://www.cyberyami.com/images/courses/theory.svg" alt="" /></div>
                            <p className="text-center text-base sm:text-xl">Self paced - Pragmatic Topics</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="p-5 max-w-full aspect-square shadow w-fit rounded-lg bg-white bg-opacity-50 flex flex-col items-center justify-center space-y-4 sm:space-y-10">
                            <div className="w-full max-w-[3rem] sm:max-w-[5rem] aspect-square relative"><img src="https://www.cyberyami.com/images/courses/practice-lab.svg" alt="" /></div>
                            <p className="text-center text-base sm:text-xl">Hands-on Practice Labs</p>
                        </div>
                    </div>
                    <div className="flex justify-center col-span-2 lg:col-span-1">
                        <div className="p-5 max-w-full aspect-square shadow w-fit rounded-lg bg-white bg-opacity-50 flex flex-col items-center justify-center space-y-4 sm:space-y-10">
                            <div className="w-full max-w-[3rem] sm:max-w-[5rem] aspect-square relative"><img src="https://www.cyberyami.com/images/courses/cert-completion.svg" alt="" /></div>
                            <p className="text-center text-base sm:text-xl">Certificate of Completion</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-100 my-20 py-10 mt-0">
                <div className="container px-12 mx-auto">
                    <h2 className="text-2xl mb-5">About the author</h2>
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className='w-[100%] sm:w-[40%] px-4'>

                            <img className='w-40 h-40 sm:w-32 sm:h-32' src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75" alt="" />
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-xl font-semibold text-zinc-900 title-font mb-2">Team Cyberyami</h2>
                            <div className='flex'>
                                <p className="leading-relaxed">
                                    CyberYami brings you a plethora of custom-designed bootcamps and courses. The learning material focuses on hands-on practice that is much needed in cyber security. We have included labs and challenges to make you understand how things work and are done in the industry. You can showcase your skills on your resume with our certification proving that you can apply the knowledge gained in a real-world scenario.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseInfo
