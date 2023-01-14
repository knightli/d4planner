import Fuse from "fuse.js";
import React, { FC, useEffect, useRef, useState } from "react";
import { barbarian } from "../../data/barbarian";

type Props = {
  onSelect: (result: any) => void;
};

const SkillSearch: FC<Props> = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const search = new Fuse(barbarian, { keys: ["name"], minMatchCharLength: 3 });
  const results = query ? search.search(query).map(({ item }) => item) : [];

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    setIsVisible(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref} className="search-form">
      <input type="text" onChange={handleSearch} />
      {isVisible && (
        <div className="search-results">
          {results.map((result, index) => (
            <div key={`searchResult${index}`} onClick={() => onSelect(result)}>
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SkillSearch };
