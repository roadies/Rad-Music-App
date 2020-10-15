import React, { useState } from 'react';
import io from 'socket.io-client';
import {} from 'react-bootstrap';

//IMPORT CHAT HELPERS AFTER DEFINING THEM..... IF I DO DEFINE THEM, THAT IS

const Chat = (props) => {
    const { roomId, user } = props;
    const [username, setUsername] = useState(user);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = io('localhost:8080', {query: {
        roomName: roomId
        }});
    
    socket.on('serverSendMessage', (incMessage) => {
        receiveMessage(incMessage);
    });

    const sendMessage = () => {
        socket.emit('clientSendMessage', {
            user: username,
            body: message
        })
        setMessage('');
    }

    const receiveMessage = (incMessage) => {
        setMessages([...messages, incMessage])
    };

    return (
        <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Chat</div>
                        <hr/>
                        <div className="messages">
                            {messages.map(message => {
                                return (
                                    //placeholder prop names
                                    <div>{message.user} says: {message.body}</div>
                                )
                            })}
                        </div>
                        <div className="footer">
                            <input type="text" placeholder="Message" className="form-control" value={message} onChange={ev => setMessage(ev.target.value)}/>
                            <br/>
                            <button onClick={sendMessage} className="btn btn-primary form-control">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Chat;