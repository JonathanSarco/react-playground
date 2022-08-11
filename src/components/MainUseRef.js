import { useRef, useState } from "react";

function MainUseRef() {
  const [name, setName] = useState("");

  const focusRef = useRef();

  const focusInput = () => {
    focusRef.current.focus();
  };

  return (
    <>
      <input
        ref={focusRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>{name}</div>

      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default MainUseRef;
