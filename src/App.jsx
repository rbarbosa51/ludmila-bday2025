import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages";

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-stone-500 to-stone-700">
      <BrowserRouter>
        <Routes>
          <Route index path="/ludmila-bday2025/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


