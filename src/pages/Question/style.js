import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: calc(100vh - 60px);
  background-color: #DFF3FF;
  display: flex;
  justify-content: center;

  padding: 0 20% 0 20%;

  @media (max-width: 1500px) {
    padding: 0 12% 0 12%;
  }

  @media (max-width: 1250px) {
    padding: 0 10% 0 10%;
  }

  @media (max-width: 1150px) {
    padding: 0 0 0 0;
  }
`;

export const MainContainer = styled.div`
  margin-top: 50px;
  padding: 2% 0 2% 2%;
  width: 70%;
  min-height: calc(100vh - 110px);

  h1 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const QuestionContainer = styled.div`
  margin: 20px 0 30px 0;
  width: 100%;
  height: fit-content;
  min-height: 160px;
  border-radius: 15px;
  padding: 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.29);
`

export const QuestionCard = styled.div`
  display: flex;
  background-color: #FFFFFF;
  width: 100%;
  min-height: 160px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 10px 10px 35px 10px;
  position: relative;
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
  word-break: break-all;

  h2 {
    color: #3465eb;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 630px) {
    h2 {
      font-size: 11px;
    }
  }
`

export const QuestionUserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  bottom: 0.9rem;

  p {
    margin-left: 5px;
  }


  @media (max-width: 530px) {
    display: none;
  }
`

export const AnswersContainer = styled.div`
  margin: 20px 0 30px 0;
  width: 100%;
  height: fit-content;
  min-height: 160px;
  border-radius: 15px;
  padding: 1px 10px 1px 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.29);
`

export const AnswerCard = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #d0dfff;
  width: 100%;
  min-height: 160px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 10px 10px 35px 10px;
  margin: 20px 0 20px 0;

  position: relative;
`

export const CardAnswerInfoWrapper = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
`

export const AnswerContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  word-break: break-all;

  h2 {
    color: #3465eb;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 630px) {
    h2 {
      font-size: 11px;
    }
  }
`

export const AnswerUserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  bottom: 0.9rem;

  p {
    margin-left: 5px;
  }


  @media (max-width: 530px) {
    font-size: 11px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.29);
  margin-bottom: 100px;
`;

export const InputSendWrapper = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

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
`;

export const UserMenuCircle = styled.div`
  background-color: orange;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;
