import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import BoxImage from '../../component/BoxImage';
import image from '../../assets/images/illustration.svg';

import { Form } from '../../component/Form';
import { Input } from '../../component/Input';
import { Label } from '../../component/Label';
import { ButtonForm } from '../../component/ButtonForm';

import * as Styled from './styles';
import { TitleForm } from '../../component/TitleForm';
import { TextsLinks } from '../../component/TextLinks';
import { ErroMessage } from '../../component/ErroMessage';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^((\b[a-zA-Z]{2,40}\b)\s*){2,}$/, {
      message: 'Name must be at least first name and last name',
    })
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required({ message: 'Password is a required field' }),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const inputsData = [
    {
      id: 'fieldName',
      placeholder: 'Type your name...',
      type: 'text',
      name: 'name',
      label: {
        text: 'Name',
      },
    },
    {
      id: 'fieldEmail',
      placeholder: 'Type your email...',
      type: 'email',
      name: 'email',
      label: {
        text: 'Email',
      },
    },
    {
      id: 'fieldPassword',
      placeholder: 'Type your password...',
      type: 'password',
      name: 'password',
      label: {
        text: 'Password',
      },
    },
    {
      id: 'fieldCheckBox',
      placeholder: '',
      type: 'checkbox',
      name: 'rememberMe',
      label: {
        text: 'I agree to the ',
        textLink: 'Terms & Conditions',
        link: '#',
      },
    },
  ];

  return (
    <Styled.Section sectionName="Login">
      <Styled.Content>
        <BoxImage url={image} title="Illustration" />
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <TitleForm>Sing Up</TitleForm>
          {inputsData.map((data) => (
            <Styled.WrapperInp key={data.id} type={data.type}>
              <Label data={data} text={data.label.text} />
              <Input data={data} register={register} />
              {data.type === 'checkbox' ? (
                ''
              ) : (
                <ErroMessage err={errors} type={data.name} />
              )}
            </Styled.WrapperInp>
          ))}
          <ButtonForm>Login</ButtonForm>
          <TextsLinks link="/login">
            {{ text: 'Already have an account? ', textLink: ' Sing in' }}
          </TextsLinks>
        </Form>
      </Styled.Content>
    </Styled.Section>
  );
};
