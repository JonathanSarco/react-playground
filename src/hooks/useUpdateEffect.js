import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current === true) {
      firstRenderRef.current = false;
      return;
    } else {
      return callback();
    }
  }, dependencies);
}
