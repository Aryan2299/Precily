import React, { createRef, useState } from "react";
import axios from "axios";
import "./App.css";

//Add new text to component
const AddComponent = (props) => {
  //keep track of changes (input tag)
  const [componentHeading, setComponentHeading] = React.useState("");
  const [componentBody, setComponentBody] = React.useState("");

  const updateHeading = (e) => {
    setComponentHeading(e);

    return componentHeading;
  };

  const updateBody = (e) => {
    setComponentBody(e);
    return componentBody;
  };

  //post new data to server
  const onClick = () => {
    if (componentHeading == "" || componentBody == "") {
      alert("Please fill all the fields");
      return 0;
    }
    axios
      .post("http://localhost:8080/", {
        heading: componentHeading,
        body: componentBody,
        number: props.number,
        _id: props._id,
        count: props.count,
      })
      .then(() => console.log("Added"))
      .catch((err) => console.log(err));
  };

  return (
    <div id="add-component">
      <input
        type="text"
        autoFocus
        required
        className="add-component-input"
        onChange={(e) => updateHeading(e.target.value)}
      />
      <input
        type="text"
        required
        className="add-component-input"
        onChange={(e) => updateBody(e.target.value)}
      />

      <button
        className="done-btn"
        type="button"
        onClick={() => {
          onClick();
          window.location.reload();
        }}
      >
        Done
      </button>
      <p className="click-to-resize">Click corner to resize</p>
    </div>
  );
};

export default AddComponent;
