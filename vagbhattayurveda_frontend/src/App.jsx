import "./App.css";
import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signin from "./components/Signin/Signin";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route exact element={<Hero />} path="/" />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
