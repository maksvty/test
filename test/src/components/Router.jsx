import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import Header from "./Header/Header.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-main">
        <Routes>
          <Route element={<Home />} path='/' />

          <Route element={<div>Not found</div>} path='*' />
        </Routes>
      </main>
      <MainMenu />
    </BrowserRouter>
  );
};

export default Router;
