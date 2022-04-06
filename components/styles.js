import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#FFF',
  secondary: '#e5e7eb',
  tertiary: '#1f2937',
  darkLight: '#9ca3af',
  brand: '#fb8500',
  green: '#10b981',
  red: '#ef4444',
};

export const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',

  padding: 25,
  paddingTop: StatusBarHeight + 10,
  backgroundColor: primary,
};

export const InnerContainer = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  alignItems: 'center',
};

export const WelcomeContainer = {
  padding: 25,
  paddingTop: 10,
  justifyContent: 'center',
};

export const PageLogo = {
  width: 170,
  height: 120,
  borderRadius: 30,
};

export const Avatar = {
  width: 160,
  height: 160,
  marginBottom: 10,
  marginTop: 10,
};

export const WelcomeImage = {
  height: 50,
  minHeight: 56,
};

export const PageTitle = {
  fontSize: 30,
  textAlign: 'center',
  fontWeight: 'bold',
  color: brand,
  padding: 10,
};

export const SubTitle = {
  fontSize: 18,
  marginBottom: 20,
  letterSpacing: 1,
  fontWeight: 'bold',
  color: tertiary,
};

export const StyledFormArea = {
  width: '90%',
};

export const StyledTextInput = {
  backgroundColor: `${secondary}`,
  padding: 15,
  paddingLeft: 55,
  paddingRight: 55,
  borderRadius: 50,
  fontSize: 15,
  height: 47,
  marginVertical: 3,
  marginBottom: 10,
  color: tertiary,
};

export const StyledInputLabel = {
  color: tertiary,
  fontSize: 13,
  textAlign: 'left',
  left: 15,
};
export const LeftIcon = {
  left: 15,
  top: 30,
  position: 'absolute',
  zIndex: 1,
};

export const RightIcon = {
  right: 15,
  top: 30,
  position: 'absolute',
  zIndex: 1,
};

export const StyledButton = (google = false) => {
  return {
    padding: 15,
    backgroundColor: `${!google ? brand : red}`,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 85,
    marginVertical: 5,
    height: 50,
  };
};

export const ButtonText = {
  color: primary,
  fontSize: 16,
};

export const MsgBox = {
  textAlign: 'center',
  fontSize: 13,
};
export const Line = {
  height: 1,
  width: 100,
  backgroundColor: '#dee2e6',
  marginVertical: 10,
};

export const ExtraView = {
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
};

export const ExtraText = {
  justifyContent: 'center',
  alignContent: 'center',
  color: tertiary,
  fontSize: 15,
};

export const TextLink = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const TextLinkContent = {
  color: brand,
  fontSize: 15,
  paddingLeft: 6,
  fontWeight: 'bold',
};
