import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Second } from "@/pages";

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-stone-500 to-stone-700">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="ludmila-bday2025/">
              <Route path="" element={<Home />} />
              <Route path="second" element={<Second />} />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


