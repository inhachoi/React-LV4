import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import api from "../axios/api";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    // 해당 입력 필드의 'id'와 'value'속성을 추출해서 변수로 사용
    const { id, value } = e.target; 

    setValues({
      ...values,
      [id]: value, // 해당 인풋의 id와 value값
    });
  };

  const onSubmitHandler = async (id, password) => {
    try {
      const response = await api.post(`/login`, {
        id: id,
        password: password
      });
      if (response.status === 201) {
        // 로그인 성공 시
        const token = response.data.token;
        console.log('로그인 성공');
        console.log('토큰:', token);
        // 토큰을 로컬 스토리지나 컨텍스트 등에 저장할 수 있습니다.
        navigate("/"); // 로그인 후 리다이렉트할 페이지로 이동
      }
    } catch (error) {
      if (error.response) {
        // 서버가 응답한 상태 코드가 4xx 또는 5xx 인 경우
        if (error.response.status === 401) {
          console.log('존재하지 않는 유저이거나 비밀번호가 일치하지 않습니다.');
        } else {
          console.log('서버 에러:', error.response.data.message);
        }
      } else if (error.request) {
        // 요청이 전송되었지만 응답을 받지 못한 경우
        console.log('서버 응답 없음');
      } else {
        // 요청을 설정하는 중에 문제가 발생한 경우
        console.log('요청 설정 오류');
      }
    }
  };

  return (
    <StLoginBox>
      <h1>로그인 하기</h1>

      <form onSubmit={(e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        onSubmitHandler(values.id, values.password);
      }}>
        <h2>아이디</h2>
        <StInput
          type="text"
          id="id"
          value={values.id}
          onChange={handleChange}
        />

        <h2>비밀번호</h2>
        <StInput
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />

        <br />
        <StBtn type="submit">로그인</StBtn>
      </form>

      <StBtn
        onClick={() => {
          navigate("/join");
        }}
      >
        회원가입하기
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
  width: 100%;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
`;
const StBtn = styled.button`
  height: 40px;
  margin-bottom: 20px;
  color: white;
  background-color: rgb(254, 83, 31);
  border: none;
  border-radius: 10px;
`;

export default Login;
