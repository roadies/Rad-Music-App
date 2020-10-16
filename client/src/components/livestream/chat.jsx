import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {} from 'react-bootstrap';

//IMPORT CHAT HELPERS AFTER DEFINING THEM..... IF I DO DEFINE THEM, THAT IS

const Chat = (props) => {
    const { roomId, user } = props;
    const [username, setUsername] = useState(user);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = io({
        query: {
            roomName: roomId
            }
        }
    );
    
    socket.on('serverSendMessage', (incMessage) => {
        const { user, message } = incMessage;
        const messageObj = { user, message }
        receiveMessage(messageObj);
    });
    
    useEffect(() => {
        return () => {
            console.log(socket.id, 'disconnecting')
            socket.disconnect( {username} );
            console.log('disconnected')
        }
    }, [])
    
    
    const sendMessage = () => {
        if (!message.length) {
            return;
        }
        socket.emit('clientSendMessage', {
            room: roomId,
            user: username,
            body: message
        })
        setMessage('');
    }

    const receiveMessage = (newMessage) => {
        setMessages([...messages, newMessage])
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
                            {messages.map((message, index) => {
                                return (
                                    //placeholder prop names
                                    <div key={index}>{message.user} says: {message.body}</div>
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