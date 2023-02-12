import Nav from './nav';
import '../assets/styles/profile.css';
import FullStack from '../assets/images/fullstack.png';
import UIUX from '../assets/images/ui&ux.png';
import Mobile from '../assets/images/mobile.png';


const Profiles = () =>{
   return(
    <main id="profiles">
        <div className='profile-sample'>
            <div className='profile-container'> 
                <div className="profile-img">
                    <img src={FullStack} alt="" />
                </div>
                <h2>Full Stack</h2>
            </div>

            <div className='profile-container'> 
                <div className="profile-img">
                    <img src={Mobile} alt="" />
                </div>
                <h2>Mobile App</h2>
            </div>

            <div className='profile-container'> 
                <div className="profile-img">
                    <img src={UIUX} alt="" />
                </div>
                <h2>UI/UX</h2>
            </div>
        </div>
    </main>
   )
}

export default Profiles