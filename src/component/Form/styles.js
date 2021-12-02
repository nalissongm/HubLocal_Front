import styled from 'styled-components';

export const Content = styled.div.attrs({
  className: 'content-form',
})`
  display: flex;
  width: 50%;
  padding: 10%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 50px 5%;
  }
  @media (max-width: 722px) {
    position: absolute;
    top: 100px;
    width: 90%;
    max-width: 400px;
    padding: 50px 10%;
    align-self: center;
    background-color: #f9fbfd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  }
  /* @media (min-height: 728px) {
    @media (max-width: 722px) {
      position: absolute;
      top: 290px;
      bottom: unset;
    }
  } */
`;

export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
