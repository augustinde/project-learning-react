import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Cybersecurite from "./components/Services/cyber/Cybersecurite";
import Development from "./components/Services/development/Development";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/profil/:id" element={<Profile/>}/>
          <Route path="/services" element={<Services/>}>
              <Route path="/services/dev" element={<Development/>}/>
              <Route path="/services/cyber" element={<Cybersecurite/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
