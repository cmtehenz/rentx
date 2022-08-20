import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){
  const navigation = useNavigation<any>();

  const theme = useTheme();

  function handleConfirmRental(){
    navigation.navigate('SchedulingDetails');
  }

  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={false} >
              <DateValue></DateValue>
            </DateValueContainer>        
          </DateInfo>

          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={true} >
              <DateValue>18/06/2022</DateValue>
            </DateValueContainer> 
          </DateInfo>

        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button 
          title="Confirmar"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}