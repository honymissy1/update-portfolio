import Nav from "../components/nav";
import '../assets/styles/project.css'

const Project = () =>{
    return(
        <div className="project" id="project">
            {/* <Nav /> */}
            <div className="project-img"></div>
            <div className="project-content" style={{transform: 'translateY(-10%)'}}>
              <div className="pro">
              <h1 style={{padding: '20px', color: 'black'}}>Take a look at my past projects</h1>
                 <div className="pro-card">
                    <h3>3 Months</h3>
                    <a href="http://3month.vercel.app/">Go to Site</a>
                    <div className="btn-group">
                        <button>Html</button>
                        <button>Css</button>
                        <button>Tailwind</button>

                    </div>
                 </div>

                 <div className="pro-card">
                    <h3>Web Dictionary</h3>
                    <a href="https://diksonary.netlify.app/">Go to Site</a>
                    <div className="btn-group">
                        <button>Jsx</button>
                        <button>Css</button>
                        <button>React</button>
                        <button>Material</button>
                        <button>Restful Api</button>
                    </div>
                 </div>

                 <div className="pro-card">
                    <h3>Full Stack App</h3>
                    <a href="https://tnion-site.vercel.app/">Go to Site</a>
                    <div className="btn-group">
                        <button>Jsx</button>
                        <button>Css</button>
                        <button>React</button>
                    </div>
                 </div>

                 <div className="pro-card">
                    <h3>Old Portfolio</h3>
                    <a href="https://bamidele.vercel.app/">Go to Site</a>
                    <div className="btn-group">
                        <button>Jsx</button>
                        <button>Css</button>
                        <button>React</button>
                        <button>Redux</button>
                    </div>
                 </div>

                 <div className="pro-card">
                    <h3>Threetop Travels</h3>
                    <a href="https://threetop.netlify.app/">Go to Site</a>
                    <div className="btn-group">
                        <button>Html</button>
                        <button>Css</button>
                        <button>JavaScript</button>
                        <button>Bootstrap</button>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Project