import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid blue;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    line-height: 100px;
    text-align: center;
    width: 200px; height: 100px;
`;

const ItemText = styled.p`
    font-size: 20px;
    display: inline-block;
    line-height: 100px;
    text-align: center;
`;
                                                        //ItemText = 요리위키 리스트 태그
function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
            <ItemText>{post.content}</ItemText>
        </Wrapper>
    );
}

export default PostListItem;
