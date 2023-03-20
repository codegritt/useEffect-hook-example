import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const App = props => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("React");

  //like component didmount, This function can only be executed once
  useEffect(() => {
    console.log("like component did mount");
  }, []);

  //it will executed every state update
  useEffect(() => {
    console.log("Every update");

    return function cleanUp() {
      console.log("clean up");
    };
  });

  //it will be executed when only age state update
  useEffect(() => {
    console.log("only age update");
  }, [age]);

  function handleOnClick() {
    setAge(age + 1);
  }
  function handleOnChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      {console.log("render")}
      <h1>{props.appName}</h1>
      <Hello name={name} />
      <p>Use effects</p>
      <h3>Age : {age}</h3>
      <button onClick={() => handleOnClick()}>Increase Age</button>
      <br />
      <br />
      <input placeholder="enter appName" onChange={handleOnChange} />
    </div>
  );
};

render(<App appName="User Details" />, document.getElementById("root"));

//useEffect means manage the side effects
