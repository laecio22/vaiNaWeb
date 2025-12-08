import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./globalStyle.scss";
import Inicio from "./pages/inicio/Inicio";
import Projetos from "./pages/projetos/Projetos";
import Contato from "./pages/contato/Contato";

const App = () => {
  return <>
  <BrowserRouter>
   <Header/>
   <Routes>
     <Route path="/" element={<Inicio/>}/>
     <Route path="/projetos" element={<Projetos/>}/>
     <Route path="/contato" element={<Contato/>}/>
    </Routes>
  </BrowserRouter>
  </>;
};

export default App;
