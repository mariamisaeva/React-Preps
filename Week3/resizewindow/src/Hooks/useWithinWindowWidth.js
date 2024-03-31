
import useWindowSize from "./useWindowSize";
import { useDebugValue } from "react";


function useWithinWindowWidth(min, max) {

    const { width } = useWindowSize();

    const isWithin = width >= min && width <= max;
    console.log(isWithin)

    useDebugValue({ min, max, isWithin }, formatDebugValueWithinWindow)

    return isWithin;
}

// Format debug value for useWithinWindowWidth hook
const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
    if (maxWidth === Infinity) {
        return `(min-width: ${minWidth}px) => ${isWithin}`
    }
    if (minWidth === 0) {
        return `(max-width: ${maxWidth}px) => ${isWithin}`
    }
    return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`
}

export default useWithinWindowWidth;
