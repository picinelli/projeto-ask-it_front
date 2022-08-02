import { Button, TextField } from "@mui/material";

import * as S from "./style";
import Logo from "../../assets/images/logo.png"

export default function SignUp() {
  return (
    <S.Container>
      <S.InfoWrapper>
        <h1>Não sabe como centralizar uma div?</h1>
        <h1>Deu DELETE sem WHERE?</h1>
        <h2>
          Venha para o <span>Ask It!</span>
        </h2>
      </S.InfoWrapper>
      <S.InteractionWrapper>
        <S.FormWrapper>
          <img src={Logo} alt="logo.png"></img>
          <h1>Faça login!</h1>
          <S.Form>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
            <Button variant="contained">Entrar</Button>
          </S.Form>
          <Button
            variant="text"
            sx={{ marginTop: "8px", fontSize: "11px", fontWeight: "bold" }}
          >
            Não possui uma conta? Registre-se!
          </Button>
        </S.FormWrapper>
      </S.InteractionWrapper>
    </S.Container>
  );
}
