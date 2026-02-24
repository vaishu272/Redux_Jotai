import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import useDebounce from "../hooks/useDebounce";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const debouncedQuery = useDebounce(query, 500);
  useEffect(
    function () {
      if (!debouncedQuery) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab === "photos") {
            let response = await fetchPhotos(debouncedQuery);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.thumb,
              url: item.links.html,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchVideos(debouncedQuery);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };
      getData();
    },

    [debouncedQuery, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-2 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
