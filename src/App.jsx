import Navbar from "./pages/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import BackToTop from "./components/ui/back-to-top"
import useScrollReveal from "./hooks/useScrollReveal"

function App() {
  useScrollReveal()

  return (
    <>
      <a
        href="#main-content"
        className="skip-link rounded-full bg-white px-4 py-2 text-sm font-medium text-black focus-visible:outline-none"
      >
        Ir para o conteúdo
      </a>

      <Navbar />

      <main id="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <BackToTop />
    </>
  )
}

export default App
