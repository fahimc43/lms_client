import { Routes, Route } from "react-router-dom";
import Importance from "./components/Importance";
import Revolution from "./components/Revolution";
import WhatIsCep from "./components/WhatIsCep";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<WhatIsCep />} />
        <Route path="revolution" element={<Revolution />} />
        <Route path="importance" element={<Importance />} />
      </Route>
    </Routes>
  );
}

export default App;
