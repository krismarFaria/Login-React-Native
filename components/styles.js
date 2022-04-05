import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#FFF",
    secondary:"#e5e7eb",
    tertiary:"#1f2937",
    darkLight:"#9ca3af",
    brand:"#fb8500",
    green:"#10b981",
    red:"#ef4444"
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;



export const StyledContainer = styled.View `
flex: 1;
padding: 25px;
padding-top: ${StatusBarHeight + 10}px;
background-color: ${primary};
`

export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`

padding: 25px;
padding-top: 10px;
justify-content: center;
`;



export const PageLogo = styled.Image`
width: 170px;
height: 120px;
`;

export const Avatar = styled.Image`
width: 160px;
height: 160px;
margin-bottom: 10px;
margin-top: 10px;
`

export const WelcomeImage = styled.Image`
height: 50%;
min-height: 56%;
`

export const PageTitle = styled.Text`
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${brand};
padding: 10px;

${(props) => props.welcome && `
margin-bottom: 5px;

`}

`

export const SubTitle = styled.Text`
font-size: 18px;
margin-bottom: 20px;
letter-spacing: 1px;
font-weight: bold;
color: ${tertiary};

${(props) => props.welcome && `
color: ${darkLight};
font-size: 15px
font-weight: normal;
bottom: 15px;
`}
`

export const StyledFormArea = styled.View`
width: 90%;
`

export const StyledTextInput = styled.TextInput`
background-color: ${secondary};
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 50px;
font-size: 15px;
height: 47px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
color: ${tertiary};
font-size: 13px;
text-align: left;
left: 15px;
`

export const LeftIcon = styled.View`
left: 15px;
top: 30px;
position: absolute;
z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
right: 15px;
top: 30px;
position: absolute;
z-index: 1;
`


export const StyledButton = styled.TouchableOpacity`
padding: 15px;
background-color: ${brand};
justify-content: center;
align-items: center;
border-radius: 85px;
margin-vertical: 5px;
height: 50px;

${(props) => props.google == true && `
background-color: ${red};
flex-direction: row;
justify-content: center;
` }

`

export const ButtonText = styled.Text`
color: ${primary};
font-size: 16px;

${(props) => props.google == true && `
padding-left: 25px;


` }

`

export const MsgBox = styled.Text`
text-align: center;
font-size: 13px;
`
export const Line = styled.View`
height: 1px;
width: 100%;
background-color: #dee2e6;
margin-vertical: 10px;
`

export const ExtraView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
padding: 10px;
`

export const ExtraText = styled.Text`
justify-content: center;
align-content: center;
color: ${tertiary};
font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`

export const TextLinkContent = styled.Text`
color: ${brand};
font-size: 15px;
padding-left: 6px;
font-weight: bold;
`