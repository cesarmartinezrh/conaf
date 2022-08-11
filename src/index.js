import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App";
import Directory from "./routes/Directory";
import Index from "./routes/Index";
import MarcoLegal from "./routes/MarcoLegal";
import Sesions from "./routes/Sesions";
import ConsejosEstatales from "./routes/ConsejosEstatales";
import Error404 from "./routes/Error404";
import Comites from "./routes/ComitesTecnicos";
import Integracion from "./routes/Integracion";
import Funciones from "./routes/Funciones";
import ComiteTecnico from "./components/ComiteTecnico";
import ComiteHome from "./components/ComiteHome";
import Survey from "./routes/Survey";
import Map from "./routes/Map";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<Error404 />} />
          <Route index element={<Index />} />
          <Route path="marco-legal" element={<MarcoLegal />} />
          <Route path="integracion" element={<Integracion />} />
          <Route path="directorio" element={<Directory />} />
          <Route path="sesiones" element={<Sesions />} />
          <Route path="comites-tecnicos" element={<Comites />}>
            <Route index element={<ComiteHome />} />
            <Route path=":comiteId" element={<ComiteTecnico />} />
          </Route>
          <Route path="funciones" element={<Funciones />} />
          <Route path="consejos-estatales" element={<ConsejosEstatales />} />
          <Route path="encuesta" element={<Survey />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
