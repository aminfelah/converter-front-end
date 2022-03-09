import "./App.css";
import Converterview from "./pages/converterpage/converterview";
import Historyview from "./pages/historypage/historyview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Converterview />} />
          <Route path="/history" element={<Historyview />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
