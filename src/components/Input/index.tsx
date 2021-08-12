/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import {
  useState, InputHTMLAttributes, forwardRef, ForwardRefRenderFunction,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ placeholder, ...rest }, ref) => (
  <Container>
    <input {...rest} ref={ref} />
    <span>{placeholder}</span>
  </Container>
);

export const Input = forwardRef(InputBase);
