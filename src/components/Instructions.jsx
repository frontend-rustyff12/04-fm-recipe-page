import { instructionsData } from "../data/data";
export default function Instructions() {
  const instructionsElements = instructionsData.map((item, index) => (
    <li key={index} className="text-custom-stone-600 font-light pl-4">
      <span className="font-semibold text-custom-stone-900">{item.intro}</span>{" "}
      {item.steps}
    </li>
  ));

  return (
    <section className="flex flex-col gap-4 py-4 px-2 border-b-1 border-custom-stone-150">
      <h2 className="font-young-serif text-custom-brown-800 text-3xl">
        Instructions
      </h2>
      <ul className="list-decimal marker:text-custom-brown-800 marker:font-bold flex flex-col gap-2 ml-4 mb-2 ">
        {instructionsElements}
      </ul>
    </section>
  );
}
