import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: black;
  border: 2px solid black;

  ${props =>
    props.primary &&
    css`
      background: black;
      color: white;
    `};
`;

export default Button;
