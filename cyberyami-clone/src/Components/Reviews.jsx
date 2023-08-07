import React from 'react'

const Reviews = () => {
    return (
        <>
            <section className="w-full px-4">
                <div className="container py-16">
                    <div className="flex items-center justify-between gap-4 mb-8">
                        <h3 className="text-xl font-medium">Reviews</h3>
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="-mr-2 text-cy-grey-800 font-medium">5.0</span>
                            <span style={{ "display": "inline-block", "direction": "ltr" }} className="rating !flex gap-1.5">
                                <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                    <span style={{ "visibility": "hidden" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                    </span>
                                    <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                    <span style={{ "visibility": "hidden" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                    </span>
                                    <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                    <span style={{ "visibility": "hidden" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                    </span>
                                    <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                    <span style={{ "visibility": "hidden" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                    </span>
                                    <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                    <span style={{ "visibility": "hidden" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                    </span>
                                    <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </span>
                            <span className="text-xs font-medium text-cy-grey-800">(1 Rating)</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        <div className="p-6 rounded-[10px]" >
                            <div className="flex gap-4 mb-4">
                                <div className="flex-none">
                                    <div className="relative w-14 aspect-square rounded-full overflow-hidden bg-cy-grey-500"><img src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Favatar.png&w=1920&q=75" alt="" /></div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <strong className="mb-1">Vishal Naik</strong>
                                    <span style={{ "display": "inline-block", "direction": "ltr" }} className="rating !flex gap-1.5">
                                        <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                            <span style={{ "visibility": "hidden" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            </span>
                                            <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                            <span style={{ "visibility": "hidden" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            </span>
                                            <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                            <span style={{ "visibility": "hidden" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            </span>
                                            <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                            <span style={{ "visibility": "hidden" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            </span>
                                            <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span style={{ "cursor": "inherit", "display": "inline-block", "position": "relative" }}>
                                            <span style={{ "visibility": "hidden" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            </span>
                                            <span style={{ "display": "inline-block", "position": "absolute", "overflow": "hidden", "top": "0px", "left": "0px", "width": "100%" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-[#FFA723]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-cy-grey-800 leading-6 four-line-elipsis">Awsome bootcamp like very much</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-4 flex justify-between items-center select-none"><button className="text-blue-500 font-medium opacity-50">Prev</button><button className="text-blue-500 font-medium opacity-50">Next</button></div>
                </div>
            </section>

        </>
    )
}

export default Reviews
