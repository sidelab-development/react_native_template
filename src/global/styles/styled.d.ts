import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
    };    
    fonts: {
      
    };
    fontsize: {
      font_small: number;
      font_medium: number;
      font_large: number;
    };
    constants: {
      screen_padding: number;
    };
  }
}
