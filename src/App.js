import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom"

// Import components for Routing
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import LandingPage from "./components/LandingPage";
import MeetTheDevs from './components/MeetTheDevs';
import Timeline from "./components/Timeline";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Welcome />} />
        <Route path="/LandingPage" element={<LandingPage />} /> 
        <Route path="/MeetTheDevs" element={<MeetTheDevs />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      <Footer/>
    </div>
  );
};

export default App;