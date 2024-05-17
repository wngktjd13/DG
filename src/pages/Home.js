import React from "react";
import styled from "styled-components";
import homeImage from '../assets/home.png';
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Container>
        <TextContainer>
          <Heading1>두근득근</Heading1>
          <Heading3>운동을 사랑하는 이들의 모임,</Heading3>
          <Heading3>함께 운동하는 커뮤니티</Heading3>
          <Button onClick={() => navigate('/signup')}>SIGN UP</Button>
        </TextContainer>
        <ImageContainer>
          <Image src={homeImage} alt="home" />
        </ImageContainer>
      </Container>
    </PageContainer>
  );
}

export default Home;

const PageContainer = styled.div`
  position: relative; /* 상대적 위치 지정 */
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.81);
`;

const NavContainer = styled.div`
  position: absolute; /* 절대 위치 지정 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; /* Nav 컴포넌트가 Home 컴포넌트 위에 올라가도록 z-index 설정 */
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 80px;
  margin-top: -350px;
  background-color: rgba(12, 12, 12, 0.87);
  color: white;
`;

const Heading1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color : #df5452;
  font-family: "M plus 1p";
`;

const Heading3 = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color : rgba(255, 255, 255, 0.81);
  font-family: "M plus 1p";
  margin : 0;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.81);
  width : 125px;
  height: 52px;
  border-radius: 8px;
  margin-top: 50px;
  color : #df5452;
  font-family: "Notable";
  font-size: 16px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  flex: none;
  width: 65.7031vw;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



