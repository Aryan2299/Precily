import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import AddComponent from "./AddComponent";
import EditComponent from "./EditComponet";
import "./App.css";

//compnonent skeleton
const Component = (props) => {
  //to edit text in component
  const onClickUpdate = (number) => {
    axios
      .get("http://localhost:8080/edit")
      .then((resp) => {
        console.log(resp.data);

        ReactDOM.hydrate(
          <EditComponent
            heading={resp.data[number - 1].heading}
            body={resp.data[number - 1].body}
            number={number}
            _id={resp.data[number - 1]._id}
            count={resp.data[number - 1].count}
          />,
          document.getElementById("component-" + String(number))
        );
      })
      .catch((err) => console.log(err));
  };

  //to add new text to component
  const onClickAdd = (number) => {
    axios
      .get("http://localhost:8080/edit")
      .then((resp) => {
        console.log(resp.data);

        ReactDOM.hydrate(
          <div id="add-component">
            <AddComponent
              number={number}
              _id={resp.data[number - 1]._id}
              count={resp.data[number - 1].count}
            />
            <button
              className="cancel-btn"
              type="button"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
          </div>,
          document.getElementById("component-" + String(number))
        );
      })
      .catch((err) => console.log(err));
  };

  //to fetch the number of times add and update data
  const onClickCount = (number) => {
    axios
      .post("http://localhost:8080/count", { number: number })
      .then((resp) => alert("count: " + resp.data[0].count))
      .catch((err) => console.log(err));
  };

  return (
    <div
      id={"component-" + props.number}
      className="component-div"
      onClick={(event) => (event.target.style.resize = "both")}
      style={{ height: 350 }}
    >
      <h1>{props.heading}</h1>
      <h5>{props.body}</h5>

      <div className="options-div">
        <button
          className="options-div-btn"
          onClick={() => onClickUpdate(props.number)}
        >
          Update
        </button>
        <button
          className="options-div-btn"
          onClick={() => onClickAdd(props.number)}
        >
          Add
        </button>
        <button
          className="options-div-btn"
          onClick={() => onClickCount(props.number)}
        >
          Count
        </button>
      </div>
      <p className="click-to-resize">Click corner to resize</p>
    </div>
  );
};

export default Component;
