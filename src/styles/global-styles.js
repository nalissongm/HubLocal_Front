// eslint-disable-next-line
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url('../../public/fonts/Poppins-Bold.ttf') format('ttf'),
         url('../../public/fonts/Poppins-Regular.ttf') format('ttf'),
         url('../../public/fonts/Poppins-Medium.ttf') format('ttf'),
         url('../../public/fonts/Poppins-SemiBold.ttf') format('ttf'),
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }

  html,body{
    height: 100%;
  }
`;
