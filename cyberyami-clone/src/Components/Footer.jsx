import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-gradient py-8 px-4">
            <div className="container">
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2 lg:col-span-2 flex flex-col items-start">
                        <a className="relative flex gap-2 mb-4" href="/"><img src="https://www.cyberyami.com/images/logo.svg" alt="logo" /></a>
                        <div className="flex gap-4 flex-wrap">
                            <div>
                                <a className="text-base transition text-zinc-900 hover:text-green-500" target="_blank" href="https://discord.com/invite/5482bQBAMK">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a className="text-base transition text-zinc-900 hover:text-green-500" target="_blank" href="https://www.facebook.com/people/Cyberyami/100077410075392/">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a className="text-base transition text-zinc-900 hover:text-green-500" target="_blank" href="https://www.instagram.com/cyberyami/">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a className="text-base transition text-zinc-900 hover:text-green-500" target="_blank" href="https://twitter.com/Cyberyami1">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a className="text-base transition text-zinc-900 hover:text-green-500" target="_blank" href="https://www.linkedin.com/company/cyberyami/">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                        <strong className="text-sm tracking-wider text-zinc-500">RESOURCES</strong>
                        <ul className="mt-3 text-base leading-6 space-y-2">
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/leaderboard">Leaderboard</a></li>
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/about">About Us</a></li>
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/contact">Contact Us</a></li>
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                        <strong className="text-sm tracking-wider text-zinc-500">LEGALS</strong>
                        <ul className="mt-3 text-base leading-6 space-y-2">
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/privacy-policy">Privacy Policy</a></li>
                            <li><a className="transition text-zinc-900 hover:text-green-800" href="/refund-policy">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                        <strong className="text-sm tracking-wider text-zinc-500">FOR BUSINESSES</strong>
                        <ul className="mt-3 text-base leading-6 space-y-2">
                            <li className="transition text-zinc-900 hover:text-green-800"><a className="transition text-zinc-900 hover:text-green-800" href="/business-solutions">Business Solutions</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:col-span-1 hidden">
                        <strong className="text-sm tracking-wider text-zinc-500">WORK WITH US</strong>
                        <ul className="mt-3 text-base leading-6 space-y-2">
                            <li className="transition text-zinc-900 hover:text-green-800">Become an Expert</li>
                            <li className="transition text-zinc-900 hover:text-green-800">Login as Expert</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center border-t mt-4 pt-8">
                    <p className="text-xs">©2022, All Rights Reserved <span className="px-1">-</span><a className="underline" href="/">Cyberyami</a><span className="text-[#757575] mx-1.5">|</span>Wissenhive E-Learning</p>
                    <div className="flex gap-4 text-sm"><button>Cookies Settings</button></div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
