import { useState } from "react";

function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  const push = (value) => {
    setArray((a) => [...a, value]);
  };

  const filter = (cb) => {
    setArray((a) => a.filter(cb));
  };

  const update = (index, newElement) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const remove = (index) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.lenght - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
}

export default useArray;
