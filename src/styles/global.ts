import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

  body{
    overflow: hidden;
  }

  input,button{
    background: none;
    border: none;
    color: #000;
  }

  button{
    cursor: pointer;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;

  }
`
