import Navbar from "./pages/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import useScrollReveal from "./hooks/useScrollReveal"

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
