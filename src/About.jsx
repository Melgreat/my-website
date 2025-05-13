import "./About.css"
import { motion } from "framer-motion";
import React, {useState} from 'react';


function AboutPage(){
    const [fullText, setFullText] = useState(false)
    
    const text = `I'm Melvin Amaechi, a UI/UX designer turned full-stack developer with a passion for crafting seamless, intuitive digital experiences. With over a year of experience in design and development, I bridge the gap between beautiful interfaces and functional code, delivering products that are both user-friendly and technically sound.

My journey into software development began with a deep curiosity for how things work, and how they could work better. That curiosity evolved into a self-taught path filled with code, late nights, countless iterations, and a relentless drive to learn.

Design remains at the heart of everything I do. Whether it’s refining user flows or coding scalable backend APIs, I believe good design is not just about aesthetics—it's about clarity, usability, and empathy. I thrive on building products that solve real problems and resonate with users.`;

const shortText = text.slice(0, 250);

    return (

        <motion.div
            className="tell-me"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="gradient-text">About Me</h2>
            <p className="about-text">
                {fullText ? text : shortText + "..."}
            </p>
            <button onClick={() => setFullText(!fullText)} className="read-more-btn">
                {fullText ? "Read less" : "Read more"}
            </button>
        </motion.div>
        
    )
}
import { form } from "framer-motion/client";
export default AboutPage