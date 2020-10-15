import React from 'react'

function Messageboard(props) {
    const { id } = props;
    return (
        <div>
            <p>Hello I am a messageboard with id: {id}</p>
        </div>
    )
}

export default Messageboard;