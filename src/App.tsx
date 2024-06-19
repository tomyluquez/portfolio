import "./App.css";
import { About } from "./components/About/about";
import { DarkMode } from "./components/dark-mode/dark-mode";
import { Experiences } from "./components/Experience/experience";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/Skills/skills";

function App() {
  return (
    <>
      <DarkMode />
      <Header />
      <div className="p-4">
        <About />
        <Skills />
        <Experiences />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
