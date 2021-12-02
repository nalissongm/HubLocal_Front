import P from 'prop-types';

import * as Styled from './styles';

export const TextsLinks = ({ children, link }) => {
  return (
    <Styled.P>
      {children.text ? children.text : ''}
      <Styled.Link href={link}>{children.textLink}</Styled.Link>
    </Styled.P>
  );
};

TextsLinks.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
