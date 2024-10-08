import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 600px;
  margin: 10px auto;
`;

export const TitleContainer = styled.div`
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
`;

export const StartingRank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StartingRankText = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
`;
