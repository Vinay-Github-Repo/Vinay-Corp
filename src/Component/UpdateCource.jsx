import React, { Fragment , useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Label } from "reactstrap";
import base_url from "../Api/bootApi";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateCource = () => {


  const formGroupStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.2rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ccc',
  };

  // Accessing the state passed from the previous component using the useLocation hook
  const location = useLocation();
  const course = location.state;

  // Setting initial state for form data
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    description: ''
  });

  useEffect(()=>{
    if(course){
      setFormData({
        userId:course.id || '',
        title:course.title || '',
        description:course.description || ''
      })
    }
  },[course]);

  const handleChange = (e)=>{
    const {name,value}= e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    // Perform the update operation here
    updateCourseToServer(formData);
    nevigate("/view-cources");
    console.log('Updated course data:', formData);
  };

  const nevigate = useNavigate();

  const updateCourseToServer = (formData)=>{
    console.log(formData);
      axios.put(`${base_url}/cources/${formData.userId}`, formData).then(
        (response)=>{
          console.log(response.data);
          console.log("success");
          toast.success("Course has updated",{
            position:"bottom-right",
          });
        },
        (error)=>{
          console.log(error);
          console.log("error");
          toast.error("Something went wrong", {
            position: "bottom-right",
          });
        }
      );
  };


  return (
    <div>
      <Fragment>
        <h1 className="text-center my-3">Update Cource details</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup style={formGroupStyle}>
            <Label for="userId" style={labelStyle} >Cource Id</Label>
            <input
              type="text"
              placeholder="Enter here"
              name="userId "
              id="userId"
              value={formData.userId}
              onChange={handleChange}
              style={inputStyle}
            />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="title" style={labelStyle} >Cource Title</Label>
            <input
              type="text"
              placeholder="Enter here"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
            />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="description" style={labelStyle} >description</Label>
            <input
              id="description"
              placeholder="enter description"
              type="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{ ...inputStyle, height: '100px', width: '100%' }}
            />
          </FormGroup>

          <Container>
            <Button color="success me-4" type="submit">Update Cources</Button>
            <Button color="warning ms-3" type="reset">Back</Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
};

export default UpdateCource;
