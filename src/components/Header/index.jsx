import { useLocation } from "react-router-dom";
import * as S from "./style";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  const location = useLocation();
  if (location.pathname !== "/signup" && location.pathname !== "/signin") {
    return (
      <>
      <S.Container>
        <S.HeaderWrapper>
          <img src={Logo} alt="logo.png" />
          <S.TitleWrapper>
          <h1>Perguntas</h1>
          </S.TitleWrapper>
          <S.CircleWrapper>
            <S.UserMenuCircle>
              <p>A</p>
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
