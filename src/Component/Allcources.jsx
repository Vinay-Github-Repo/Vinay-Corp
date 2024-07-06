import React, { useState, useEffect } from "react";
import Cource from "./Cource";
// import { Button } from "reactstrap";
import base_url from "./../Api/bootApi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcource = () => {
  useEffect(() => {
    document.title="All Cources || Learn Code with Vinay";
  });


  //function to call server
  const getAllCourcesFromServer=()=>{
    axios.get(`${base_url}/cources`).then(
        (response)=>{
            //for success
            // console.log("success");
            // console.log(response);
            console.log(response.data);
            toast.success("Cource has been loaded", {
                position:"bottom-right"
            });
            setCources(response.data);
        },
        (error)=>{
            //for error
            // console.log("error");
            console.log(error);
            toast.error("Something went wrong", {
                position:"bottom-right"
            });
        }
    );
  }
  //calling loading course hook function
  useEffect(()=>{
    getAllCourcesFromServer();
  },[]);


  const [cources, setCources] = useState([]); //hooks


  const updateCource=(id)=>{
    setCources(cources.filter((c)=> c.id != id));
  };

  return (
    <div>
      {/* <Button
        onClick={() => {
          console.log("test");
          setCources([
            ...cources,
            [{ title: "Python Cource", description: "this is demo cource" }],
          ]);
        }}
      >
        Test
      </Button> */}
      <h1>All Cources</h1>
      <p>List of cources are as follows</p>

      {cources.length > 0
        ? cources.map((item) => <Cource key={item.id} cource={item} update ={updateCource} />)
        : "No cources"}
    </div>
  );
};

export default Allcource;
