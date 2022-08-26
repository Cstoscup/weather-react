import React from "react";
import "./datetime.css";

export default function DateTime(props) {
  return <h5 className="DateTime mt-2">{props.date}</h5>;
}
