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
  gap: 20px;
`;

export const Text = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
`;

export const Tank = styled.div`
  grid-area: tank;
`;

export const Dps = styled.div`
  grid-area: dps;
`;

export const Support = styled.div`
  grid-area: support;
`;

const Role = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TankRole = styled(Role)``;

export const DpsRole = styled(Role)``;

export const SupportRole = styled(Role)``;

const RoleButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #ffffff;
  }
`;

export const TankButton = styled(RoleButton)``;

export const DpsButton = styled(RoleButton)``;

export const SupportButton = styled(RoleButton)``;

export const RoleIcons = styled.div`
  display: grid;
  row-gap: 10px;
  grid-template-areas: "tank dps support";
`;
