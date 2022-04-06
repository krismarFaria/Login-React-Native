import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from './../components/styles';

const { brand, darkLight, primary } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={StyledContainer}>
      <StatusBar style="dark" />
      <View style={InnerContainer}>
        {/* <View style={PageLogo} resizeMode="cover" source={require('./../assets/images/logo.png')} /> */}
        <Text style={PageTitle}>RapitMatch</Text>
        <Text style={SubTitle}>Account Login</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={StyledFormArea}>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="ejemplo@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <View style={MsgBox}></View>
              <TouchableOpacity style={StyledButton(false)} onPress={handleSubmit}>
                <Text style={ButtonText}>Login</Text>
              </TouchableOpacity>
              <View style={Line} />
              <TouchableOpacity style={StyledButton(true)} onPress={handleSubmit}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '30%',
                    alignItems: 'center',
                  }}
                >
                  <Text>
                    <Fontisto name="google" color={primary} size={25} />
                  </Text>
                  <Text style={ButtonText} google={true}>
                    Sign in with Google
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={ExtraView}>
                <Text style={ExtraText}>Don't have an account alredy?</Text>
                <Text style={TextLink}>
                  <Text style={TextLinkContent}>Signup</Text>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Octicons name={icon} size={25} color={brand} />
      </View>
      <Text style={StyledInputLabel}>{label}</Text>
      <TextInput style={StyledTextInput} {...props} />
      {isPassword && (
        <View style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={25} color={darkLight} />
        </View>
      )}
    </View>
  );
};

export default Login;
