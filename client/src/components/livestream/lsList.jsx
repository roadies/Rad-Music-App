import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import LsListItem from './lsListItem.jsx';
const axios = require('axios');

const LsList = (props) => {
    const { user } = props;
    const [livestreams, setLivestreams] = useState();
    const [streamObjs, setStreamObjs] = useState();

    useEffect( () => {
        axios.get('api/livestreams/live')
            .then(streams => {
                // console.log(streams.data.live, 'All live streams data');
                setStreamObjs(streams.data.live)
                let names = Object.keys(streams.data.live)
                setLivestreams(names);
                // console.log(names, 'Live stream names')
            })
    }, []);
    if (!livestreams) {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    } else {
        return (
            <div>
                {livestreams.map((property, index) => {
                    return <LsListItem stream={streamObjs[property]} key={index} user={user}/>
                })}
            </div>
        )
    }

};

export default LsList;