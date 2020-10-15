import React, { useEffect, useState } from 'react';
import SingleLivestream from './singleLivestream.jsx';
import Messageboard from './messageBoard.jsx';
import {} from 'react-bootstrap';

const LsListItem = (props) => {
    const { stream } = props;
    const [isClicked, toggleClicked] = useState(false);
    // const [livestreamObj, setLivestreamObj] = useState();

    const handleClick = () => {
        isClicked ? toggleClicked(false) : toggleClicked(true);
        // console.log(isClicked, 'Clicked!');
    }

    useEffect( () => {
        // console.log(props);
    }, [props.stream]);
    // if (!livestreams) {
    
    if (isClicked){ 
        return (
            <div className="stream">
                <SingleLivestream stream={stream} />
                <Messageboard id={stream.publisher.clientId} />
                <button onclick={handleClick}>Leave Stream</button>
            </div>
        )
    } else {
        return (

        <div className="streamInfo">
            <h1>{stream.publisher.stream}</h1>
            <button onClick={handleClick}>View Stream</button>
        </div>
        )
    }

};

export default LsListItem;