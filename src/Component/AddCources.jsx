import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Label } from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootApi";
import { RouterProvider, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCources = () => {
  useEffect(() => {
    document.title = "Add Cource || Learn Code with Vinay";
  }, []);

  const [cource, setCource] = useState({});
  //form handler
  const handleForm = (e) => {
    console.log(cource);
    postDataToServer(cource);
    e.preventDefault();
    nevigate("/view-cources");
  };

  const nevigate = useNavigate();

  //createing function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/course`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course has been added", {
          position: "bottom-right",
        });
        setCource({id:"", title:"", description:""});
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong", {
          position: "bottom-right",
        });
      }
    );
  };

  const formGroupStyle = {
    marginBottom: "1rem",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
  };

  return (
    <Fragment>
      <ToastContainer />
      <h1 className="text-center my-3">Fill Cource details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup style={formGroupStyle}>
          <Label for="userId" style={labelStyle}>
            Cource Id
          </Label>
          <input
            type="text"
            placeholder="Enter here"
            name="userId "
            id="userId"
            onChange={(e) => {
              setCource({ ...cource, id: e.target.value });
            }}
            style={inputStyle}
          />
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <Label for="title" style={labelStyle}>
            Cource Title
          </Label>
          <input
            type="text"
            placeholder="Enter here"
            name="title"
            id="title"
            onChange={(e) => {
              setCource({ ...cource, title: e.target.value });
            }}
            style={inputStyle}
          />
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <Label for="description" style={labelStyle}>
            description
          </Label>
          <input
            id="description"
            placeholder="enter description"
            type="textarea"
            name="description"
            onChange={(e) => {
              setCource({ ...cource, description: e.target.value });
            }}
            style={{ ...inputStyle, height: '70px', width: '100%' }}
          />
        </FormGroup>

        <Container>
          <Button type="submit" color="success me-4">
            Add Cources
          </Button>
          <Button
            color="warning ms-3"
            type="reset"
            onClick={() => {
              setCource({id:"", title:"", description:""});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCources;
