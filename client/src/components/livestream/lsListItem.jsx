import React, { useState } from 'react';
import {} from 'react-bootstrap';

const lsListItem = () => {
    const [livestreams, setLivestreams] = useState();

    const getLiveStreams = async () => {
        const streams =  await fetch('./api/livestreams')
        setLivestreams(streams);
        console.log(streams);
    };
    // if (!livestreams) {
    return (
        <div>
            <H1>...Loading livestreams</H1>
        </div>

    );

};

export default lsListItem;