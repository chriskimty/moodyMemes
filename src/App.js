import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom"

// Import components for Routing
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import LandingPage from "./components/LandingPage";
import MeetTheDevs from './components/MeetTheDevs';
import Timeline from "./components/Timeline";
import NotFound from "./components/NotFound";
import { UserAuth } from "./context/UserAuth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivatePath from "./components/PrivatePath";

function App() {
  return (
    <div className="App">
      <UserAuth>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<LandingPage />} /> 
          <Route path="/MeetTheDevs" element={<MeetTheDevs />} />

          {/* protects this timeline from users not logged in */}
          <Route path="/personaltimeline" element={
              <PrivatePath>
                <Timeline />
              </PrivatePath>} />
          {/* public timeline for anonymous users */}
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </UserAuth>
      <Footer/>
    </div>
  );
};

export default App;