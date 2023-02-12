import Nav from "../components/nav";
import '../assets/styles/contact.css';
import Image from '../assets/images/blog-img.jpg'

export default function Contact (){
    return(
            <div className="contact" id="contact">
                {/* <Nav /> */}
    
    
                <div className="contact-container">
                    <div className="contact-hero">
                        <img src={Image} alt="Why this" style={{width: '100%'}}/>
                    </div>
    
                    <div className="get-in-touch">
                        <div className="social">
                            <h1>Get in Touch</h1>
                            <h2>Hello I'm looking forward to hear from you</h2>
                            <p>For additional enquires you can talk to me on my social media platforms or
                                send us a mail or better still give me a call.
                            </p>
                        </div>
    
                        <div class="contact">
                            <h2>Call Me</h2>
                            <p><a href="tel:+234-805-721-8781">Tel:+234-815-5550-465</a></p>
                            <h2>Location</h2>
                            <p>No 12<br />New Felele Idi-Agbon Estate Soka Ibadan</p>
                       
                        </div>
    
                        <form>
                            <input style={{width: '100%', marginBottom: '5px'}} id="input" type="text" placeholder="Name"/>
                            <input style={{width: '100%', marginBottom: '5px'}} id="input" type="text" placeholder="Email"/>
                            <input style={{width: '100%', marginBottom: '5px'}} id="input" type="text" placeholder="Phone"/>
                            <input style={{width: '100%', marginBottom: '5px'}} id="input" type="text" placeholder="Subject" />
                            <textarea placeholder="Message"></textarea>
                            <button className="send">Send</button>
                        </form>
                    </div>
                </div>
                
            </div>
    )
}