import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Inicio from "./Pages/Inicio";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import PreLoader from "./Components/PreLoader";
import Contacto from "./Pages/Contacto";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <div>
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} />
      <PreLoader />
      <Header />
      <Inicio />
      <About />
      <Skills />
      <Portfolio />
      <Contacto setOpenAlert={setOpenAlert} />
      <Footer />
    </div>
  );
}

export default App;
