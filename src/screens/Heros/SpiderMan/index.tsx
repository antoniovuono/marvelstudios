import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import AgeIcon from '../../../assets/icons/age.svg';
import WeightIcon from '../../../assets/icons/weight.svg';
import HeightIcon from '../../../assets/icons/height.svg';
import UniverseIcon from '../../../assets/icons/universe.svg';

import StrengthBars from '../../../assets/images/strengthbars.svg';
import IntelligenceBars from '../../../assets/images/intelligencebars.svg';
import AgilityBars from '../../../assets/images/agilitybars.svg';
import EnduranceBars from '../../../assets/images/endurancebars.svg';
import VelocityBars from '../../../assets/images/velocitybars.svg';

import {
 Container,
 DetailsContent,
 TitleContent,
 AlterEgo,
 Name,
 CaracteristicsContent,
 BiographyContent,
 Description,
 Description2,
 SkillTitle,
 SkillsContent,
 SkillDetails,
 Title,
 ImgView,
 TitleView,

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

     <DetailsContent>

       <TitleContent>
         <AlterEgo>  Peter Parker</AlterEgo>
         <Name> Homem {`\n`} Aranha</Name>
       </TitleContent>

       <CaracteristicsContent>
      
           <AgeIcon   />
           <WeightIcon />
           <HeightIcon />
           <UniverseIcon />

       </CaracteristicsContent>

       <BiographyContent>
         <Description>
         Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos.
         </Description>

         <Description2>
         Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.
         </Description2>
       </BiographyContent>


       <SkillsContent>
          
            <SkillTitle>Habilidades</SkillTitle>
            <SkillDetails>

                <TitleView>
                <Title>Força</Title>
                </TitleView>

                <ImgView>
                <StrengthBars  />
                </ImgView>
            </SkillDetails>

          
            <SkillDetails>

                <TitleView>
                <Title>Inteligência</Title>
                </TitleView>

                <ImgView>
                <IntelligenceBars  />
                </ImgView>
            </SkillDetails>

            <SkillDetails>

                <TitleView>
                <Title>Agilidade</Title>
                </TitleView>

                <ImgView>
                <AgilityBars  />
                </ImgView>
            </SkillDetails>

            <SkillDetails>

                <TitleView>
                <Title>Resistência</Title>
                </TitleView>

                <ImgView>
                <EnduranceBars  />
                </ImgView>
            </SkillDetails>

              <SkillDetails>

                <TitleView>
                <Title>Velocidade</Title>
                </TitleView>

                <ImgView>
                <VelocityBars  />
                </ImgView>
            </SkillDetails>


       </SkillsContent>

     </DetailsContent>

  
  </Container>
  </>
  );
}