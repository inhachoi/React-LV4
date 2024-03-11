import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <StLoginBox>
      <h1>로그인 하기</h1>

      <h2>아이디</h2>
      <StInput type="text" />

      <h2>비밀번호</h2>
      <StInput type="password" />

      <br />
      <StBtn>로그인</StBtn>
      <StBtn
        onClick={() => {
          navigate("/join");
        }}
      >
        회원가입
      </StBtn>
    </StLoginBox>
  );
};

const StLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const StInput = styled.input`
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
  color: white;
  height: 40px;
`;
const StBtn = styled.button`
  margin-bottom: 20px;
  background-color: rgb(254, 83, 31);
  border: none;
  border-radius: 10px;
  color: white;
  height: 40px;
`;

export default Login;
