import P from 'prop-types';
import * as Styled from './styles.js';

export const Input = ({ data: { id, placeholder, type, name }, register }) => {
  const selectInput = () => {
    switch (type) {
      case 'checkbox':
        return (
          <Styled.InputCheckBox
            {...register(name)}
            id={id}
            name={name}
            type={type}
          />
        );
      default:
        return (
          <Styled.Input
            {...register(name)}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        );
    }
  };

  return selectInput();
};

Input.propTypes = {
  register: P.func,
};
