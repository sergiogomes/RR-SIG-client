import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const reigns = [
  { id: 0, name: "Random", creatures: ["Random"] },
  { id: 1, name: "Mankind", creatures: ["Humans"] },
  { id: 2, name: "Narnians", creatures: ["Centaurs, Fauns, Satirs"] },
  { id: 3, name: "Dark Forest", creatures: ["Elfs"] },
  { id: 4, name: "Under the Mountain", creatures: ["Dwarfs, Minotaurs"] },
  { id: 5, name: "Northern Mages", creatures: ["Gremilings, Mages"] },
  { id: 6, name: "East Tribes", creatures: ["Orcs, Ogres"] },
];

const Settings = ({ users, name, changeReign, changeReady }) => {
  const isFormValid = () => {
    return true;
  };

  const handleSelect = (event) => {
    changeReign(parseInt(event.target.value));
  };

  const handleCheck = (event) => {
    changeReady(event.target.checked);
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
                disabled={name !== user.name || user.ready}
                value={user.reign}
                onChange={handleSelect}
              >
                {reigns.map((reign) => (
                  <option
                    key={reign.id}
                    value={reign.id}
                    title={reign.creatures}
                  >
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
                checked={user.ready === undefined ? false : user.ready}
                onChange={handleCheck}
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
