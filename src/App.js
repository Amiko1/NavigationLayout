import Navigation from "./components/Navigation";
import Content from "./components/Content";

import GlobalStyles from "./utils/GlobalStyles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="content/:id" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
