import React, { useEffect, useState } from 'react';
import {} from 'react-bootstrap';

const LsListItem = (props) => {
    const { stream } = props;
    const [livestreamObj, setLivestreamObj] = useState();


    useEffect( () => {
        console.log(props);
    }, [props.stream]);
    // if (!livestreams) {
    return (
        <div>
            <h1>{stream.publisher.stream}</h1>
        </div>

    );

};

export default LsListItem;