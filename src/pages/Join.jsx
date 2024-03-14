import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import api from "../axios/api";

const Join = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setValues({
      ...values,
      [id]: value,
    });
  };

  const onSubmitHandler = async (id, password) => {
    try {
      const response = await api.post(`/register`, {
        id: id,
        password: password
      });
      if (response.status === 201) {
        // 회원가입 성공 시
        alert('회원가입 성공');
        // 성공 메시지나 필요한 데이터를 반환할 수도 있습니다.
      }
    } catch (error) {
      if (error.response) {
        // 서버가 응답한 상태 코드가 4xx 또는 5xx 인 경우
        if (error.response.status === 401) {
          alert('이미 존재하는 유저 id입니다.');
        } else {
          console.log('서버 에러:', error.response.data.message);
        }
      } else if (error.request) {
        // 요청이 전송되었지만 응답을 받지 못한 경우
        alert('서버 응답 없음');
      } else {
        // 요청을 설정하는 중에 문제가 발생한 경우
        alert('요청 설정 오류');
      }
    }
  };

  return (
    <StJoinBox>
      <h1>회원가입 하기</h1>

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
        <StBtn type="submit">회원가입</StBtn>
      </form>

      <StBtn
        onClick={() => {
          navigate("/login");
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

export default Join;
