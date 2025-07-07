import { motion } from "framer-motion";
import profile from 'assets/profile_image-removebg-preview.png';
import behance from './assets/5305150_behance_portfolio_behance logo_icon.svg';
import github from './assets/8666686_github_icon.svg';
import linked from './assets/8679367_linkedin_icon.svg';
import twitter from './assets/11244080_x_twitter_elon musk_twitter new logo_icon.svg';

function HomePage (){
    return (
        <motion.div 
            className="home-container"
            id="home"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="greeting">
                <div className="icons-container">
                    <p className="gradient-text">Hi, I'm Melvin</p>
                    <p className="describe">I am a web developer and a UI/UX designer with a knack 
                        for designs that balance aestheics and functionality.
                        My design philosophy is do it but don't over do it.
                    </p>
                    <div className="box-icon">
                        <a href="https://github.com/Melgreat?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img className="icons" src={github} alt="github link"/>
                        </a>
                        <a href="https://www.behance.net/amaechiibiam" target="_blank" rel="noopener noreferrer">
                            <img className="icons" src={behance} alt="behance link"/>
                        </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img className="icons" src={linked} alt="linkedin link"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://x.com/home">
                            <img className="icons" src={twitter} alt="twitter link"/>
                        </a>
                    </div>
                </div>
                <div className="gradient-sunset-violet">
                    <img className="profile-pic" src={profile} alt="profile-pic"/>
                    <div className="background"></div>
                </div>
            </div>            
        </motion.div>

    )
}
export default HomePage