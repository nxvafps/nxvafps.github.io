import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 600px;
  margin: 10px auto;
`;

export const TitleContainer = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  width: 60%;
  margin: auto;
  gap: 20px;
`;

export const RankInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
