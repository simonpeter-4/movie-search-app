import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const saved = localStorage.getItem(key);

    if (saved) {
      return JSON.parse(saved);
    }

    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  };

  return [storedValue, setValue];
}

export default useLocalStorage;