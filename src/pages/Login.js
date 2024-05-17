import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeImage from '../assets/home.png';
import Nav from "./Nav";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import { useRecoilState } from "recoil";
import { userState } from "../atom/userstate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");        
  const [user, setUser] = useRecoilState(userState);          

  const handleInputEmail = (e) => {                
    setEmail(e.target.value);                      
  };

  const handleInputPassword = (e) => {    
    setPassword(e.target.value);             
  };

  // login 상태인 경우, login 페이지로 접근하면 user으로 redirect
  useEffect(() => {
    if (user.isLoggined) {
      navigate('/');
    } 
  }, [navigate, user.isLoggined]);

  const handleLogin = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(      
        auth, 
        email,      
        password        
      ); 
      setEmail(""); 
      setPassword("");   
      setUser({ email: curUserInfo.user.email, isLoggined: true });
      navigate("/");
      toast.success("로그인에 성공하였습니다.");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("존재하지 않는 사용자입니다.");
          break;
        case "auth/invalid-email":
          toast.error("잘못된 이메일 형식입니다.");
          break;
        case "auth/wrong-password":
          toast.error("비밀번호가 일치하지 않습니다.");
          break;
        case "auth/network-request-failed":
          toast.error("네트워크 연결에 실패 하였습니다.");
          break;
        default:
          console.log(error);
          toast.error("로그인에 실패하였습니다.");
          break;
      }
    }
  };



  return (
    <PageContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Container>
        {/* 이미지와 텍스트 */}
        <TextContainer>
          <Heading1>두근득근</Heading1>
          <LoginContainer>
            <Heading2>Login</Heading2>
            <Login2Container>
              <Span>Username</Span>
              <InputConatainer type="text" placeholder="Email" value={email} onChange={handleInputEmail}/>
              <Span>Password</Span>
              <InputConatainer type="password" placeholder="Password" value={password} onChange={handleInputPassword}/>
              <ButtonContainer>
                <Button1 onClick={handleLogin}>Log in</Button1>
                <Button2>Kakao</Button2>
              </ButtonContainer>
            </Login2Container>
          </LoginContainer>
        </TextContainer>
        <ImageContainer>
          <Image src={homeImage} alt="home" />
        </ImageContainer>
      </Container>
    </PageContainer>
  );
}

export default Login;


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
  padding-left: 100px;
  margin-top: -100px;
  background-color: rgba(12, 12, 12, 0.87);
  color: white;
  font-family: "Inter";
`;

const Heading1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color : #df5452;
`;

const LoginContainer = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 550px;
  border-radius: 20px;
`;

const Heading2 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color : gba(255, 255, 255, 0.81);
  text-align: center;
  margin: 80px 0 50px 0;
`;

const Login2Container = styled.div`
  margin: 0 30px;
`;

const Span =styled.div`
  font-size: 20px;
  font-weight: bold;
  color : gba(255, 255, 255, 0.81);
  margin-top: 30px;
`;

const InputConatainer = styled.input`
  background-color : rgba(217, 217, 217, 0.3);
  width: 320px;
  height: 40px;
  margin: 10px 0;
  padding-left: 10px;
  border-style: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.81); 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button1 = styled.button`
  background-color: rgba(255, 255, 255, 0.81);
  width : 320px;
  height: 40px;
  color : #000000;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  border-style: none;
  cursor: pointer;
`;

const Button2 = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  width : 320px;
  height: 40px;
  color : #000000;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.81);
  margin: 10px 0 ;
  border-style: none;
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


