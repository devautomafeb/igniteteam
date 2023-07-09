import React from 'react';
import { BackIcon, Container, Logo } from './styles';


import logoImg from '../../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <BackIcon color={'#fff'} size={32} />
      <Logo source={logoImg} />
    </Container>
  )
}

export default Header;