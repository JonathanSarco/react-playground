import { useState } from "react";

function MainUseToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) => {
      console.log(currentValue);
      return typeof value === "boolean" ? value : !currentValue;
    });
  }

  return [value, toggleValue];
}

export default MainUseToggle;
