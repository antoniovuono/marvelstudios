import React from 'react';

import Logotipo from '../../assets/images/logotipo.svg';

import {
 Container,
 Header,
 Title,
 SignInTitle,
 Footer,
} from './styles';

export function SignIn(){
return (
  <Container> 
    <Header>

      <Logotipo width={120} height={120}/>
      <Title>
        Confira informações {'\n'} 
        sobre os seus hérois  {'\n'} 
        favoritos
      </Title>

      <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
      </SignInTitle>

    </Header>
    
    <Footer>

    </Footer>
  </Container>
  );
}