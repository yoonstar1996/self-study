import "./App.css";
import FirstSection from "./components/Section/First";
import SecondSection from "./components/Section/Second";
import ThirdSection from "./components/Section/Third";

function App() {
  return (
    <div className="container">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
