import React from "react";
import { StyledToggle, ToggleIcon, ToggleIconWrap } from "./Toggle.styled";

const Toggle = ({ active, label, onClick }) => {
  return (
    <StyledToggle onClick={onClick} style={{ zIndex: "999" }}>
      <ToggleIconWrap right active={active}>
        <ToggleIcon right active={active} />
      </ToggleIconWrap>
    </StyledToggle>
  );
};

export default Toggle;
