import React, { useContext, useEffect, useState, useRef } from "react";
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Progress from "../Common/Progress";

gsap.registerPlugin(ScrollTrigger);

function List() {
  const [query, setQuery] = useState("");
  const { dataRec } = useContext(DataProvider);
  const [data, setData] = useState(dataRec || null);

  useEffect(() => {
    setData(dataRec);
  }, [dataRec]);

  const navigate = useNavigate();

  const handlePageChange = (id) => navigate(`/recipe/${id}`);

  const handleSearch = () => {
    if (!query.trim()) {
      setData(dataRec); // reset on empty query
      return;
    }
    const filtered = dataRec.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filtered);
  };

  // Trigger search while typing (optional)
  useEffect(() => {
    const delay = setTimeout(() => handleSearch(), 300);
    return () => clearTimeout(delay);
  }, [query]);

  const listRef = useRef([]);
  useEffect(() => {
    listRef.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [data]);

  return (
    <div className="flex flex-col items-center mt-28 mb-20 px-4">
      {/* Search bar */}
      <div className="bg-white p-2 rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl flex items-center border gap-2">
        <input
          type="text"
          value={query}
          placeholder="Search recipe..."
          className="flex-1 p-2 rounded-lg outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-lg shrink-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-10">
        {data && data.length ? (
          data.map((item, i) => (
            <div
              key={item._id}
              ref={(el) => (listRef.current[i] = el)}
              className="bg-[#E7FAFE] rounded-3xl flex flex-col justify-between cursor-pointer p-4 transition-transform duration-300 hover:scale-105"
              onClick={() => handlePageChange(item._id)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl w-full aspect-video object-cover"
                />
                <img
                  src="/logos/like.png"
                  alt="like"
                  width={30}
                  className="absolute top-3 right-3"
                />
                <p className="text-lg lg:text-xl font-bold mt-3">{item.title}</p>
              </div>

              <div className="flex justify-between text-xs sm:text-sm mt-4">
                <span className="bg-white rounded-full px-3 py-1.5">
                  {item.time}
                </span>
                <span className="bg-white rounded-full px-3 py-1.5">
                  {item.name}
                </span>
              </div>
            </div>
          ))
        ) : (
          <Progress />
        )}
      </div>
    </div>
  );
}

export default List;