
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
// import Profiles from './components/profiles';
import Home from './pages/home';
import Project from './pages/project';


// Pages
// import Home from './pages/home';

function App() {
 
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/projects" element={<Project />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
