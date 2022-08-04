import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: calc(100vh - 60px);
  background-color: lightgray;
  display: flex;

  padding: 0 20% 0 20%;

  @media (max-width: 1250px) {
    padding: 0 10% 0 10%;
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0 0 0 0;
  }
`;

export const TagsContainer = styled.aside`
  height: 500px;
  width: 30%;
  background-color: #FFFFFF;
  margin-top: 73px;
  border-radius: 15px;
  box-shadow: -6px 6px 17px -7px rgba(0,0,0,0.57);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  margin-top: 50px;
  padding: 2% 0 2% 2%;
  width: 70%;
  min-height: calc(100vh - 110px);
`

export const InputContainer = styled.div`
  width: 100%;
  height: 210px;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.29);

`

export const InputSendWrapper= styled.div`
  width: 100%;
  height: 55px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: 650px) {
    justify-content: center;
  }
`

export const CircleWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const UserMenuCircle = styled.div`
  background-color: orange;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #FFFFFF;
    font-size: 1.5rem;
  }
`

export const QuestionsContainer = styled.div`
  margin: 40px 0 0 0;
  width: 100%;
  height: fit-content;
  min-height: 160px;
  border-radius: 15px;
  padding: 10px;
  background-color: #FFFFFF;
`

export const QuestionCard = styled.div`
  display: flex;
  background-color: #FFFFFF;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 10px;
`

export const CardInfoWrapper = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20px;
  margin-bottom: 15px;

  p {
    font-size: 13px;
  }
`

export const QuestionContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    color: #3465eb;
  }
`
