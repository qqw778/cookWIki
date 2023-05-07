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

function ListImg(props) {
    return <img src="public/image/1.jpg"/>              // 이미지 파일 경로
}

const ItemText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
                                                        //ItemText = 요리위키 리스트 태그
function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <ListImg></ListImg>
            <ItemText>{post.title}</ItemText>
        </Wrapper>
    );
}

export default PostListItem;
