import styled from 'styled-components';

const PokeStyled = styled.li`
  width: 38vw;
  height: 6vh;
  margin: 2vh 0;
  padding: 0 1vw;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${props => props.theme.colors.secondary};
  list-style-type: none;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 5px;
  border: 2px #b3b3b3 solid;
`;

export default PokeStyled;
