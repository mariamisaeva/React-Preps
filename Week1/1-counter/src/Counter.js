import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(num => num + 1);
    };

    return (
        <div>
            <Count count={count} />
            <Button increment={increment} />
        </div>
    );
}


export default Counter;
