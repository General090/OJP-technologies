import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home"
import Mission from "./component/mission/OurMission";
import About from "./component/About/About"
import FAQ from "./component/FAQ/FAQ";
import Register from "./component/register/Register"
import AboutMission from "./component/About/mision"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register" element={<Register />} />

        {/* About Us */}
        <Route path="/about" element={<About />} />
        <Route path="/about-mission" element={<AboutMission />} />
      </Routes>
    </>
  )
}

export default App
