import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import { IconContext } from "react-icons";
import { BiUpvote } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { GrFormView } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

export default function Question() {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    description: "",
  });
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState({
    description: "",
    user: {username: ""},
    votes: 1,
    answers: [],
    views: 0,
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchAllInfo() {
      await postViewQuestion();
      await getQuestionInfo();
      await getUserInfo();
      await getAnswers();
    }
    fetchAllInfo();
  }, []);

  return (
    <S.Container>
      <S.MainContainer>
        <S.BackIconWrapper
          onClick={() => {
            navigate("/");
          }}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <TbArrowBackUp />
          </IconContext.Provider>
        </S.BackIconWrapper>
        <S.QuestionContainer>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote
                    onClick={() => {
                      upvoteQuestion();
                    }}
                  />
                  <p>{question.votes.length}</p>
                </S.InfoWrapper>
                <S.InfoWrapper>
                  <AiOutlineComment />
                  <p>{question.answers.length}</p>
                </S.InfoWrapper>
                <S.InfoWrapper>
                  <GrFormView />
                  <p>{question.views}</p>
                </S.InfoWrapper>
              </S.CardInfoWrapper>
            </IconContext.Provider>
            <S.QuestionContentWrapper>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                style={{ width: "100%", resize: "none", color: "#3465eb", border: "none", fontSize: "12px" }}
                disabled={true}
                value={question.description}
                onChange={(e) => {
                  setInputData({ ...inputData, description: e.target.value });
                }}
              />
            </S.QuestionContentWrapper>
            <S.QuestionUserWrapper>
              <BsPersonFill />
              <p>{question.user.username}</p>
            </S.QuestionUserWrapper>
            <S.CreationDate>{dayjs(question.createdAt).format("DD/MM/YYYY")}</S.CreationDate>
          </S.QuestionCard>
        </S.QuestionContainer>
        <h1>Respostas</h1>

        {answers.length < 1 ? (
          <></>
        ) : (
          <S.AnswersContainer>
            {answers.map((e) => {
              return (
                <S.AnswerCard key={e.id}>
                  <S.AnswerContentWrapper>
                    <h2>{e.description}</h2>
                  </S.AnswerContentWrapper>
                  <S.AnswerUserWrapper>
                    <BsPersonFill />
                    <p>{e.username}</p>
                  </S.AnswerUserWrapper>
                </S.AnswerCard>
              );
            })}
          </S.AnswersContainer>
        )}

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

  async function handleSubmit(e) {
    e.preventDefault();
    const questionId = Number(id);
    try {
      await axios.post(
        `${data.API}/answer`,
        {
          description: inputData.description,
          username: data.user.username,
          questionId: questionId,
        },
        config
      );
      await getAnswers();
      await getQuestionInfo();
    } catch (error) {
      window.alert(error.response.data);
      console.log(error);
    }
  }

  async function upvoteQuestion() {
    if (!token) return navigate("/signin");
    try {
      const body = { questionId: id, username: data.user.username };
      await axios.post(`${data.API}/question/vote`, body, config);
      await getQuestionInfo();
    } catch (error) {
      navigate("/signin");
      alert("Nao foi possivel conectar ao servidor");
      console.log(error);
    }
  }

  async function getQuestionInfo() {
    try {
      const requestQuestionInfo = await axios.get(`${data.API}/question/${id}`);
      setQuestion(requestQuestionInfo.data);
    } catch (error) {
      alert("Nao foi possivel buscar a pergunta");
      console.log(error);
    }
  }

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

  async function getAnswers() {
    try {
      const requestAnswers = await axios.get(
        `${data.API}/answers/${id}`,
        config
      );
      setAnswers(requestAnswers.data);
    } catch (error) {
      window.alert(error.response.data);
      console.log(error);
    }
  }

  async function postViewQuestion() {
    try {
      const requestAnswers = await axios.post(
        `${data.API}/question/view/${id}`
      );
    } catch (error) {
      window.alert(error.response.data);
      console.log(error);
    }
  }
}
