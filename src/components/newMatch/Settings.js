import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const reigns = [
  { id: 0, name: "Random" },
  { id: 1, name: "Mankind" },
  { id: 2, name: "Narnians" },
  { id: 3, name: "Dark Forest" },
  { id: 4, name: "Under the Mountain" },
  { id: 5, name: "Northern Mages" },
];

const Settings = ({ users, name }) => {
  const isFormValid = () => {
    return true;
  };

  return (
    <Form>
      <h4>Settings</h4>
      {users.map((user) => (
        <Row form key={user.id}>
          <Col>
            <FormGroup>
              <Label for="player">Player</Label>
              <Input
                readOnly
                required
                disabled
                bsSize="sm"
                type="text"
                name="user"
                id="player"
                placeholder="Player name"
                value={user.name}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="reigns">Reign</Label>
              <Input
                type="select"
                name="select"
                id="reigns"
                bsSize="sm"
                required
                disabled={name !== user.name}
              >
                {reigns.map((reign) => (
                  <option key={reign.id} value={reign.id}>
                    {reign.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Input
                type="checkbox"
                name="check"
                id="readycheck"
                required
                disabled={name !== user.name}
              />{" "}
              <Label for="readycheck" check>
                Ready
              </Label>
            </FormGroup>
          </Col>
        </Row>
      ))}
      <Button disabled={isFormValid()}>Begin</Button>
    </Form>
  );
};

export default Settings;
