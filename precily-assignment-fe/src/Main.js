import React, { useState } from "react";
import Component from "./Component";

const axios = require("axios").default;

const Main = (props) => {
  //keep track of schema as state
  const [component, setComponent] = React.useState({
    component1: {
      heading: "",
      body: "",
      number: 1,
      _id: "",
      count: null,
    },
    component2: {
      heading: "",
      body: "",
      number: 2,
      _id: "",
      count: null,
    },
    component3: {
      heading: "",
      body: "",
      number: 3,
      _id: "",
      count: null,
    },
  });

  //fetch data and populate page on load
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/edit")
      .then((resp) => {
        setComponent({
          component1: {
            heading: resp.data[0].heading,
            body: resp.data[0].body,
          },
          component2: {
            heading: resp.data[1].heading,
            body: resp.data[1].body,
          },
          component3: {
            heading: resp.data[2].heading,
            body: resp.data[2].body,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [component]);

  return (
    <div id="components">
      <div id="first-row-components">
        <Component
          number={1}
          heading={component.component1.heading}
          body={component.component1.body}
        />

        <Component
          number={2}
          heading={component.component2.heading}
          body={component.component2.body}
        />
      </div>

      <Component
        number={3}
        heading={component.component3.heading}
        body={component.component3.body}
      />
    </div>
  );
};

export default Main;
