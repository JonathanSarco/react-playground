import useLocalStorage from "../hooks/useLocalStorage";

function MainUseLocalStorage() {
  const [value, setValue] = useLocalStorage("name", "");

  return (
    <div className="input-container">
      <input
        placeholder="..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default MainUseLocalStorage;
