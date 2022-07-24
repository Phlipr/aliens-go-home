import { calculateAngle } from "../../utils/formulas";

export const moveObjects = mousePosition => {
    if (!mousePosition) return null;
    const { x, y } = mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return angle;
}