import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: ${(props) =>
      props.borderError === 'borderError'
        ? '2px solid #f76767;'
        : '2px solid #e3e0e0;'}2px
    solid #e3e0e0;
  padding: 0px 18px;
  font-size: 18px;
  font-weight: 400;
  margin-top: 5px;
  color: rgba(0, 0, 0, 1);
  &:focus {
    outline: none;
    border: 2px solid #0384fc;
  }
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.48);
  }
  &:valid {
    //border: 2px solid #0384fc;
  }
  @media (max-width: 768px) {
    //margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    //margin-bottom: 16px;
  }
`;

export const InputCheckBox = styled.input`
  width: 18px;
  border-radius: 5px;
  border: 2px solid #e3e0e0 !important;
  color: white;
`;
