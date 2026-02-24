import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    console.log(text);
    setText("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex bg-gray-900 gap-5 px-10 py-10"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
          required
        />
        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
