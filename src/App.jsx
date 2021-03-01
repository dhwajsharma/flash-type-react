import "./App.css";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <ChallengeSection />
      <Footer />
    </div>
  );
}

export default App;
