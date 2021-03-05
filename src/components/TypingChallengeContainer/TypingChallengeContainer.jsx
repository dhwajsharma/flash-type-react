import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Wpm" cardValue={wpm} />
      </div>

      {/* The real challenge */}
      <div className="typewriter-container">
        <TypingChallenge
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
