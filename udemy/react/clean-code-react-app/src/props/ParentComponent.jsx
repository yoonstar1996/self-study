import React, { Component } from "react";

function ParentComponent(props) {
  const { 관련없는_props, 관련있는_props, ...나머지_props } = props;
  return (
    <ChildOrHOCComponent 관련있는_props={관련있는_props} {...나머지_props} />
  );
}

export default ParentComponent;
