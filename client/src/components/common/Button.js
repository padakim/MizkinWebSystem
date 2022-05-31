import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  padding: 11px 24px;
  background-color: ${palette.primaryColor[0]};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  margin-bottom: 25px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  color: white;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
