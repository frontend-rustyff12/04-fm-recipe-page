import { nutritionData } from "../data/data";
export default function Nutrition() {
  const nutritionElements = nutritionData.map((item, index) => (
    <li
      className="border-b-1 border-custom-stone-150 last-of-type:border-none grid grid-cols-2 py-3 first-of-type:pt-0 pl-6"
      key={index}
    >
      {item.name}{" "}
      <span className="text-custom-brown-800 font-bold">{item.amount}</span>
    </li>
  ));

  return (
    <section className="flex flex-col gap-4 py-4 px-2 ">
      <h2 className="font-young-serif text-custom-brown-800 text-3xl">
        Nutrition
      </h2>
      <p className="text-custom-stone-600 font-light">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul>{nutritionElements}</ul>
    </section>
  );
}
