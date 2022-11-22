import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  const plusOne = () => setCount(count() + 1);
  const minusOne = () => setCount(count() - 1);

  return (
    <div className="bg-blue-700 text-white p-4">
      <p>Remote counter (solid.js component)</p>
      <p>Count value is: {count()}</p>
      <button
        onClick={plusOne}
        className="bg-gray-200 px-4 py-1 mt-2 rounded-md text-black"
      >
        + 1
      </button>
      <button
        onClick={minusOne}
        className="bg-gray-200 px-4 py-1 mt-2 rounded-md mx-2 text-black"
      >
        - 1
      </button>
    </div>
  );
};
