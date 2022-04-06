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

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  padding: '25px',
  paddingTop: `${StatusBarHeight + 10}px`,
  backgroundColor: `${primary}`,
};

export const InnerContainer = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  alignItems: 'center',
};

export const WelcomeContainer = {
  padding: '25px',
  paddingTop: '10px',
  justifyContent: 'center',
};

export const PageLogo = {
  width: '170px',
  height: '120px',
  borderRadius: '30px',
};

export const Avatar = {
  width: '160px',
  height: '160px',
  marginBottom: '10px',
  marginTop: '10px',
};

export const WelcomeImage = {
  height: '50%',
  minHeight: '56%',
};

export const PageTitle = {
  fontSize: '30px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: `${brand}`,
  padding: '10px',
};

export const SubTitle = {
  fontSize: '18px',
  marginBottom: '20px',
  letterSpacing: '1px',
  fontWeight: 'bold',
  color: `${tertiary}`,
};

export const StyledFormArea = {
  width: '90%',
};

export const StyledTextInput = {
  backgroundColor: `${secondary}`,
  padding: '15px',
  paddingLeft: '55px',
  paddingRight: '55px',
  borderRadius: '50px',
  fontSize: '15px',
  height: '47px',
  marginVertical: '3px',
  marginBottom: '10px',
  color: `${tertiary}`,
};

export const StyledInputLabel = {
  color: `${tertiary}`,
  fontSize: '13px',
  textAlign: 'left',
  left: '15px',
};
export const LeftIcon = {
  left: '15px',
  top: '30px',
  position: 'absolute',
  zIndex: '1',
};

export const RightIcon = {
  right: '15px',
  top: '30px',
  position: 'absolute',
  zIndex: '1',
};

export const StyledButton = (google = false) => {
  return {
    padding: '15px',
    backgroundColor: `${!google ? brand : red}`,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '85px',
    marginVertical: '5px',
    height: '50px',
  };
};

export const ButtonText = {
  color: `${primary}`,
  fontSize: '16px',
};

export const MsgBox = {
  textAlign: 'center',
  fontSize: '13px',
};
export const Line = {
  height: '1px',
  width: '100%',
  backgroundColor: '#dee2e6',
  marginVertical: '10px',
};

export const ExtraView = {
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px',
};

export const ExtraText = {
  justifyContent: 'center',
  alignContent: 'center',
  color: `${tertiary}`,
  fontSize: '15px',
};

export const TextLink = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const TextLinkContent = {
  color: `${brand}`,
  fontSize: '15px',
  paddingLeft: '6px',
  fontWeight: 'bold',
};
