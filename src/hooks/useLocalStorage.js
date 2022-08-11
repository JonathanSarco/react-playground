import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const storage = localStorage.getItem(key);
  const savedValue = JSON.parse(storage);

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
