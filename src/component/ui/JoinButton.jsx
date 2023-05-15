import React from "react";
import styled from "styled-components";

const JStyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 0px;
    cursor: pointer;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0);
`;

function JoinButton(props) {
    const { title, onClick } = props;

    return <JStyledButton onClick={onClick}>{title || "button"}</JStyledButton>;
}

export default JoinButton;
