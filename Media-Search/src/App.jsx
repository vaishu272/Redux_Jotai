import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollecionPage from "./pages/CollecionPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollecionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
