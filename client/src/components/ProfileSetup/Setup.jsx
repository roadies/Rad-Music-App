import React from 'react';
import {
  Container, Col, Row,
  Button, ButtonGroup, InputGroup,
  FormControl, DropdownButton, Dropdown,
  FormLabel, Form,
} from 'react-bootstrap';

const SetupProfile = () => {
  const test = {};
  return (

    <div as={Container}
    style={{ 
        // border: 'solid 2px black', 
        padding: '20px' 
    }}
    >
      <Col>
        <Row 
        // style={{ border: 'solid 2px red', padding: '10px' }}
        >
          <div>
            <Form>
              <Form.Group>
                <FormLabel column="lg">Choose your Profile Pic Here</FormLabel>
                <Form.File id="exampleFormControlFile1" />
                <div>
                  <FormLabel column="lg">Choose your username!</FormLabel>
                  <InputGroup>
                    <FormControl
                      placeholder="Enter here!"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                      as={InputGroup.Append}
                      variant="outline-secondary"
                      title="Favorite Genre"
                      id="input-group-dropdown-2"
                    >
                      <Dropdown.Item href="#">Alternative</Dropdown.Item>
                      <Dropdown.Item href="#">Blues</Dropdown.Item>
                      <Dropdown.Item href="#">Classical</Dropdown.Item>
                      <Dropdown.Item href="#">Easy Listening</Dropdown.Item>
                      <Dropdown.Item href="#">Electronic</Dropdown.Item>
                      <Dropdown.Item href="#">Hip-Hop/Rap</Dropdown.Item>
                      <Dropdown.Item href="#">K-Pop</Dropdown.Item>
                      <Dropdown.Item href="#">Pop</Dropdown.Item>
                      <Dropdown.Item href="#">R&B/Soul</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="https://i.imgur.com/7JQkwUo.png" target="_blank">Click Here to check where you fall under</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
                <div>
                  <FormLabel column="lg">
                    Tell us about yourself!
                    <Form.Control as="textarea" rows={3} placeholder="Enter Bio information here!" />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel column="lg">
                    Set your first status!
                    <Form.Control as="textarea" rows={3} placeholder="Enter Status here!" />
                  </FormLabel>
                </div>
                <div>
                  <ButtonGroup>
                    <Button variant="success" onClick={() => console.log('CLICKED ON REGISTER')}>Register</Button>
                    <Button variant="link" onClick={() => console.log('CLICKED ON REGISTER')}>Skip for now</Button>
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
