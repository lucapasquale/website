import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    height: 100%;
  }
  div[role="group"][tabindex] {
    height: 100%;
  }

  body, button, input, p {
    font-family: Roboto;
    font-size: ${props => props.theme.fontSizes.fs16};
    color: ${props => props.theme.colors.primary};
  }
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.link};
  }
  a:active, a:focus {
    outline: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    color: ${props => props.theme.colors.primary};
  }

  h1 {
    ${props => props.theme.textStyles.h1};
  }
  h2 {
    ${props => props.theme.textStyles.h2};
  }
  h3 {
    ${props => props.theme.textStyles.h3};
  }
  h4 {
    ${props => props.theme.textStyles.h4};
  }
  h5 {
    ${props => props.theme.textStyles.h5};
  }
`
