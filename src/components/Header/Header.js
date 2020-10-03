import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Rising Reigns</NavbarBrand>
        <NavbarToggler onClick={handleMenuToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/score">Score</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contribute
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  href="https://github.com/sergiogomes/RR-SIG-client"
                  target="_blank"
                >
                  GitHub Client
                </DropdownItem>
                <DropdownItem
                  href="https://github.com/sergiogomes/RR-SIG-server"
                  target="_blank"
                >
                  GitHub Server
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Wiki
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/reigns">Reigns</DropdownItem>
                <DropdownItem href="/maps">Maps</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Login</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
