//import P from 'prop-types';
import * as Styled from './styles.js';

// eslint-disable-next-line
export const ErroMessage = ({ err, type }) => {
  const messageError = () => {
    switch (type) {
      case 'name':
        // eslint-disable-next-line
        const messageN =
          err.name?.message.charAt(0).toUpperCase() +
          err.name?.message.slice(1);
        return <Styled.P>{!!messageN && messageN}</Styled.P>;
      // eslint-disable-next-line
      case 'email':
        // eslint-disable-next-line
        const messageE =
          err.email?.message.charAt(0).toUpperCase() +
          err.email?.message.slice(1);
        return <Styled.P>{!!messageE && messageE}</Styled.P>;
      // eslint-disable-next-line
      case 'password':
        // eslint-disable-next-line
        const messageP =
          err.password?.message.charAt(0).toUpperCase() +
          err.password?.message.slice(1);
        return <Styled.P>{!!messageP && messageP}</Styled.P>;
      // eslint-disable-next-line
      default:
        return null;
    }
  };
  console.log(err);
  return messageError();
};

// ErroMessage.propTypes = {
//   children: P.node,
// };
