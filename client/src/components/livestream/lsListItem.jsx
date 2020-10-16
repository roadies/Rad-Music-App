import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleLivestream from './singleLivestream.jsx';
import Chat from './chat';
import './lsListItem.css';

const LsListItem = (props) => {
    const { stream, user } = props;
    const [isClicked, toggleClicked] = useState(false);
    // const [livestreamObj, setLivestreamObj] = useState();

    const handleClick = () => {
        isClicked ? toggleClicked(false) : toggleClicked(true);
        // console.log(isClicked, 'Clicked!');
    };

    useEffect(() => {
        // console.log(props);
    }, [props.stream]);
    // if (!livestreams) {

    if (isClicked) {
        return (
            <div className="stream">
                <div className="stream_video">
                    <SingleLivestream stream={stream} />
                    <button onClick={handleClick} type="button" class="btn btn-warning">Leave Stream</button>
                </div>
                <div className="stream_chat">
                    <Chat roomId={stream.publisher.clientId} user={user} />
                </div>
            </div>
        );
    }
    return (

        <div className="streamInfo">
            <h1>{stream.publisher.stream}</h1>
            <button onClick={handleClick} type="button" class="btn btn-warning">View Stream</button>
        </div>
    );
};

export default LsListItem;
