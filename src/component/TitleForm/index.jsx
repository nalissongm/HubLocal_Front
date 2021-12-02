import P from 'prop-types';

import * as Styled from './styles.js';

export const TitleForm = ({ children }) => {
  return <Styled.H1>{children}</Styled.H1>;
};

TitleForm.propTypes = {
  children: P.node,
};
