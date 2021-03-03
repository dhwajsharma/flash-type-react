import React from "react";
import Button from "@material-ui/core/Button";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className="try-again">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters: </b> {characters}
        </p>
        <p>
          <b>Words: </b> {words}
        </p>
        <p>
          <b>wpm: </b> {wpm}
        </p>
      </div>

      <div>
        <Button variant="contained" color="secondary" className="end-buttons">
          Retry
        </Button>
        <Button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=cool enough?",
              "Twitter",
              "width=800,height=600"
            );
          }}
          variant="contained"
          color="primary"
          href="#contained-buttons"
          className="end-buttons"
        >
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default TryAgain;
