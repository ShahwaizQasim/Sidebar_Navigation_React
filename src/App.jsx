import { BrowserRouter, Route, Routes } from "react-router"
import SidebarNavbar from "./Component/sidebar_navigation"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {
  return (
    <BrowserRouter>
      <SidebarNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
