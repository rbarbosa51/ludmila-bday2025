import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Second, Third } from "@/pages";

export default function App() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-r from-stone-500 to-stone-700">
      <div className="absolute hidden portrait:block w-full h-full top-0 bg-black z-90 ">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-2xl text-white font-avenir">Pon el celular en landscape!</h1>
                    </div>
                </div>
      <BrowserRouter>
        <Routes>
           <Route path={import.meta.env.BASE_URL}>
              <Route path="" element={<Home />} />
              <Route path="second" element={<Second />} />
	            <Route path="third" element={<Third />} />
           </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


