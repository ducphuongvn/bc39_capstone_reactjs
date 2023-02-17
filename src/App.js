import "./App.css";
import renderRoutes from "routes/index";
import Loader from "components/Loader";
import AdminTemplate from "pages/AdminTemplate";
import HomeTemplate from "pages/HomeTemplate";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "components/NotFound404";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
