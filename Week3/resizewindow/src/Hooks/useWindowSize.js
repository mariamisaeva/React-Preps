import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    function getWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }


    useEffect(() => {

        window.addEventListener('resize', getWindowSize);
        getWindowSize(); //initial call

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }

    }, []);


    useDebugValue(windowSize, ({ width, height }) => (`Width: ${width}, Height: ${height}`));

    return windowSize;
}


export default useWindowSize;
