import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`px-6 py-2 rounded uppercase font-semibold text-white transition transform active:scale-95 shadow-md cursor-pointer
          ${
            activeTab === elem
              ? "bg-blue-600 shadow-lg"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
