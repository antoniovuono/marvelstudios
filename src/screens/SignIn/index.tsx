import React, {  useState } from 'react';

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
import { Alert, Platform } from 'react-native';

export function SignIn(){
const { signInWithGoogle, signInWithApple } =  useAuth();

async function handleSignInWithGoogle() {
    try {
      return await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível se conectar a conta Google');
   
    }
}

async function handleSignInWithApple() {
    try {
      return await signInWithApple();

    } catch (error) {
      console.log(error);
    }
}


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
          onPress={handleSignInWithGoogle}
        />


         {
         Platform.OS === 'ios' &&
        <SignInSocialButton
          title="Entrar com Apple"
          svg={Apple}
          onPress={handleSignInWithApple}
        />
         }

    </Footer>
  </Container>
  );
}