import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import AgeSvg from '../../../assets/icons/age.svg';
import WeightSvg from '../../../assets/icons/weight.svg';
import HeightSvg from '../../../assets/icons/height.svg';
import UniverseSvg from '../../../assets/icons/universe.svg';


import {
 Container,
 DetailsList,
 TitleConttent,
 AlterEgo,
 Name,
 CaracteristicsConent,

} from './styles';


export function SpiderMan() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/spider-man_s79dx6.png' }}> 

      <Header />

        <DetailsList>

        <TitleConttent>
            <AlterEgo>  Peter Parker</AlterEgo>
            <Name> Homem {`\n`} Aranha</Name>
            </TitleConttent>


            <CaracteristicsConent>
                <AgeSvg />
                <WeightSvg />
                <HeightSvg />
                <UniverseSvg />
            </CaracteristicsConent>


        </DetailsList>
      </Container>
  </>
  );
}