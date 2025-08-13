export default function Intro() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-young-serif text-custom-stone-900 text-4xl">
        Simple Omelette Recipe
      </h1>
      <p className="text-custom-stone-600 font-light">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className=" bg-custom-rose-50 rounded-xl p-6">
        <h3 className="text-custom-rose-800  mb-2 text-xl font-semibold">
          Preparation time
        </h3>
        <ul className="flex flex-col gap-2 list-disc ml-6">
          <li className="text-custom-stone-600 font-light">
            <span className="font-semibold text-custom-stone-900">Total</span>:
            Approximately 10 minutes
          </li>
          <li className="text-custom-stone-600 font-light">
            <span className="font-semibold text-custom-stone-900">
              Preparation
            </span>
            : 5 minutes
          </li>
          <li className="text-custom-stone-600 font-light">
            <span className="font-semibold text-custom-stone-900">Cooking</span>
            : 5 minutes
          </li>
        </ul>
      </div>
    </section>
  );
}
