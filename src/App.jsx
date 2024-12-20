import { BrowserRouter, Route, Routes } from "react-router"
import SidebarNavbar from "./Component/sidebar_navigation"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {
  return (
    <BrowserRouter>
      <SidebarNavbar />
      <div style={{ marginLeft: '350px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
