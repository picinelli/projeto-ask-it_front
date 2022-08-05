import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { IconContext } from "react-icons";
import { BiUpvote } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { AiOutlineComment } from "react-icons/ai";

import * as S from "./style";
import { useContext } from "react";
import DataContext from "../../providers/DataContext";

export default function Home() {
  const { data, setData } = useContext(DataContext);

  return (
    <S.Container>
      <S.TagsContainer></S.TagsContainer>
      <S.MainContainer>
        <S.InputContainer>
          <form>
            <TextField
              id="outlined-multiline-static"
              label="Faça sua pergunta"
              fullWidth
              multiline
              rows={4}
            />
            <S.InputSendWrapper>
              <S.CircleWrapper>
                <S.UserMenuCircle>
                  <span>A</span>
                </S.UserMenuCircle>
                <p>Amanda Cruz</p>
              </S.CircleWrapper>

              <Button sx={{ backgroundColor: "#2367A6" }} variant="contained">
                Criar Pergunta
              </Button>
            </S.InputSendWrapper>
          </form>
        </S.InputContainer>
        {console.log(data)}
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
