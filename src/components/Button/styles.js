import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: #7b7777;
  background-color: #ffffff;
  text-align: center;
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '75px'};
  max-width: ${({ width }) => width || '75px'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
  margin: ${({ margin }) => margin || '0 0 0 0'};

  &:hover {
    background-color: #434343;
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;