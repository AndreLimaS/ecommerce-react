import styled from "styled-components";

export const ThumbImgs = styled.div`
  display: flex;

  img {
    width: 60px !important;
    padding: 5px 0 0 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.2);
  }
`;
