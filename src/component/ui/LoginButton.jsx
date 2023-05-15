import React from "react";
import styled from "styled-components";

const LStyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 0px;
    cursor: pointer;
    display: inline-block;
    background-color: rgba(255, 255, 35, 1);
`;

function LoginButton(props) {
    const { title, onClick } = props;

    return <LStyledButton onClick={onClick}>{title || "button"}</LStyledButton>;
}

export default LoginButton;
