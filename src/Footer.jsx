import './Footer.css';
import behance from './assets/5305150_behance_portfolio_behance logo_icon.svg';
import github from './assets/8666686_github_icon.svg';
import linked from './assets/8679367_linkedin_icon.svg';
import twitter from './assets/11244080_x_twitter_elon musk_twitter new logo_icon.svg';


function FooterPage(){
    return (
        <footer className="footer-container">
          <div className="footer-content">
            <p className="footer-text">© {new Date().getFullYear()} Melvin Amaechi. All rights reserved.</p>
            <div className="footer-icons">
              <a href="https://github.com/Melgreat?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src={github} alt="GitHub" />
              </a>
              <a href="https://www.behance.net/amaechiibiam" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src={behance} alt="Behance" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src={linked} alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/home">
                <img className="footer-icon" src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </footer>
      );
    
}
export default FooterPage