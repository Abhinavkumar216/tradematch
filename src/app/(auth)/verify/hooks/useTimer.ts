import { Dispatch, useEffect, useState } from "react";

const useTimer = (
  seconds: number
): [number, Dispatch<React.SetStateAction<number>>] => {
  const [timer, setTimer] = useState<number>(seconds);

  useEffect(() => {
    const second = setInterval(() => {
      if (timer > 0) {
        setTimer((count) => count - 1);
      } else {
        clearInterval(second);
      }
    }, 1000);
    return () => {
      clearInterval(second);
    };
  }, [timer]);

  return [timer, setTimer];
};

export default useTimer;
