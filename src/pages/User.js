import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import userImage from '../assets/user.png';
import user2Image from '../assets/user2.png';

function User() {
  const strings = ["Post", "Followers", "Following", "3", "12", "10"];

  return (
    <PageContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Container>
        <UserContainer>
          <ProfileContainer>
            <ImageContainer>
              <Image src={userImage} alt="user" />
            </ImageContainer>
          <FollowContainer>
                {strings.map((str, index) => (
              <TextContainer key={index}>{str}</TextContainer>
            ))}
          </FollowContainer>
          </ProfileContainer>
          <EditContainer>
          <Button>프로필 편집</Button>
          </EditContainer>
          <IntroductionContainer>
            <Span>2enrms</Span>
            <Span>@milliongym</Span>
            <Span>176 / 71</Span>
            <Span>3대 350. 벌크업 중</Span>
          </IntroductionContainer>
          <Image2Container>
              <Image2 src={user2Image} alt="userimage" />
          </Image2Container>
        </UserContainer>
        <AdvertContainer>
          <Heading1>광고 배너 or 추후 다른 기능으로 구현 예정</Heading1>
        </AdvertContainer>
      </Container>
    </PageContainer>
  );
}

export default User;

const PageContainer = styled.div`
  position: relative; 
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.81);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 80px;
`;

const NavContainer = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  
`;

const UserContainer = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  width: 1550px;
  height: 500px;
  border-radius: 20px;
  margin-top: 50px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction : row;
  position: relative; 
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative; 
  display: flex;
  z-index: 1; 
  margin: 50px 0 0 50px;
`;

const Image = styled.img`
  width: 200px; 
  height: 200px; 
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  /* 줄 바꿈을 허용하여 3x2 레이아웃을 만듭니다 */
  flex-direction : row;
  color: rgba(255, 255, 255, 0.81);
  font-family: "Nanum Gothic";
  font-size: 30px;
  font-weight: bold;
  width: 500px;
  height: 200px;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;  /* 각 박스의 너비를 설정 (3개의 박스를 가로로 배치하기 위해 1/3로 설정) */
  height: 50%;    /* 각 박스의 높이를 설정 (2개의 박스를 세로로 배치하기 위해 1/2로 설정) */
  box-sizing: border-box; 
`;

const EditContainer = styled.div`
  margin: 10px 0 0 90px;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.81);
  width : 125px;
  height: 52px;
  border-style: none;
  border-radius: 8px;
  color : #df5452;
  font-family: "Nanum Gothic";
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const IntroductionContainer = styled.div`
  margin: 20px 0 0 50px;
`;

const Span = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.81);
  margin-top: 10px;
 
`;

const Image2Container = styled.div`
`;

const Image2 = styled.img`
  position: absolute;
  width: 600px;
  height: 360px;
  top: 220px;
  left: 950px;
  border-radius: 20px;
`;

const AdvertContainer = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  width: 1550px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
`;

const Heading1 = styled.div`
  text-align: center;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.81);
`;


