import * as S from "./style";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function MenuUser() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  return (
    <>
      <S.MenuWrapper>
        <BiLogOut
          onClick={() => {
            logout();
          }}
          style={{ width: "30px", height: "30px", color: "white" }}
        />
      </S.MenuWrapper>
    </>
  );
}
