import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize() {

    function getWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }

    }, []);


    useDebugValue(windowSize, ({ width, height }) => (`Width: ${width}, Height: ${height}`));

    return windowSize;
}


export default useWindowSize;
