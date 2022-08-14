import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import DataContext from "../../providers/DataContext";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import * as S from "./style";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${data.API}/signup`, inputData);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Ocorreu algum erro!");
    }
  }

  return (
    <S.Container>
      <S.InfoWrapper></S.InfoWrapper>
      <S.InteractionWrapper>
        <S.FormWrapper>
          <img src={Logo} alt="logo.png"></img>
          <h1>Registre-se!</h1>
          <S.Form>
            <TextField
              id="outlined-basic"
              label="Nome de Usuário"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.username}
              onChange={(e) => {
                setInputData({ ...inputData, username: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.email}
              onChange={(e) => {
                setInputData({ ...inputData, email: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.password}
              onChange={(e) => {
                setInputData({ ...inputData, password: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirme sua senha"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.passwordConfirmation}
              onChange={(e) => {
                setInputData({
                  ...inputData,
                  passwordConfirmation: e.target.value,
                });
              }}
            />
            <Button onClick={handleSubmit} variant="contained">
              {loading ? (
                <ThreeDots color="#00BFFF" height={25} width={25} />
              ) : (
                "Registrar"
              )}
            </Button>
          </S.Form>
          <Button
            variant="text"
            sx={{ marginTop: "8px", fontSize: "11px", fontWeight: "bold" }}
            onClick={() => navigate("/signin")}
          >
            Já possui uma conta? Faça login!
          </Button>
        </S.FormWrapper>
      </S.InteractionWrapper>
    </S.Container>
  );
}
