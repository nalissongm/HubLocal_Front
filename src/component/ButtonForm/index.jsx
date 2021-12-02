import P from 'prop-types';

import * as Styled from './styles.js';

export const ButtonForm = ({ children }) => {
  return <Styled.Button>{children}</Styled.Button>;
};

ButtonForm.propTypes = {
  children: P.node,
};
