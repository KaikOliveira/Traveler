import React from 'react';

import {
  Wrapper, Container, Background, Content, Button,
} from './styles';
import { Input } from '../../components/Input';
import { CityCard } from '../../components/CityComponents/CityCard';

export const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOnChange = (e: any) => {
    const { name } = e.target;
    if (name === 'email') {
      setEmail(e.target.value);
    }
    if (name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <Wrapper>
      <Background />
      <Container>
        <Content>
          <h1>Fazer login</h1>
          <Input placeholder="E-mail" name="email" value={email} onChange={(e) => handleOnChange(e)} />
          <Input placeholder="Senha" name="password" value={password} onChange={(e) => handleOnChange(e)} />

          <Button>Acessar plataforma</Button>
        </Content>
        <CityCard />
      </Container>

    </Wrapper>
  );
};
