import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #2367A6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20% 0 20%;
  position: fixed;
  z-index: 2;

  @media (max-width: 1250px) {
    padding: 0 10% 0 10%;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
  }

  h1 {
    display: flex;
    width: 110px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #FFFFFF;
  }

  @media (max-width: 900px) {
    h1 {
      display: none;
    }
  }
`

export const TitleWrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #FFFFFF;
`

export const CircleWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: end;
`

export const UserMenuCircle = styled.div`
  background-color: orange;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #FFFFFF;
    font-size: 1.5rem;
  }
`

export const Divider = styled.div`
  width: 100vw;
  height: 60px;
`