import Nav from '../components/nav';
import '../assets/styles/home.css';
import HeroImage from '../assets/images/hero-img.gif'
import Profiles from '../components/profiles';
import Project from './project';
import Contact from './contact';

const Home = () =>{
   return(
    <main>
        <Nav />
        <div className="hero-section">
            <div className='hero-content'>
                <h2>Onimisi <span>Owolewa</span> Bamidele</h2>
                <h1>FULL STACK WEB DEVELOPER</h1>
                <p>I deliver everything that make a web application work from UI/UX designing to 
                    front end coding to server mechanics
                </p>
                <button>Explore <i class="fa-solid fa-person-arrow-down-to-line"></i></button>
            </div>
            <div className="hero-img">
                <img src={HeroImage} alt="" />
            </div>

            <i class="fa-regular fa-circle-down"></i>
        </div>

        <Profiles />
        <Project />
        <Contact />
    </main>
   )
}

export default Home