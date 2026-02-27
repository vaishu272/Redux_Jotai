import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { fullNameAtom } from "../atoms/usernameAtom";

const Navbar = () => {
  const [name] = useAtom(fullNameAtom);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left side links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-white hover:scale-105 transition">
            Home
          </Link>

          <Link
            to="/counter"
            className="hover:text-white hover:scale-105 transition"
          >
            Counter
          </Link>
          <Link
            to="/theme"
            className="hover:text-white hover:scale-105 transition"
          >
            Theme
          </Link>

          <Link
            to="/todo"
            className="hover:text-white hover:scale-105 transition"
          >
            Todo
          </Link>

          <Link
            to="/users"
            className="hover:text-white hover:scale-105 transition"
          >
            Users
          </Link>
        </div>

        {/* Right side user badge */}
        <div className="bg-gray-600 px-4 py-1 rounded-full text-sm font-semibold shadow">
          👤 {name}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
