import { useAtom } from "jotai";
import { counterAtom } from "../atoms/counterAtom";

const CounterPage = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center w-[320px] border">
        <h2 className="text-gray-500 mb-2 uppercase text-sm tracking-wide">
          Global Counter
        </h2>

        <h1 className="text-5xl font-bold text-gray-800 mb-6">{count}</h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-gradient-to-r cursor-pointer from-green-500 to-emerald-600 px-4 py-2 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
          >
            + Increase
          </button>

          <button
            onClick={() => setCount((c) => c - 1)}
            className="bg-gradient-to-r cursor-pointer from-red-500 to-rose-600 px-4 py-2 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
          >
            - Decrease
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="cursor-pointer mt-5 text-sm text-gray-500 hover:text-gray-900 transition underline"
        >
          Reset counter
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
