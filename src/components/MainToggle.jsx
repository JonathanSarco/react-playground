import useToggle from "../hooks/useToggle";

function Toggle() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>Value is: {value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Set True</button>
      <button onClick={() => toggleValue(false)}>Set False</button>
    </div>
  );
}

export default Toggle;
