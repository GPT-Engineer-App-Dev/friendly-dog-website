import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dogs from "./pages/Dogs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </Router>
  );
}

export default App;
