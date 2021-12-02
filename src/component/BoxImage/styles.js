import styled from 'styled-components';

export const BoxDiv = styled.div.attrs({
  className: 'box-image',
})`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0384fc;
  @media (max-width: 1024px) {
    padding: 50px 0;
  }
  @media (max-width: 724px) {
    justify-content: center;
    align-items: top;
    width: 100%;
    min-height: 163px;
    position: absolute;
    top: 0px;
    overflow: hidden;
  }
`;

export const Img = styled.img`
  width: 80%;
  /* @media (max-width: 720px) {
    padding-top: ;
  } */
`;
