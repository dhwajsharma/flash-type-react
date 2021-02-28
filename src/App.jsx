import "./App.css";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* Challenge section */}
      <Footer />
    </div>
  );
}

export default App;
