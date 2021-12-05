import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/NewRoom" element={<NewRoom />} />
  </Routes>
);

export default Rotas;
