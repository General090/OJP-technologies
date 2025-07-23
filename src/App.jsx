import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home"
import Mission from "./component/mission/OurMission";
import FAQ from "./component/FAQ/FAQ";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
