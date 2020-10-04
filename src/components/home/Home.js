import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import Icon from "../../components/core/Icon";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <Link to={`/lobby`}>
          <Button>
            <Icon name="controller" />
            <span> Play </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
