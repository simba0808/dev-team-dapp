import {useEffect, useRef} from 'react';

const useDidUpdateEffect: typeof useEffect = (effect, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      return effect();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default useDidUpdateEffect;