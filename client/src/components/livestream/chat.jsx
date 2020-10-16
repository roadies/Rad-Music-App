import React, { useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

// IMPORT CHAT HELPERS AFTER DEFINING THEM..... IF I DO DEFINE THEM, THAT IS

const Chat = (props) => {
    const { roomId, user } = props;
    const [username, setUsername] = useState(user);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = io('localhost:8080', {
        query: {
            roomName: roomId,
        },
    });

    socket.on('serverSendMessage', (incMessage) => {
        receiveMessage(incMessage);
    });

    const sendMessage = () => {
        socket.emit('clientSendMessage', {
            user: username,
            body: message,
        });
        setMessage('');
    };

    const receiveMessage = (incMessage) => {
        setMessages([...messages, incMessage]);
    };

    return (
        <div>
            <div className="card-title" />
            <br />
            <br />
            <br />
            <div className="container_chat">
                <div className="messages">
                    {messages.map((message) => (
                        // placeholder prop names
                        <div className={!user ? 'chat_text' : 'green'}>
                            <strong>{message.user}</strong>
                            {' '}
                            <strong>says:</strong>
                            {' '}
                            {message.body}
                        </div>
                    ))}
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="" aria-label="message" aria-describedby="basic-addon2" value={message} onChange={(ev) => setMessage(ev.target.value)} />
                    <div className="input-group-append">

                        <button className="btn btn-outline-secondary" type="button" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
