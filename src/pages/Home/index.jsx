import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { IconContext } from "react-icons";
import { BiUpvote } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

export default function Home() {
  const { data, setData } = useContext(DataContext);
  const [questions, setQuestions] = useState({
    info: [],
    amount: 0,
  });
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
    getQuestions();
  }, []);

  return (
    <S.Container>
      <S.MainContainer>
        <S.InputContainer>
          <form>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="Escreva sua pergunta..."
              style={{ width: "100%", resize: "none", border: "0" }}
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
                Criar Pergunta
              </Button>
            </S.InputSendWrapper>
          </form>
        </S.InputContainer>
        <S.PaginationContainer>
          <Pagination
            count={
              questions.amount ? Math.ceil(questions.amount._count / 10) : 0
            }
            color="primary"
            onClick={(e) => getQuestions(Number(e.target.textContent))}
          />
        </S.PaginationContainer>

        {questions.info.length > 0 ? (
          <S.QuestionsContainer>
            {questions.info.map((e) => {
              return (
                <S.QuestionCard
                  key={e.id + e.description}
                  onClick={() => {
                    navigate(`/question/${e.id}`);
                  }}
                >
                  <IconContext.Provider value={{ size: "24px" }}>
                    <S.CardInfoWrapper>
                      <S.InfoWrapper>
                        <BiUpvote />
                        <p>{e.votes.length}</p>
                      </S.InfoWrapper>
                      <S.InfoWrapper>
                        <AiOutlineComment />
                        <p>{e.answers.length}</p>
                      </S.InfoWrapper>
                      <S.InfoWrapper>
                        <GrFormView />
                        <p>{e.views}</p>
                      </S.InfoWrapper>
                    </S.CardInfoWrapper>
                  </IconContext.Provider>
                  <S.QuestionContentWrapper>
                    <h2>
                      {e.description.length > 250
                        ? e.description.slice(0, 250) + "..."
                        : e.description}
                    </h2>
                  </S.QuestionContentWrapper>
                  <S.QuestionUserWrapper>
                    <BsPersonFill />
                    <p>{e.user.username}</p>
                  </S.QuestionUserWrapper>
                  <S.CreationDate>
                    {dayjs(e.createdAt).format("DD/MM/YYYY")}
                  </S.CreationDate>
                </S.QuestionCard>
              );
            })}
          </S.QuestionsContainer>
        ) : (
          <></>
        )}
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

  async function getQuestions(page = 1) {
    if (page === 0) return;
    try {
      const requestQuestions = await axios.get(
        `${data.API}/questions/${page}`,
        config
      );
      setQuestions({
        info: requestQuestions.data.questions,
        amount: requestQuestions.data.amount,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `${data.API}/question`,
        {
          description: inputData.description,
          userId: data.user.id,
        },
        config
      );
      setInputData({description: ""})
      await getQuestions();
    } catch (error) {
      setInputData({description: ""})
      window.alert(error.response.data);
      console.log(error);
    }
  }
}
