import React, { useState } from 'react';
import Axios from 'axios';

const SearchReminder = () => {
  const [text, setText] = useState({
    recipient: '',
    textmessage: '',
  });

  const sendText = () => {
    // pass variables to query string for

    Axios.post('/api/twilio/text', {
      recipient: text.recipient,
      textmessage: text.textmessage,
    })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <label>Phone Number</label>
        <input
          value={text.recipient}
          placeholder="your number"
          onChange={(e) => setText({ ...text, recipient: e.target.value })}
        />
      </div>
      <div>
        <label>Message to send</label>
        <input
          value={text.textmessage}
          placeholder="your number"
          onChange={(e) => { setText({ ...text, textmessage: e.target.value }); }}
        />
      </div>
      <button type="reset" onClick={() => sendText()}>
        send text
      </button>
    </div>
  );
};

export default SearchReminder;
