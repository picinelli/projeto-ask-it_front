import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: relative;
  z-index: 4;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;
  background-color: #FFFFFF;
  border: 0;
  border-radius: 8px;
  -webkit-box-shadow: -4px 8px 8px -3px rgba(0,0,0,0.7); 
  box-shadow: -4px 8px 8px -3px rgba(0,0,0,0.7);
`

export const ClickCapture = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
`
