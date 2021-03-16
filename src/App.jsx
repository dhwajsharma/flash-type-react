import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import { SAMPLE_PARAGRAPHS } from "../src/data/sampleParagraphs";

const TotalTime = 60;
const URL = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};
class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({
      ...DefaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  fetchNewParagraph = () => {
    fetch(URL)
      .then((response) => response.text())
      .then((data) => {
        // Once the api results are here, break the selectedParagraph into test info
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        // Update the testInfo in state
        this.setState({
          ...DefaultState,
          selectedParagraph: data,
          testInfo,
        });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startAgain = () => this.fetchNewParagraphFallback();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the WPM and Time Remaining
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraph;

  handlerUserInput = (inputValue) => {
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (!this.state.timerStarted) {
      this.startTimer();

      if (index < 0) {
        this.setState({
          testInfo: [
            {
              testLetter: this.state.testInfo[0].testLetter,
              status: "notAttempted",
            },
            ...this.state.testInfo.slice(1),
          ],
          characters,
          words,
        });
        return;
      }
    }
    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //Making a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index == this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "Not Attempted";

    //Checking for the correct typed letter
    const isMistake = inputValue[index] == testInfo[index].testLetter;

    //Updating the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    //Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
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
          testInfo={this.state.testInfo}
          onInputChange={this.handlerUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
