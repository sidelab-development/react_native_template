import { RFValue } from 'react-native-responsive-fontsize';

export const defaulTheme = {
  title: 'default',

  colors: {
    primary: '',
    primary50: '',
    secondary: '',

    background: '',
    input: '',

    text: '',
    text_light: '',
    placeholder: '',

    success: '',
    error: '',
  },  
  fonts: {
    
  },
  fontsize: {
    font_small: RFValue(14),
    font_medium: RFValue(16),
    font_large: RFValue(22),
    font_icon: RFValue(40),
    font_icon_small: RFValue(28),
  },
  constants: {
    screen_vertical_padding: 6,
    screen_horizontal_padding: 6,
    custom_margin: 3,
    custom_margin_medium: 8,
    custom_margin_large: 10,
    custom_padding: 3,
    custom_padding_large: 6,
  },
};
