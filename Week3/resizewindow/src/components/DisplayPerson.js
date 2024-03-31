import React from "react";
import Avatar from "./Avatar";
import useWithinWindowWidth from "../Hooks/useWithinWindowWidth";
import { MdTabletMac, MdLaptopMac, MdDesktopMac } from "react-icons/md";


// Define avatar states
const POSSIBLE_STATES = {
    small: { name: "Mikong", size: "small", icon: <MdTabletMac /> },
    medium: { name: "Diana", size: "medium", icon: <MdLaptopMac /> },
    big: { name: "Mithi", size: "big", icon: <MdDesktopMac /> },
}

// Define DisplayPerson component
const DisplayPerson = () => {
    const big = useWithinWindowWidth(1000, Infinity);
    const medium = useWithinWindowWidth(500, 1000);
    const small = useWithinWindowWidth(0, 500);

    let currentPerson = null;
    let currentState = null;

    if (big) {
        currentPerson = <Avatar name={POSSIBLE_STATES.big.name} />
        currentState = POSSIBLE_STATES.big;
    } else if (medium) {
        currentPerson = <Avatar name={POSSIBLE_STATES.medium.name} />
        currentState = POSSIBLE_STATES.medium;
    } else if (small) {
        currentPerson = <Avatar name={POSSIBLE_STATES.small.name} />
        currentState = POSSIBLE_STATES.small;
    }

    return (
        <div>
            {currentPerson}
            {currentState && currentState.name && currentState.size && (
                <span>
                    {currentState.name} is {currentState.size}
                </span>
            )}
        </div>
    );

}

export default DisplayPerson;
