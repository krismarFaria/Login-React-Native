import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


import {

  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  WelcomeContainer,
  WelcomeImage,
  Avatar
  


} from './../components/styles';

const Welcome = () => {

  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
   
      

        <WelcomeContainer> 
          <Avatar resizeMode="cover" source={require('./../assets/images/logo.png')} /> 
        <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
        <SubTitle welcome={true}>krismarfaria@gmail.com</SubTitle>       
            <StyledFormArea>
            
              <StyledButton onPress={() => {}}>
                <ButtonText>Logout</ButtonText>
              </StyledButton>
            
           

            </StyledFormArea>  
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};



export default Welcome;
