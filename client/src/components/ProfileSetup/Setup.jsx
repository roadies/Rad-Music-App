import Axios from 'axios';
import React, { useState } from 'react';
import {
  Container, Col, Row,
  Button, ButtonGroup, InputGroup,
  FormControl, DropdownButton, Dropdown,
  FormLabel, Form,
} from 'react-bootstrap';

const SetupProfile = ({
  view, setView, setUser, user, setGenre,
}) => {
  const [userName, setUserName] = useState('');
  const [setupGenre, setSetupGenre] = useState('Favorite genre');
  const [profilePic, setProfilePic] = useState('');

  const submit = () => {
    event.preventDefault();
    Axios.post('/api/profile/create', {
      userName,
      setupGenre,
      user,
    })
      .then((response) => {
        window.alert('Successfully registered!');
        setUser(userName);
        setGenre(JSON.parse(response.config.data).setupGenre);
        setView('Home');
      })
      .catch((error) => {
        window.alert('Username Taken!');
        console.err(error);
      });
  };

  return (

    <div
      as={Container}
      style={{
      // border: 'solid 2px black',
        padding: '20px',
      }}
    >
      <Col>
        <Row>
          <div>
            <Form>
              <Form.Group>
                <div>
                  <FormLabel column="lg">sign up</FormLabel>
                  <InputGroup>
                    <FormControl
                      placeholder="username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setUserName(e.target.value)}
                    />

                    <DropdownButton
                      as={InputGroup.Append}
                      variant="outline-secondary"
                      title={setupGenre}
                      id="input-group-dropdown-2"
                      onSelect={(e) => setSetupGenre(e)}
                    >
                      <Dropdown.Item eventKey="alternative" href="#">alternative</Dropdown.Item>
                      <Dropdown.Item eventKey="blues" href="#">blues</Dropdown.Item>
                      <Dropdown.Item eventKey="classical" href="#">classical</Dropdown.Item>
                      <Dropdown.Item eventKey="chill" href="#">chill</Dropdown.Item>
                      <Dropdown.Item eventKey="country" href="#">country</Dropdown.Item>
                      <Dropdown.Item eventKey="electronic" href="#">electronic</Dropdown.Item>
                      <Dropdown.Item eventKey="hip-hop" href="#">hip-hop</Dropdown.Item>
                      <Dropdown.Item eventKey="jazz" href="#">jazz</Dropdown.Item>
                      <Dropdown.Item eventKey="k-Pop" href="#">k-Pop</Dropdown.Item>
                      <Dropdown.Item eventKey="metal" href="#">metal</Dropdown.Item>
                      <Dropdown.Item eventKey="pop" href="#">pop</Dropdown.Item>
                      <Dropdown.Item eventKey="punk" href="#">punk</Dropdown.Item>
                      <Dropdown.Item eventKey="rock" href="#">rock</Dropdown.Item>
                      <Dropdown.Item eventKey="r-n-b" href="#">r&b</Dropdown.Item>
                      <Dropdown.Item eventKey="world-music" href="#">world music</Dropdown.Item>
                      <Dropdown.Divider />
                    </DropdownButton>
                  </InputGroup>
                </div>
                <div>
                  <ButtonGroup>
                    <Button variant="success" type="submit" onClick={() => submit()}>Register</Button>
                  </ButtonGroup>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default SetupProfile;
