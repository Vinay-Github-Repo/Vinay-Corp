import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-cource"
          action
        >
          Add Cource
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-cources"
          action
        >
          View Cource
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about-us"
          action
        >
          About Us
        </Link>
        
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contact-us"
          action
        >
          Contact us
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menu;
