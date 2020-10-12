import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

const MapEntry = ({ marker }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text, setText] = useState({
    recipient: '',
    date: `${marker.date}`,
    name: `${marker.bandName}`,
    venue: `${marker.venue}`,
  });

  const sendText = () => {
    // pass variables to query string for

    Axios.post('/api/twilio/text', {
      recipient: text.recipient,
      date: text.date,
      name: text.name,
      venue: text.venue,
    })
      .catch((err) => console.error(err));
  };

  return (

    <div style={{ border: 'solid 1px black', padding: '5px', marginBottom: '5px' }}>
      <li>
        <div>
          <b>Band:</b>
          <br />
          {marker.bandName}
        </div>
        <div>
          <b>Venue:</b>
          <br />
          {marker.venue}
        </div>
        <div>
          <b>Date:</b>
          <br />
          {marker.date}
        </div>
        <Button variant="info" size="sm" onClick={handleShow}>
          Remind Me
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send SMS reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Phone Number</label>
              <input
                value={text.recipient}
                placeholder="your number"
                onChange={(e) => setText({ ...text, recipient: e.target.value })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="outline-success"
              onClick={() => {
                handleClose();
                sendText();
              }}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </li>
    </div>
  );
};

export default MapEntry;
