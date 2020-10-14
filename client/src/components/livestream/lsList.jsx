import React, { useState, useEffect } from 'react';
import {} from 'react-bootstrap';
import lsListItem from './lsListItem.jsx';
const axios = require('axios');

const LsList = () => {
    const [livestreams, setLivestreams] = useState();
    const [streamObjs, setStreamObjs] = useState();

    useEffect( () => {
        axios.get('api/livestreams/live')
            .then(streams => {
                console.log(streams.data.live, 'All live streams data');
                setStreamObjs(streams.data.live)
                setLivestreams(Object.keys(streams.data.live));
                console.log(livestreams, 'Live stream names')
            })
    }, []);
    if (!livestreams) {
        return (
            <div>
                <h1>...Loading livestreams</h1>
            </div>
        )
    } else {
        return (
            <div>
                {livestreams}
            </div>
        )
    }

};

export default LsList;