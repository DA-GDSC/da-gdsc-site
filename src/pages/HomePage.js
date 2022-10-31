import NavBar from '../components/navbar'
import Footer from '../components/footer';
import ControlledCarousel from '../components/carousel';
import ParticlesAnimation from '../components/particles'
import { homepage_icon } from '../data';

export default function HomePage() {
    return (
        <div>
            <ParticlesAnimation/>
            <div className="brand-container">
                <div className="brand flex flex-col items-center ">
                    <div className="text-center">
                    <h1 className="caption-title animated-effect">Google DSC @ De Anza</h1>
                    <h2 class="caption-subtitle">Developer Student Club | Powered By Google Developers</h2>
                    <code class="hashtag">#developerstudentclubs</code>&nbsp;&nbsp;
                    <code class="hashtag">#googlestudents</code>&nbsp;&nbsp;
                    <code class="hashtag">#growwithgoogle</code>&nbsp;&nbsp;
                    <br/>
                    </div>
                    <div className="link-container flex flex-row">
                        {homepage_icon.map((item) => 
                            <a href={item.link} target="_blank" className='social-icon'>
                            <img src={require(`../static/img/social_icon/${item.name}.svg`)} width='70px' 
                            // onMouseOver={e => (e.currentTarget.src = require(`../static/img/social_icon/${item.name}_color.svg`))}
                            // onMouseOut={e => (e.currentTarget.src = require(`../static/img/social_icon/${item.name}.svg`))}
                            />
                            </a>)}
                    </div>
                </div>
            </div>
            
            {/* <div className='about-section' id='about-section'>
                <p className='about-text-area text-white'>
                    <h3>Welcome to Google Developer Student Club at De Anza College!</h3> <br />
                    <h7> We are a community-run developers student club supported by Google Developers. The GDSC enhances the educational, 
                    recreational, social, or cultural environment of De Anza College by being inclusive to all students, by transferring 
                    knowledge to students, by forging closer relationships between students and local businesses in the community, and 
                    by promoting diversity in the tech community.</h7> <br/><br/> <button className='styled-button'>Our Team</button>
                </p> 
                <ControlledCarousel/>
            </div> */}
            {/* <Footer/> */}
        </div>
        
    )
  }