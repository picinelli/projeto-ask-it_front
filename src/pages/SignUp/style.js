import styled from 'styled-components'
import background from '../../assets/images/background3.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const InfoWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  height: 100vh;
  width: 70%;
  background-color: #55b4d1;
  background-image: url(${background});
  background-size: cover;
  text-align: center;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  h2 {
    color: white;
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    color: #034efc;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

export const InteractionWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #DFF3FF;
  max-width: 100vw;
  width: 100vw;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 50px;

  img {
    margin: 14rem 0 7rem 0;
  }

  h1 {
    font-weight: bold;
    font-size: 1.75rem;
    margin: 0 0 40px 0;
  }

  height: 100vh;
  width: 60%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    padding: 50px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`


