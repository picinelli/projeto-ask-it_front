import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: calc(100vh - 60px);
  background-color: #dff3ff;
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
  position: relative;
  margin-top: 50px;
  padding: 2% 0 2% 2%;
  width: 85%;
  min-height: calc(100vh - 110px);

  h1 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    padding: 0 0 0 0;
    width: 90%;
  }
`;

export const BackIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
  cursor: pointer;

  @media (max-width: 600px) {
    top: -20px
  }
`;

export const QuestionContainer = styled.div`
  margin: 20px 0 30px 0;
  width: 100%;
  height: fit-content;
  min-height: 160px;
  border-radius: 15px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.29);
`;

export const QuestionCard = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  min-height: 160px;
  border-bottom: 1px solid lightgray;
  padding: 2px 10px 35px 10px;
  position: relative;
`;

export const DeleteIconWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 15px 0 15px;
  justify-content: end;
`

export const CardInfoWrapper = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
`;

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
`;

export const QuestionContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  word-break: break-all;
`;

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
`;

export const CreationDate = styled.p`
  position: absolute;
  color: gray;
  font-size: 0.65rem;
  left: 1rem;
  bottom: 0.9rem;
`

export const AnswersContainer = styled.div`
  margin: 20px 0 30px 0;
  width: 100%;
  height: fit-content;
  min-height: 160px;
  border-radius: 15px;
  padding: 1px 10px 1px 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.29);
`;

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
`;

export const CardAnswerInfoWrapper = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
`;

export const AnswerContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  word-break: break-all;

  h2 {
    color: #3465eb;
    font-size: 16px;
  }
`;

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


`;

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

export const ModalContainer = styled.div`
  width: 597px;
  height: 262px;
  background: #2367a6;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 338px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CancelButton = styled.button`
  width: 134px;
  height: 37px;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  border: 0;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1877f2;
  }
`;

export const DeleteButton = styled.button`
  width: 134px;
  height: 37px;
  background: #1877f2;
  border-radius: 5px;
  margin-left: 10px;
  border: 0;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
`;