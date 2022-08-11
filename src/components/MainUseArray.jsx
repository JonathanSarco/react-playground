import useArray from "../hooks/useArray";

function MainUseArray() {
  const { array, set, push, filter, update, remove, clear } = useArray([
    1, 2, 3, 4, 5,
  ]);

  return (
    <>
      <div>{array.join(",")}</div>
      <button onClick={() => push(5)}>Add number 5</button>
      <button onClick={() => update(1, 66)}>Change second to 66</button>
      <button onClick={() => remove(0)}>Remove 1st element</button>
      <button onClick={() => filter((n) => n > 3)}>
        Remove numbers greater than 3
      </button>
      <button onClick={() => clear()}>Clear</button>
    </>
  );
}

export default MainUseArray;
