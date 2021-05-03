import React from "react";

export const useLocalStorage = <T>(
  localStorageKey: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue] as any;
};
