import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import LoginButton from "../ui/LoginButton";
import JoinButton from "../ui/JoinButton";
import data from '../../data.json';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Headers = styled.div`
    padding: 16px;
    width: 100%;
`;

const NavVar = styled.nav`
    & > * {
        color: red;
    }
    position: absolute;
    right: 1%;
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

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Headers>
                <MainTitleText>요리위키</MainTitleText>
                <NavVar>
                    <LoginButton
                        title="로그인"
                        onClick={() => {
                            navigate("/Login");
                        }}
                    />
                    <JoinButton
                        title="회원가입"
                        onClick={() => {
                            navigate("/Join");
                        }}
                    />
                </NavVar>
            </Headers>
            <Container>
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
