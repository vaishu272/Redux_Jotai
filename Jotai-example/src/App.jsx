import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CounterPage from "./pages/CounterPage";
import ThemePage from "./pages/ThemePage";
import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense
        fallback={
          <div className="text-center mt-20 text-xl font-semibold">
            Loading data...
          </div>
        }
      ></Suspense>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/todo" element={<TodoPage />} />\
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
