import React, { useState } from "react";
import Chips from "react-chips";

const Rchips = () => {
  const [chips, setChips] = useState([]);

  const onChange = chips => {
    setChips(chips);
  };

  const suggestions = [
    "java",
    "javascript",
    "python",
    "pychart",
    "c",
    "c++",
    "react",
    "redux",
    "bootstrap",
    "recat-bootstrap",
    "css",
    "css-react"
  ];
  return (
    <Chips
      value={chips}
      placeholder="Enter the chips"
      onChange={chips => onChange(chips)}
      suggestions={suggestions}
      uniqueChips={true}
      focusInputOnSuggestionClick={true}
    />
  );
};

export default Rchips;
