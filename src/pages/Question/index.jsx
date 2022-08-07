import { TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { IconContext } from "react-icons";
import { BiUpvote } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Question() {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    description: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.Container>
      <S.MainContainer>
        <S.QuestionContainer>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>27</p>
                </S.InfoWrapper>
                <S.InfoWrapper>
                  <AiOutlineComment />
                  <p>27</p>
                </S.InfoWrapper>
                <S.InfoWrapper>
                  <GrFormView />
                  <p>27</p>
                </S.InfoWrapper>
              </S.CardInfoWrapper>
            </IconContext.Provider>
            <S.QuestionContentWrapper>
              <h2>Uma pergunta muito bem elaborada</h2>
            </S.QuestionContentWrapper>
            <S.QuestionUserWrapper>
              <BsPersonFill />
              <p>Pedro</p>
            </S.QuestionUserWrapper>
          </S.QuestionCard>
        </S.QuestionContainer>
        <h1>Respostas</h1>

        <S.AnswersContainer>
          <S.AnswerCard>
            <S.AnswerContentWrapper>
              <h2>Resposta elaboradissima</h2>
            </S.AnswerContentWrapper>
            <S.AnswerUserWrapper>
              <BsPersonFill />
              <p>Joao</p>
            </S.AnswerUserWrapper>
          </S.AnswerCard>
          <S.AnswerCard>
            <S.AnswerContentWrapper>
              <h2>Resposta elaboradissima</h2>
            </S.AnswerContentWrapper>
            <S.AnswerUserWrapper>
              <BsPersonFill />
              <p>Joao</p>
            </S.AnswerUserWrapper>
          </S.AnswerCard>
          <S.AnswerCard>
            <S.AnswerContentWrapper>
              <h2>Resposta elaboraResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimaResposta elaboradissimadissima</h2>
            </S.AnswerContentWrapper>
            <S.AnswerUserWrapper>
              <BsPersonFill />
              <p>Joao</p>
            </S.AnswerUserWrapper>
          </S.AnswerCard>
          <S.AnswerCard>
            <S.AnswerContentWrapper>
              <h2>Resposta elaboradissima</h2>
            </S.AnswerContentWrapper>
            <S.AnswerUserWrapper>
              <BsPersonFill />
              <p>Joao</p>
            </S.AnswerUserWrapper>
          </S.AnswerCard>
        </S.AnswersContainer>

        <S.InputContainer>
          <form>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="Escreva sua resposta"
              style={{ width: "100%", resize: "none" }}
              value={inputData.description}
              onChange={(e) => {
                setInputData({ ...inputData, description: e.target.value });
              }}
            />
            <S.InputSendWrapper>
              <S.CircleWrapper>
                <S.UserMenuCircle>
                  <span>
                    {data.user.username
                      ? data.user.username[0].toUpperCase()
                      : ""}
                  </span>
                </S.UserMenuCircle>
                <p>{data.user.username ? data.user.username : ""}</p>
              </S.CircleWrapper>

              <Button
                onClick={handleSubmit}
                sx={{ backgroundColor: "#2367A6" }}
                variant="contained"
              >
                Enviar Resposta
              </Button>
            </S.InputSendWrapper>
          </form>
        </S.InputContainer>
      </S.MainContainer>
    </S.Container>
  );

  async function getUserInfo() {
    if (!token) return navigate("/signin");
    try {
      const requestUserInfo = await axios.get(`${data.API}/user/info`, config);
      setData({ ...data, user: requestUserInfo.data });
    } catch (error) {
      navigate("/signin");
      alert("Nao foi possivel conectar ao servidor");
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const questionId = Number(id)
    try {
      await axios.post(
        `${data.API}/answer`,
        {
          description: inputData.description,
          username: data.user.username,
          questionId
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  }
  }

