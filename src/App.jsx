import Intro from "./components/Intro";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <img src="/image-omelette.jpeg" alt="" />
      <div className="px-8 py-10 font-outfit">
        <Intro />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </main>
  );
}

export default App;
