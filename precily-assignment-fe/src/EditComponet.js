import React from "react";
import axios from "axios";
import "./App.css";

//edit component view
const EditComponent = (props) => {
  const [componentHeading, setComponentHeading] = React.useState(props.heading);
  const [componentBody, setComponentBody] = React.useState(props.body);

  //keep track of changes in heading
  const updateHeading = (e) => {
    setComponentHeading(e);

    return componentHeading;
  };

  //keep track of changes in body
  const updateBody = (e) => {
    setComponentBody(e);
    return componentBody;
  };

  const onClick = () => {
    //validation - no empty fields
    if (componentHeading == "" || componentBody == "") {
      alert("Please fill all the fields");
      return 0;
    }

    //post data to server
    axios
      .post("http://localhost:8080/", {
        heading: componentHeading,
        body: componentBody,
        number: props.number,
        _id: props._id,
        count: props.count,
      })
      .then(() => console.log("Updated"))
      .catch((err) => console.log(err));
  };

  return (
    <div id="edit-component">
      <input
        type="text"
        className="edit-component-input"
        value={componentHeading}
        autoFocus
        required
        onChange={(e) => {
          updateHeading(e.target.value);
        }}
      />
      <input
        type="text"
        className="edit-component-input"
        value={componentBody}
        required
        onChange={(e) => {
          updateBody(e.target.value);
        }}
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

export default EditComponent;
