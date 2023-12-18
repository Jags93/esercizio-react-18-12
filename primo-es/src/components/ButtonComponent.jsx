import { Component } from "react";

const ButtonComponent = (props) => (
  <>
    <button className="bg-info" type={props.type}>
      {props.content}
    </button>
  </>
);

export default ButtonComponent;
