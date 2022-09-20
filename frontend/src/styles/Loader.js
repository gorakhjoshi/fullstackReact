import styled, { keyframes } from "styled-components";

const loaderSpin = keyframes`
{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

export const Loader = styled.div`
  border: 16px solid ${(props) => props.border}; /* Light grey */
  border-top: 16px solid ${(props) => props.borderTop}; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${loaderSpin} 2s linear infinite;
`;
