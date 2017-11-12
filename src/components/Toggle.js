import React, { Component } from "react";
import {
  Toggle,
  ToggleIcon,
  ToggleIconWrap,
  ToggleLabel
} from "./Toggle.style";

export const ToggleRight = ({ active, label, onClick }) => {
  return (
    <Toggle onClick={onClick} style={{ zIndex: "999" }}>
      <ToggleIconWrap right active={active}>
        <ToggleIcon right active={active} />
      </ToggleIconWrap>
    </Toggle>
  );
};
