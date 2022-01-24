import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-transform: uppercase;
  }
  
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }
  
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  
  /* A elements that don't have a class get default styles */
  a {
    text-decoration: none;
    color: white;
  }
  
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
  }
  
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  /* background of the scrollbar except button or resizer */
  *::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }
  
  *::-webkit-scrollbar-track {
    background-color: #fff;
  }
  
  /* scrollbar itself */
  *::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }
  
  /* set button(top and bottom of the scrollbar) */
  *::-webkit-scrollbar-button {
    display: none;
  }


`;

export default GlobalStyles;
