import P from 'prop-types';

import * as Styled from './styles';

const BoxImage = ({ url, titleImg }) => {
  return (
    <Styled.BoxDiv>
      <Styled.Img src={url} alt={titleImg} />
    </Styled.BoxDiv>
  );
};

BoxImage.propTypes = {
  url: P.string,
  titleImg: P.string,
};

export default BoxImage;
