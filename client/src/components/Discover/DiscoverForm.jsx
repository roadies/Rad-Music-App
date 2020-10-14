import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';



const DiscoverForm = () => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState('nothing yet');
  const [completed, setCompleted] = useState('');

  const submit = () => {
    preventDefault();
    // request to spotify api
  };

  const select = (newGenre) => {
    // setGenres(genres.push(genre));
    setGenres(genres => genres.concat(newGenre))

  }

  useEffect(() => {
    if (genres.length === 4) {
      setCompleted(`Ok! Let's search`);
    }
  })

  return (
    <div>
      <p>{completed}</p>
      <div className="genre-buttons">
        <Button variant="outline-info" onClick={() => select('alternative')}>alternative</Button>
        <Button variant="outline-info" onClick={() => select('blues')}>blues</Button>
        <Button variant="outline-info" onClick={() => select('classical')}>classical</Button>
        <Button variant="outline-info" onClick={() => select('chill')}>chill</Button>
        <Button variant="outline-info" onClick={() => select('country')}>country</Button>
        <Button variant="outline-info" onClick={() => select('electronic')}>electronic</Button>
        <Button variant="outline-info" onClick={() => select('hip-hop')}>hip-hop</Button>
        <Button variant="outline-info" onClick={() => select('jazz')}>jazz</Button>
        <Button variant="outline-info" onClick={() => select('k-pop')}>k-pop</Button>
        <Button variant="outline-info" onClick={() => select('metal')}>metal</Button>
        <Button variant="outline-info" onClick={() => select('pop')}>punk</Button>
        <Button variant="outline-info" onClick={() => select('rock')}>rock</Button>
        <Button variant="outline-info" onClick={() => select('r&b')}>r&b</Button>
        <Button variant="outline-info" onClick={() => select('world-music')}>world music</Button>
      </div>
    </div>
  )

}

export default DiscoverForm;