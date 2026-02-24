import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";
import { useState } from "react";

const ResultCard = ({ item }) => {
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    setSaved(true);
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="w-[18vw] h-80 relative bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center gap-3 w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h2 className="h-14 text-lg font-semibold capitalize overflow-hidden">
          {item.title}
        </h2>
        <button
          className="bg-cyan-900 text-white rounded px-2 py-3 font-medium active:scale-95"
          onClick={() => {
            addToCollection(item);
          }}
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
