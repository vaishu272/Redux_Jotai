import { useAtom } from "jotai";
import { todoAtom } from "../atoms/todoAtom";
import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useAtom(todoAtom);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
    setText("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[380px] border">
        <h2 className="text-xl font-semibold mb-5 text-center">
          📝 Global Todo List
        </h2>

        {/* Input row */}
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={addTodo}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        {todos.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">
            No tasks yet — add one 🙂
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((t, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg border"
              >
                <span>{t}</span>

                <button
                  onClick={() => removeTodo(i)}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="text-xs text-gray-400 text-center mt-5">
          Stored globally using Jotai atoms
        </p>
      </div>
    </div>
  );
};

export default TodoPage;
