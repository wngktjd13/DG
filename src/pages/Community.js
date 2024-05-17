import React from "react";
import styled from "styled-components";
import search from "../assets/search.png"
import vector from "../assets/Vector.png";
import gymImage from '../assets/gym1.jpeg';
import gymImage2 from '../assets/gym2.jpeg';
import gymImage3 from '../assets/gym3.jpeg';
import gymImage4 from '../assets/gym4.jpeg';
import Nav from "./Nav";
import { useNavigate } from 'react-router-dom';

function Community() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* Nav 컴포넌트를 PageContainer 내에서 위치시킴 */}
      <NavContainer>
        <Nav />
      </NavContainer>
      <Container>
        <SearchContainer>
          <Image src={search} alt="search" width={50} height={50}/>
          <InputConatainer type="text" placeholder="내 근처 헬스장을 알아보세요"/>
        </SearchContainer>
        <LocationContainer>
          <Image src={vector} alt="vactor" width={17.59} height={27.34}/>
          <Heading1>중계4동</Heading1>
        </LocationContainer>
        <ImageContainer>
          <GymContainer>
            <Image src={gymImage} alt="gym1" width={300} height={400}/>
            <Heading2>@milliongym</Heading2>
            <Span>운동메이트 구합니다</Span>
          </GymContainer>
          <GymContainer>
            <Image src={gymImage2} alt="gym2" width={300} height={400} onClick={() => navigate('/communitypage')} />
            <Heading2>@billiongym</Heading2>
            <Span>근비대를 위한 등 운동 루틴공유</Span>
          </GymContainer>
          <GymContainer>
            <Image src={gymImage3} alt="gym3" width={300} height={400}/>
            <Heading2>@trilliongym</Heading2>
            <Span>파나타 머신 총정리</Span>
          </GymContainer>
          <GymContainer>
            <Image src={gymImage4} alt="gym4" width={300} height={400}/>
            <Heading2>@onegym</Heading2>
            <Span>스쿼트 A부터 Z까지</Span>
          </GymContainer>
        </ImageContainer>
      </Container>
    </PageContainer>
  );
}

export default Community;

const PageContainer = styled.div`
  position: relative; /* 상대적 위치 지정 */
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.81);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 80px;
`;

const NavContainer = styled.div`
  position: absolute; /* 절대 위치 지정 */
  top: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  width: 1550px;
  height: 750px;
  border-radius: 20px;
  margin-top: 50px;
`;

const SearchContainer = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.3);
  color: #828282;
  margin : 30px 60px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  vertical-align: middle;
`;

const InputConatainer = styled.input`
  background-color: transparent;
  font-size: 20px;
  border-style: none;
  font-family: "Inter";
  font-weight: bold;
  width: 100%;
  margin: 0 15px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;

const LocationContainer = styled.div`
  margin : 30px 60px;
  display: flex;
  vertical-align: middle;
`;

const Heading1 = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Inter";
  padding-left: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;

`;

const GymContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right : 45px;
  font-family: "Inter";
`;

const Image = styled.img`
  width: ${props => props.width}px; // props로부터 width 값을 받아서 적용
  height: ${props => props.height}px; // props로부터 height 값을 받아서 적용
  border-radius: 20px;
  cursor: pointer;
`;

const Heading2 = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Inter";
  margin-top: 10px;
`;

const Span = styled.div`
  font-size: 20px;
  color: #828282;
  font-family: "Inter";
  font-weight: bold;
  margin-top: 10px;
`;


