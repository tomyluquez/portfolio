import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Inicio from "./Pages/Inicio";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import PreLoader from "./Components/PreLoader";

function App() {
  return (
    <div>
      <PreLoader />
      <Header />
      <Inicio />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
