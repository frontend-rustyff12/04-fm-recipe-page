import { nutritionData } from "../data/data";
export default function Nutrition() {
  const nutritionElements = nutritionData.map((item, index) => (
    <li className="border-b-1 border-custom-stone-150" key={index}>
      {item.name} <span>{item.amount}</span>
    </li>
  ));

  return (
    <section className="flex flex-col gap-4 py-4 px-2 ">
      <h2 className="font-young-serif text-custom-brown-800 text-3xl">
        Nutrition
      </h2>
      <ul>{nutritionElements}</ul>
    </section>
  );
}
