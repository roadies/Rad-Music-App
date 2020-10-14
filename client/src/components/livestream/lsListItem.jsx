import React, { useEffect, useState } from 'react';
import SingleLivestream from './singleLivestream.jsx';
import {} from 'react-bootstrap';

const LsListItem = (props) => {
    const { stream } = props;
    const [isClicked, toggleClicked] = useState(false);
    // const [livestreamObj, setLivestreamObj] = useState();

    const handleClick = () => {
        isClicked ? toggleClicked(false) : toggleClicked(true);
        console.log(isClicked, 'Clicked!');
    }

    useEffect( () => {
        console.log(props);
    }, [props.stream]);
    // if (!livestreams) {
    
    if (isClicked){ 
        return (
            <div onClick={handleClick}>
                <SingleLivestream stream={stream} />
            </div>
        )
        } else {
            return (

            <div onClick={handleClick}>
                <h1>{stream.publisher.stream}</h1>
                <h3>isClicked is false!</h3>
            </div>
            )
        }

};

export default LsListItem;