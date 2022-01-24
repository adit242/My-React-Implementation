import React from 'react'

export default function Childprop(props) {
    return (
        <div>
            <button onClick={props.name}>Hii alert</button>
            {/* here it is imported as props. */}
        </div>
    )
}
