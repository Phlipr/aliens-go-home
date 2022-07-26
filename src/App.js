import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Canvas from './components/Canvas';

import { selectAngle, moveObject, startGame, selectGameState } from './features/game/gameSlice';
import { getCanvasPosition } from './utils/formulas';

const App = () => {
  const angle = Number(useSelector(selectAngle));
  const gameState = useSelector(selectGameState);
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
        gameState={gameState}
        startGame={() => dispatch(startGame())}
      />
    </div>
  );
};

export default App;
