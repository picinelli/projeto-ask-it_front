import { TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import { IconContext } from "react-icons";
import { BiUpvote } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { AiOutlineComment } from "react-icons/ai";

import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import Tags from "../../components/Tags";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { data, setData } = useContext(DataContext);
  const [inputData, setInputData] = useState({
    description: ""
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function getUserInfo() {
      if (!token) return navigate("/signin");
      try {
        const requestUserInfo = await axios.get(
          `${data.API}/user/info`,
          config
        );
        setData({ ...data, user: requestUserInfo.data });
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo();
  }, [data.API, data, navigate, setData]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${data.API}/question`, {
        description: inputData.description,
        userId: data.user.id,
      }, config);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Tags />
      <S.MainContainer>
        <S.InputContainer>
          <form>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="Escreva sua pergunta"
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
                Criar Pergunta
              </Button>
            </S.InputSendWrapper>
          </form>
        </S.InputContainer>
        <S.QuestionsContainer>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
          <S.QuestionCard>
            <IconContext.Provider value={{ size: "24px" }}>
              <S.CardInfoWrapper>
                <S.InfoWrapper>
                  <BiUpvote />
                  <p>51</p>
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
              <h2>Lorem ips Lorem ipsilum</h2>
            </S.QuestionContentWrapper>
          </S.QuestionCard>
        </S.QuestionsContainer>
      </S.MainContainer>
    </S.Container>
  );
}
