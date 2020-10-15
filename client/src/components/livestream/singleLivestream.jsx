import React, { useEffect, useState } from 'react';
import {} from 'react-bootstrap';


const SingleLivestream = (props) => {
    const { stream } = props;
    useEffect( () => {
        const createPlayer = () => {
            if (flvjs.isSupported()) {
                const videoElement = document.getElementById(`${stream.publisher.clientId}`);
                const flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: `http://localhost:8000/live/${stream.publisher.stream}.flv`
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }
        }

        createPlayer()
    })
    return (
        <div>
            <video id={stream.publisher.clientId} controls height="400" width="600"></video>
        </div>
    );
};

export default SingleLivestream;