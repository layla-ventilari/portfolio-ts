import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: 0;
}
body {
  background: ${(props) => props.theme['base-title']};
  color: ${(props) => props.theme['white']};
  -webkit-font-smoothing: antialiased;
}
`