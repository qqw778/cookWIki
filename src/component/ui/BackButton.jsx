import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 0px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 90%;
    background-color: rgba(255, 255, 255, 0);
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
