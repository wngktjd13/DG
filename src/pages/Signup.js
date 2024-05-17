import React, { useState } from "react";
import styled from "styled-components";
import homeImage from '../assets/home.png';
import Nav from "./Nav";
import { createUserWithEmailAndPassword } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log(credential.user);
        toast.success("성공적으로 회원가입이 완료되었습니다.");
        // 회원가입 성공 후 로그인 페이지로 이동
        navigate("/login");
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          toast.error("이미 사용 중인 이메일입니다.");
          break;
        case 'auth/invalid-email':
          toast.error("잘못된 이메일 형식입니다.");
          break;
        case 'auth/weak-password':
          toast.error("비밀번호는 적어도 6글자 이상 입력해야 합니다.");
          break;
        case 'auth/network-request-failed':
          toast.error("네트워크 연결에 실패했습니다.");
          break;
        default:
          console.log(error.code)
          toast.error("알 수 없는 오류가 발생했습니다.");
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
        <TextContainer>
          <Heading1>두근득근</Heading1>
          <LoginContainer>
            <Heading2>Create Account</Heading2>
            <Login2Container>
              <Span>Username</Span>
              <InputConatainer type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Span>Password</Span>
              <InputConatainer type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <Span>Confirm Password</Span>
              <InputConatainer type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              <ButtonContainer>
                <Button onClick={handleSignup}>Create your account</Button>
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

export default Signup;


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
  margin: 50px 0 30px 0;
`;

const Login2Container = styled.div`
  margin: 0 30px;
`;

const Span =styled.div`
  font-size: 20px;
  font-weight: bold;
  color : gba(255, 255, 255, 0.81);
  margin-top: 20px;
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

const Button = styled.button`
  background-color: #ffffff;
  width : 320px;
  height: 40px;
  color : #000000;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
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


