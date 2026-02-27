import { useAtom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";

const ThemePage = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`shadow-xl rounded-2xl p-10 text-center w-[340px] border transition ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <h2 className="uppercase text-xs tracking-wider mb-2 opacity-60">
          Global Theme
        </h2>

        <h1 className="text-3xl font-bold mb-6">
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>

        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className={`px-6 py-2 rounded-lg font-semibold shadow transition hover:scale-105 ${
            isDark
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
          }`}
        >
          Toggle Theme
        </button>

        <p className="text-sm mt-5 opacity-60">
          Theme stored globally with Jotai
        </p>
      </div>
    </div>
  );
};

export default ThemePage;
