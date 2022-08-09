import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Logo from "../../assets/images/logo.png";
import { useContext } from "react";
import DataContext from "../../providers/DataContext";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useContext(DataContext);
  const [isUserSearching, setIsUserSearching] = useState(false);
  const [searchedQuestions, setSearchedQuestions] = useState([]);

  async function handleInput(e) {
    setIsUserSearching(true);
    try {
      const requestedQuestions = await axios.post(
        `${data.API}/search/questions`,
        {
          description: e.target.value,
        }
      );
      setSearchedQuestions(requestedQuestions.data);
    } catch (error) {
      console.log(error);
    }
  }

  function selecionarQuestao(e2, id) {
    e2.preventDefault();
    setIsUserSearching(false);
    navigate(`/question/${id}`);
    navigate(0)
  }

  if (location.pathname !== "/signup" && location.pathname !== "/signin") {
    return (
      <>
        <S.Container>
          <S.HeaderWrapper>
            <img src={Logo} alt="logo.png" />
            <S.SearchWrapper>
              <DebounceInput
                minLength={3}
                debounceTimeout={300}
                placeholder="Faça sua pergunta..."
                onChange={(e) => handleInput(e)}
              />

              {isUserSearching ? (
                <S.InputSelectionContainer>
                  {searchedQuestions.map((e) => {
                    return (
                      <S.InputSelectionOption
                        key={e.id}
                        onClick={(e2) => selecionarQuestao(e2, e.id)}
                      >
                        <p>{e.description}</p>
                      </S.InputSelectionOption>
                    );
                  })}
                </S.InputSelectionContainer>
              ) : (
                <></>
              )}
            </S.SearchWrapper>
            <S.CircleWrapper>
              <S.UserMenuCircle>
                <p>
                  {data.user.username
                    ? data.user.username[0].toUpperCase()
                    : ""}
                </p>
              </S.UserMenuCircle>
            </S.CircleWrapper>
          </S.HeaderWrapper>
        </S.Container>
        <S.Divider />
      </>
    );
  }

  return <></>;
}
