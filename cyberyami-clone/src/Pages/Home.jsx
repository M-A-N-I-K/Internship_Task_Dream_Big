import React from 'react'
import HeroSection from '../Components/HeroSection'
import Overviews from '../Components/Overviews'
import Reviews from '../Components/Reviews'
import CourseInfo from '../Components/CourseInfo'
import { motion } from 'framer-motion'

const Fade = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

const StyleText = ({ children }) => {
    return (
        <motion.h1
            initial={{ x: "-10%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            {children}
        </motion.h1>
    )
}

const StyleContent = ({ children }) => {
    return (
        <motion.div
            className="lg:w-1/3 md:1/2"
            initial={{ x: "20%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            {children}
        </motion.div>
    )
}

const Home = () => {
    return (
        <>
            <Fade>
                <HeroSection StyleText={StyleText} StyleContent={StyleContent} />
            </Fade>
            <Fade>
                <Overviews StyleText={StyleText} StyleContent={StyleContent} />
            </Fade>
            <Fade>
                <CourseInfo />
            </Fade>
            <Fade>
                <Reviews />
            </Fade>
        </>
    )
}

export default Home
