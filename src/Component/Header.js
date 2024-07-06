import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";


function Header({ name, title }) {

  const nevigate = useNavigate();

  const handleLoginClick = () => {
    nevigate("/login"); // Navigate to the login route using navigate
  };

  return (
    <div>
      {/* <Button onClick={handleLoginClick}>Login</Button> */}
      <Card className="my-1 bg-warning">    
        <CardBody>
          <h1 className="text-center my-2">Welcome to Vinay Corporation</h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
