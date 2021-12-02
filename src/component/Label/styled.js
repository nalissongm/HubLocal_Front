import styled from 'styled-components';

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.48);
  margin-left: 4px;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  color: #0384fc;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
`;
