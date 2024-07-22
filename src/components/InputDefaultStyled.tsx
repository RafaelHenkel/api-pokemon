import styled from 'styled-components';

const InputDefaultStyled = styled.input`
  width: 40vw;
  height: 4vh;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px #b3b3b3 solid;
  font-weight: 600;
  font-size: 0.8rem;
`;

export default InputDefaultStyled;
