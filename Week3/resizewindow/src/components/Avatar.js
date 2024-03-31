import React from "react";

function Avatar({ name }) {

    return (
        <div>
            <img src={`/${name}.png`} alt="avatar" />
        </div>
    );
}

export default Avatar;
