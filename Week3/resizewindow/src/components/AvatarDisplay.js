// AvatarDisplay.js

import React from 'react';
import { BeanHead } from 'beanheads';

const AvatarDisplay = () => {
    const Example = () => (
        <BeanHead
            accessory="shades"
            body="chest"
            circleColor="blue"
            clothing="tankTop"
            clothingColor="black"
            eyebrows="angry"
            eyes="wink"
            facialHair="mediumBeard"
            graphic="vue"
            hair="short"
            hairColor="black"
            hat="none"
            hatColor="green"
            lashes="false"
            lipColor="purple"
            mask="true"
            faceMask="true"
            mouth="open"
            skinTone="brown"
        />
    );

    return (
        <div>
            <h1>Avatar Display</h1>
            <Example />
        </div>
    );
};

export default AvatarDisplay;
