import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavbarText } from "reactstrap";

import Icon from "../../core/Icon";

const Infobar = ({ room }) => {
  return (
    <Navbar color="dark" dark expand="sm">
      <Nav className="mr-auto" navbar>
        <NavbarBrand>{room}</NavbarBrand>
      </Nav>
      <NavbarText>
        <Link to={`/lobby`}>
          <Button>
            <Icon name="x-circle" />
            <span> Leave </span>
          </Button>
        </Link>
      </NavbarText>
    </Navbar>
  );
};

export default Infobar;
