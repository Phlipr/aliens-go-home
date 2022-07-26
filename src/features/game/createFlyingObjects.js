import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
    flyingObjectsStarterPositions
} from '../../utils/constants';

const createFlyingObjects = (state) => {
    const { lastObjectCreatedAt, flyingObjects } = state.gameState;
    if (!state.gameState.started) return { flyingObjects, lastObjectCreatedAt }; // game not running

    const now = (new Date()).getTime();
    const createNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval &&
        flyingObjects.length < maxFlyingObjects
    );

    if (!createNewObject) return { flyingObjects, lastObjectCreatedAt }; // no need to create objects now

    const id = (new Date()).getTime();
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id,
    };

    flyingObjects.push(newFlyingObject);

    return {
        flyingObjects,
        lastObjectCreatedAt: new Date()
    }
};

export default createFlyingObjects;