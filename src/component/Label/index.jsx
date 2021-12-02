import P from 'prop-types';
import * as Styled from './styled.js';

export const Label = ({ data, text }) => {
  const fontSize = data.type === 'checkbox' ? '16px' : '18px';

  return (
    <Styled.Label fontSize={fontSize}>
      {text}
      {data.label.textLink ? (
        <Styled.Link href={data.label.link}>{data.label.textLink}</Styled.Link>
      ) : (
        ''
      )}
    </Styled.Label>
  );
};

Label.propTypes = {
  data: P.shape({
    id: P.string.isRequired,
    placeholder: P.string.isRequired,
    type: P.string.isRequired,
    name: P.string.isRequired,
    label: P.shape({
      text: P.string.isRequired,
      textLink: P.string,
      link: P.string,
    }),
  }),
  text: P.string.isRequired,
};
