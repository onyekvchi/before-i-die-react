import React, { Component } from "react";
import {
  Toggle,
  ToggleIcon,
  ToggleIconWrap,
  ToggleLabel
} from "./Toggle.style";

const ToggleLeft = ({ active, label, onClick }) => {
  return (
    <Toggle left onClick={onClick}>
      <ToggleIconWrap active={active}>
        <ToggleIcon active={active} />
      </ToggleIconWrap>
      <ToggleLabel>{active ? "Close" : label}</ToggleLabel>
    </Toggle>
  );
};

export default ToggleLeft;
