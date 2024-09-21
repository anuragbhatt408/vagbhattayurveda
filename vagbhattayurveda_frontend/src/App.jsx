import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact element={<Hero />} path="/" />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
