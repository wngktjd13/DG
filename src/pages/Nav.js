import '../App.css';
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { userState } from '../atom/userstate';
import { useRecoilState } from 'recoil';

function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const onLoginClick = () => {
    if (user.isLoggined) {
      setUser({ email: '', isLoggined: false }); // 사용자 상태 초기화
      navigate('/'); // 홈 페이지로 이동
    } else {
      navigate('/login');
    }
  }
  

  return (
    <Navigate>
      <LeftNav>
        <DGItem>DG</DGItem>
         <NavItem onClick={() => navigate('/')}>Home</NavItem>
        <NavItem onClick={() => navigate('/community')}>Community</NavItem>
      </LeftNav>
      <RightNav>
        <NavItem onClick={onLoginClick}>{(user.isLoggined) ? "Logout" : "Login"}</NavItem>
        <NavItem onClick={() => navigate('/user')}>MY</NavItem>
      </RightNav>
    </Navigate>
  );
}

export default Nav;

const Navigate = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.81);
  padding: 10px 20px;
`;

const LeftNav = styled.div`
  display: flex;
`;

const RightNav = styled.div`
  display: flex;
`;

const NavItem = styled.button`
  all: unset;
  margin: 30px 50px;
  font-size : 24px;
  font-family: "M plus 1p";
  font-weight: bold;
  cursor: pointer;
  text-decoration: none; /* 하이퍼링크 텍스트 장식 제거 */
  color: inherit; /* 부모 요소로부터 상속된 색상 사용 */
  transition: color 0.3s; /* 색상 변화에 대한 전환 효과 추가 */

  &:hover {
    color: #DF5452; /* 호버 상태에서 텍스트 색상 변경 */
  }
`;

const DGItem = styled(NavItem)`
  color: #DF5452; 
  font-family: "Notable";
  font-weight: bold; 
`;


