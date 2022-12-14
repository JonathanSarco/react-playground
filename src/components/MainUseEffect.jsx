import { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

function MainUseEffect() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => console.log(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default MainUseEffect;
