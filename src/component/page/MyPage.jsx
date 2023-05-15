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

function ChoiceList(){
    return <article>
        <div>
            <ul>
            </ul>
        </div>
    </article>
}

function LoginPage(props) {
    const navigate = useNavigate();
    
    const { ingredient } = props;

    return (
        <Wrapper>
            <Container>
                <ChoiceList>{ingredient.content}</ChoiceList>

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
