import React, { useState } from "react";

const WordSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedWords, setMatchedWords] = useState([]);

  const handleSearchTermChange = (event) => {
    const inputTerm = event.target.value;
    setSearchTerm(inputTerm);
    const pattern = new RegExp("\\b" + inputTerm + "\\w*", "gi");
    const words = "apple banana cherry date elderberry fig grapefruit";
    const matches = words.match(pattern);
    setMatchedWords(matches || []);
  };

  return (
    <div>
      <label htmlFor="searchTerm">Search for words:</label>
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {matchedWords.length > 0 && (
        <ul>
          {matchedWords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordSearch;