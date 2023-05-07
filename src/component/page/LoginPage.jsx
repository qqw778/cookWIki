import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../ui/BackButton";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function LoginBtn(){
    return <article>
        <form onSubmit={event=>{
            event.preventDefault();
        }}>
            <input type="text" name="LogId" placeholder="아이디"></input>
            <input type="text" name="LogPw" placeholder="비밀번호"></input>
            <input type="submit" value="로그인"></input>
            <input type="button" value="회원가입" onclick="location.href='JoinPage.jsx'"></input>
        </form>
    </article>
}

function LoginPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <LoginBtn></LoginBtn>

                <BackButton 
                    as="input" 
                    type="button"
                    title="뒤로가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default LoginPage;
