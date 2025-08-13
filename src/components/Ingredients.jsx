import { ingrdientsData } from "../data/data";
export default function Ingredients() {
  const ingredientsElements = ingrdientsData.map((item, index) => (
    <li className="text-custom-stone-600 font-light pl-4" key={index}>
      {item}
    </li>
  ));

  return (
    <section className="flex flex-col gap-4 py-4 px-2 border-b-1 border-custom-stone-150">
      <h2 className="font-young-serif text-custom-brown-800 text-3xl">
        Ingredients
      </h2>
      <ul className="list-disc flex flex-col gap-2 ml-4 mb-2 ">
        {ingredientsElements}
      </ul>
    </section>
  );
}
