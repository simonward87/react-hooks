import { useEffect, useState } from 'react';

// useViewport provides the current viewport height and width, which can then
// be within components for conditional rendering etc.

interface Dimensions {
  //dimensions in pixels
  height: number;
  width: number;
}

export default function useViewport() {
  // Partial is used as object wont be populated until the component mounts
  const [viewport, setViewport] = useState<Partial<Dimensions>>({});

  useEffect(() => {
    // isolated function can be easily used to both add / remove the event
    // listener when the component mounts / unmounts
    function handleWindowResize() {
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    // initialize the state when the component is first mounted
    if (Object.keys(viewport).length < 2) {
      handleWindowResize();
    }

    // add event listener when component mounts
    window.addEventListener('resize', handleWindowResize);

    // clean up event listener when component unmounts
    return () => window.removeEventListener('resize', handleWindowResize);
  })

  // array used so elements can be destructured and renamed as required
  return [viewport.height, viewport.width];
}
