import React, { useEffect, useState } from 'react';
import SingleLivestream from './singleLivestream.jsx';
import Chat from './chat.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const LsListItem = (props) => {
    const { stream, user } = props;
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
                <Container>
                    <Row>
                        <Col>
                            <SingleLivestream stream={stream} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Chat roomId={stream.publisher.clientId} user={user}/>
                        </Col>
                    </Row>
                    <button onClick={handleClick}>Leave Stream</button>
                </Container>
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