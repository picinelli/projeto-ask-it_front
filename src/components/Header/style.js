import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #2367a6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20% 0 20%;
  position: fixed;
  z-index: 2;

  @media (max-width: 1500px) {
    padding: 0 12% 0 12%;
  }

  @media (max-width: 1250px) {
    padding: 0 10% 0 10%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
  }

  h1 {
    display: flex;
    width: 110px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    h1 {
      display: none;
    }

    img {
      display: none;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  max-width: 60%;

  input {
    border: 0;
    border-radius: 5px 5px 5px 5px;
    width: 100%;
    height: 80%;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;
export const InputSelectionContainer = styled.div`
  position: absolute;
  padding: 10px;
  border-radius: 5px 5px 5px 5px;
  height: fit-content;
  width: 100%;
  background: #ffffff;
  box-shadow: -5px 5px 20px #b8a9a9;
`;

export const InputSelectionOption = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
  word-break: break-all;

  p {
    color: blue;
    font-size: 12.5px;
  }

  @media (max-width: 1600px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 11px;
    }
  }
`;

export const CircleWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: end;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const UserMenuCircle = styled.div`
  background-color: orange;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

export const Divider = styled.div`
  width: 100vw;
  height: 60px;
`;
