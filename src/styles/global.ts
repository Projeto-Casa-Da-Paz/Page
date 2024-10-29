'use client';

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F6432E;
    --red: #e52e4d;
    --blue: #0B5ED7;
    --green: #03bb85;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #363f5f;

    --white: #fff;
    --black: #212529;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.75%;
    }
  }

  body, input, textarea, button {
    font-family: Tahoma, Verdana, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`