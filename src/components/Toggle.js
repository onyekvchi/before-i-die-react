import React, { Component } from "react";
import {
  Toggle,
  ToggleIcon,
  ToggleIconWrap,
  ToggleLabel
} from "./Toggle.style";

const ToggleLeft = ({ active, label, onClick }) => {
  return (
    <Toggle float="left" onClick={onClick}>
      <ToggleIconWrap active={active}>
        <ToggleIcon active={active} />
      </ToggleIconWrap>
      <ToggleLabel>{active ? "Close" : label}</ToggleLabel>
    </Toggle>
  );
};

const ToggleRight = ({ active, label, onClick }) => {
  return (
    <Toggle float="right" onClick={onClick} style={{ zIndex: "999" }}>
      <ToggleLabel right>{active ? "Close" : label}</ToggleLabel>
      <ToggleIconWrap right active={active}>
        <ToggleIcon right active={active} />
      </ToggleIconWrap>
    </Toggle>
  );
};

export { ToggleLeft, ToggleRight };
