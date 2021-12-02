import styled, { css } from 'styled-components';

export const Section = styled.section.attrs((props) => ({
  className: props.sectionName,
}))`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 720px;
  }
  @media (min-width: 1920px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  @media (min-height: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
`;

export const Content = styled.div.attrs({
  className: 'content',
})`
  display: flex;
  flex-direction: row-reverse;
  max-width: 1920px;
  height: 100vh;
  max-height: 720px !important;
  @media (min-width: 1920px) {
    background-color: #f9fbfd;
  }
  @media (max-width: 1024px) {
    background-color: #f9fbfd;
    width: 90%;
    height: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  }
  @media (max-width: 724px) {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    margin-bottom: 50px;
  }
  @media (min-height: 720px) {
    background-color: #f9fbfd;
  }
`;

export const WrapperInp = styled.div`
  ${(props) =>
    props.type === 'checkbox'
      ? () => css`
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-end;
          align-items: center;
        `
      : () => css`
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        `}
`;
