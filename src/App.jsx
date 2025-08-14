import Intro from "./components/Intro";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
function App() {
  return (
    <div className="flex flex-col md:items-center md:justify-center md:min-h-screen md:p-10 bg-custom-brown-800">
      <main className="w-full flex flex-col bg-custom-white md:max-w-2xl md:rounded-2xl">
        <img
          className="md:m-8 md:rounded-xl"
          src="/image-omelette.jpeg"
          alt="Image of an Omelette"
        />
        <div className="flex flex-col gap-8 px-8 py-10 font-outfit bg-custom-white md:rounded-b-2xl">
          <Intro />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </main>
    </div>
  );
}

export default App;
