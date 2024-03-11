import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Join = () => {
  const navigate = useNavigate();

  return (
    <StJoinBox>
      <h1>회원가입 하기</h1>

      <h2>아이디</h2>
      <StInput type="text" />

      <h2>비밀번호</h2>
      <StInput type="password" />

      <br />
      <StBtn>회원가입</StBtn>
      <StBtn
        onClick={() => {
          navigate("/");
        }}
      >
        로그인하기
      </StBtn>
    </StJoinBox>
  );
};

const StJoinBox = styled.div`
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

export default Join;
