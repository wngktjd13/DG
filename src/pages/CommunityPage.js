import React from "react";
import styled from "styled-components";
import gymImage2 from '../assets/gym2.jpeg';
import Nav from "./Nav";

function CommunityPage() {
  return (
    
    <PageContainer>
        <NavContainer>
          <Nav />
        </NavContainer>
        <Container>
        ``<ImageContainer>
              <Image src={gymImage2} alt="gym2" width={570} height={760}/>
          </ImageContainer>
          <TextContainer>
            <PostContainer>
              <HeaderCotainer>
                <Heading1>근비대를 위한 등 운동 루틴 공유</Heading1>
                <PostTime>2024.05.15 (수)</PostTime>
              </HeaderCotainer>
              <Heading2>2enrms / @billiongym</Heading2>
              <ContentContainer>
                <Heading3>LAT PULLDOWN 14-10RESPS / 3SETS</Heading3>
                <Heading3>DB PULLOVER 10REPS / 2SETS</Heading3>
                <Heading3>SINGLE ARM PULLDOWN 15-11REPS / 3SETS</Heading3>
                <Heading3>BARBELL ROW 10REPS / 4SETS</Heading3>
                <Heading3>REVERSE CABLE FLY 30-15REPS / 3SETS</Heading3>
                <Heading3>STRAIGHT ARM PULLDOWN 15-12REPS / 3SETS</Heading3>
              </ContentContainer>
            </PostContainer>
            <CommentContainer>
              <SpanCotainer>
                <SpanUser>[qnsgkf / @billiongym] 오늘 가서 적용해볼게요.</SpanUser>
                <SpanTime>2024.05.15 18:27:34</SpanTime>
              </SpanCotainer>
              <SpanCotainer>
                <SpanUser> [emdtkdqn / @billiongym] 가슴 운동 루틴도 알려주실 수 있나요 ???</SpanUser>
                <SpanTime>2024.05.15 20:32:17</SpanTime>
              </SpanCotainer>
            </CommentContainer>
          </TextContainer>
        </Container>
    </PageContainer>
  );
}

export default CommunityPage;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.81);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
`;

const NavContainer = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  display: flex;
  margin: 100px 0 0 30px;
`;

const Image = styled.img`
  width: ${props => props.width}px; // props로부터 width 값을 받아서 적용
  height: ${props => props.height}px; // props로부터 height 값을 받아서 적용
  border-radius: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 50px;
  width: 950px;
  font-family: "Nanum Gothic";
`;

const PostContainer = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  height: 500px;
  border-radius: 20px;
  font-size: 20px;
  color: #FFFFFF;
  padding: 30px 0 0 40px;
`;

const HeaderCotainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: #FFFFFF;
  font-weight: bold;
  margin-top: 10px;
`;

const Heading1 = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PostTime = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  margin-right: 40px;
`;

const Heading2 = styled.div`
  font-size: 25px;
  margin-top: 15px;
`;

const ContentContainer = styled.div`
  margin: 20px;
`;

const Heading3 = styled.div`
  margin: 10px;
`;

const CommentContainer = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  height: 210px;
  border-radius: 20px;
  margin-top: 50px;
  font-family: "Nanum Gothic";
`;

const SpanCotainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0 0 30px;
  font-size: 20px;
  color: #FFFFFF;
  font-family: "Inter";
  margin-top: 10px;
`;

const SpanUser = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SpanTime = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  margin-right: 40px;
`;
