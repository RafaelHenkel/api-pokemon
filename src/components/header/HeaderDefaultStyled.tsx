import styled from 'styled-components';

const HeaderDefaultStyled = styled.header`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 2.5em;
    line-height: 1.1;
    color: ${props => props.theme.colors.secondary};
  }
`;

export default HeaderDefaultStyled;
