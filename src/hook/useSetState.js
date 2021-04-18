import { useCallback, useState } from 'react';

/* from https://github.com/streamich/react-use/blob/master/src/useSetState.ts */
export const useSetState = (initialState = {}) => {
  const [state, set] = useState(initialState);

  const setState = useCallback(
    (patch) => {
      set((prevState) => ({
        ...prevState,
        ...(patch instanceof Function ? patch(prevState) : patch),
      }));
    },
    [set],
  );

  return [state, setState];
};
