import P from 'prop-types';
import * as Styled from './styles.js';

export const Form = ({ children, onSubmit }) => {
  return (
    <Styled.Content>
      <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>
    </Styled.Content>
  );
};

Form.propTypes = {
  children: P.node,
  onSubmit: P.func,
};
