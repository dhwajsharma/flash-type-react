import React from "react";
import "./TestContainer.css";
const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div>
      <div className="test-container">
        <div className="try-again-container">
          <h2>try again</h2>
        </div>
      </div>
    </div>
  );
};

export default TestContainer;
