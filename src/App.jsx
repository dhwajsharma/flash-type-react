import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";

const TotalTime = 60;
class App extends React.Component {
  state = {
    selectedParagraph: "Hello",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
