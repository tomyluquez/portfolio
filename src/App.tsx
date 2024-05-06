import "./App.css";
import { About } from "./components/About/about";
import { Experiences } from "./components/Experience/experience";
import { Header } from "./components/Header/header";
import { Skills } from "./components/Skills/skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experiences />
    </>
  );
}

export default App;
