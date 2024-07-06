import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../Api/bootApi";
import { useNavigate } from "react-router-dom";

const Cource = ({ cource, update }) => {
  const deleteCource = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id);
      },
      (error) => {
        toast.error("something went wrong, Cource is not deleted");
      }
    );
  };

  const navigate = useNavigate();

  //update cource
  const handleUpdateCourse = (cource) => {
    navigate("/update-cources", { state: cource });
  };

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="fw-bold ">{cource.title}</CardSubtitle>
          <CardText className="me-3">{cource.description}</CardText>
          <Container className="text-center">
            <Button
              color="danger me-3"
              onClick={() => {
                deleteCource(cource.id);
              }}
            >
              Delete
            </Button>
            <Button color="warning" onClick={() => handleUpdateCourse(cource)}>
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cource;
