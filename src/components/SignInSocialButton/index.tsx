import React from 'react';
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { useAuth } from '../../hooks/auth';
import { Load } from '../Load';

import {
 Button,
 ImageContainer,
 Text
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    svg: React.FC<SvgProps>
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: Props){
const { isLoggIn } = useAuth();

return (
  <Button {...rest}> 

      <ImageContainer>
          <Svg />
      </ImageContainer>

    { isLoggIn === true ? <Load /> : 
      <Text>
          {title}
      </Text>
    }

  </Button>
  );
}