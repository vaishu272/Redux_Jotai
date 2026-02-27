import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          ⚛️ Jotai State Management Demo
        </h1>

        {/* About Jotai */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10 border">
          <h2 className="text-xl font-semibold mb-3">What is Jotai?</h2>

          <p className="text-gray-600 mb-3">
            <strong>Jotai</strong> is a lightweight state management library for
            React. Instead of using a large global store like Redux, Jotai uses
            small independent state units called <strong>atoms</strong>.
          </p>

          <p className="text-gray-600">
            Each atom holds a piece of state, and components subscribe only to
            the atoms they need — making your app faster, simpler, and easier to
            scale.
          </p>
        </div>

        {/* Demo Examples */}
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Demo Examples in This App
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Counter */}
          <Link
            to="/"
            className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">🔢 Global Counter</h3>
            <p className="text-gray-600 text-sm">
              Demonstrates primitive global state using Jotai atoms shared
              across components.
            </p>
          </Link>

          {/* Theme */}
          <Link
            to="/theme"
            className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">🎨 Theme Toggle</h3>
            <p className="text-gray-600 text-sm">
              Shows shared UI state across the app using a theme atom.
            </p>
          </Link>

          {/* Todo */}
          <Link
            to="/todo"
            className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">📝 Todo List</h3>
            <p className="text-gray-600 text-sm">
              Demonstrates array state and updates stored globally in Jotai
              atoms.
            </p>
          </Link>

          {/* Users */}
          <Link
            to="/users"
            className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">🌐 Async Users API</h3>
            <p className="text-gray-600 text-sm">
              Shows async atoms fetching API data globally using Suspense.
            </p>
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Built to demonstrate atomic state management with Jotai ⚛️
        </p>
      </div>
    </div>
  );
};

export default HomePage;
