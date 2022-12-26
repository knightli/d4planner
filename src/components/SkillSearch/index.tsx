import Fuse from "fuse.js";
import React, { FC, useEffect, useRef, useState } from "react";
import { barbarian } from "../../data/barbarian";

type SkillSearchType = {
  onSelect: any;
};

const SkillSearch: FC<SkillSearchType> = ({ onSelect }) => {
  const [query, updateQuery] = useState("");
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const ref = useRef(null);

  let characterResults = null;
  const list = barbarian;

  const search = new Fuse(list, {
    includeScore: true,
    minMatchCharLength: 3,
    keys: ["name"],
  });

  let results = search.search("");
  characterResults = results.map((result: any) => result.item);
  results = search.search(query, { limit: 5 });
  characterResults = query
    ? results.map((character: any) => character.item)
    : null;

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    updateQuery(e.currentTarget.value);
  };

  const onFocus = (e: any) => {
    setIsComponentVisible(true);
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="search-form">
        <input
          type="text"
          name="search-input"
          id="search-input"
          onChange={onSearch}
          onFocus={onFocus}
        />
        {characterResults && isComponentVisible && (
          <div className="search-results">
            {characterResults.map((result: any, index: any) => {
              return (
                <div
                  key={`searchResult${index}`}
                  onClick={() => {
                    onSelect(result);
                  }}
                >
                  {result.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export { SkillSearch };
