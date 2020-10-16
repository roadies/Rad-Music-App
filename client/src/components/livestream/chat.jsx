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
            <div className="card-title"></div>
            <br />
            <br />
            <div className="messages">
                {messages.map((message) => (
                    // placeholder prop names
                    <div className="chat_text">
                        <strong>{message.user}</strong>
                        {' '}
                        <strong>says:</strong>
                        {' '}
                        {message.body}
                    </div>
                ))}
            </div>
            <div className="footer">
                <input type="text" placeholder="Message" className="form-control" value={message} onChange={(ev) => setMessage(ev.target.value)} />
                <button onClick={sendMessage} className="btn btn-primary form-control">Send</button>
            </div>
        </div>
    );
};

export default Chat;
