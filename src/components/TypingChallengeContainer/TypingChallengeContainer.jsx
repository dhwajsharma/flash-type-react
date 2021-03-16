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
  testInfo,
  onInputChange,
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
          testInfo={testInfo}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
