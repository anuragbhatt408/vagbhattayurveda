import "./App.css";
import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signin from "./components/Signin/Signin";
import Layout from "./components/Layout/Layout";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route exact element={<Hero />} path="/" />
          <Route element={<Protected />}>
            <Route exact element={<About />} path="/about" />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
