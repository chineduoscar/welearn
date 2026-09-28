import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, accusantium quis vitae numquam accusamus ab hic voluptatem, ea quisquam iure incidunt at cupiditate id adipisci harum distinctio ipsa nisi iste, sunt consequuntur a explicabo expedita. Perferendis asperiores laboriosam hic consequatur?";

  const shortText = text.slice(0, 25);

  const addNumber = () => {
    setCount(count + 1);
    console.log(count);
  };

  function subNumber() {
    setCount(count - 1);

    console.log(count);
  }

  function toggleText() {
    setIsShowing(!isShowing);
  }

  return (
    <div>
      <h1>Welcome to Welearn</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia
        sunt culpa?
      </p>

      <div className="flex items-center justify-center gap-5">
        <button
          className="bg-red-500 px-4 py-1 rounded-md cursor-pointer text-white"
          onClick={addNumber}
        >
          +
        </button>
        <h1 className="font-bold text-lg">{count}</h1>
        <button
          className="bg-blue-500 px-4 py-1 rounded-md cursor-pointer text-white"
          onClick={subNumber}
        >
          -
        </button>
      </div>

      <div className="flex gap-1">
        <p>{isShowing ? text : shortText}</p>
        <button className="underline text-blue-400" onClick={toggleText}>
          {isShowing ? "See less" : "See more"}
        </button>
      </div>

      <button>Get started</button>
    </div>
  );
};

export default Home;
