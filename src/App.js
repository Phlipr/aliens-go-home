import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Canvas from './components/Canvas';

import { selectAngle, moveObject } from './features/position/positionSlice';
import { getCanvasPosition } from './utils/formulas';

const App = () => {
  const angle = Number(useSelector(selectAngle));
  const dispatch = useDispatch();
  let canvasMousePosition = useRef();

  useEffect(() => {
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }, []);

  useEffect(() => {
    setInterval(() => {
      dispatch(moveObject(canvasMousePosition.current))
    }, 10);
  }, [dispatch]);

  const trackMouse = (event) => {
    canvasMousePosition.current = getCanvasPosition(event);
  };

  return (
    <div className="App">
      <Canvas
        angle={angle}
        trackMouse={event => trackMouse(event)}
      />
    </div>
  );
};

export default App;
