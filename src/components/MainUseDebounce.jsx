import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function MainUseDebounce() {
  const [count, setCount] = useState(10);

  useDebounce(() => console.log(count), 10000, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Add 1</button>
    </>
  );
}

export default MainUseDebounce;
