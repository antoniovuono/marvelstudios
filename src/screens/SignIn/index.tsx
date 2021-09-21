import React, {  useContext  } from 'react';

import Logotipo from '../../assets/images/logotipo.svg';
import Google from '../../assets/icons/google.svg';
import Apple from '../../assets/icons/apple.svg';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
 Container,
 Header,
 Title,
 SignInTitle,
 Footer,
} from './styles';


export function SignIn(){
const { user } =  useAuth();

console.log(user);


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
        <SignInSocialButton
          title="Entrar com Google"
          svg={Google}
          onPress={() => {}}
        />

        <SignInSocialButton
          title="Entrar com Apple"
          svg={Apple}
          onPress={() => {}}
        />
    </Footer>
  </Container>
  );
}