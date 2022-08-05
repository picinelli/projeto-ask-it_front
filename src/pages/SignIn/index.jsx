import { Button, TextField } from "@mui/material";
import * as S from "./style";
import Logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const request = await axios.post(`${data.API}/signin`, inputData);
      const token = request.data.token
      setData({...data, token})
      localStorage.setItem("token", token)
      await getUserInfo() 

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Ocorreu algum erro!");
    }
  }

  async function getUserInfo() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const requestUserInfo = await axios.get(`${data.API}/user/info`, config);
      setData({...data, user: requestUserInfo.data})
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.InfoWrapper></S.InfoWrapper>
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
              value={inputData.email}
              onChange={(e) => {
                setInputData({ ...inputData, email: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.password}
              onChange={(e) => {
                setInputData({ ...inputData, password: e.target.value });
              }}
            />
            <Button onClick={handleSubmit} variant="contained">
              {loading ? (
                <ThreeDots color="#00BFFF" height={25} width={25} />
              ) : (
                "Entrar"
              )}
            </Button>
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
