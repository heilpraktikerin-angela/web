import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import type { TColor } from '../types';

const theme: TTheme | undefined = resolveConfig(tailwindConfig).theme as any;

export default theme;

export type TTheme = {
      screens: {
        mobile: string,
        tablet: string,
        desktop: string,
      },
      colors: {
        // Primitive Colors
        white: TColor,
        'white--rgb': string,
        black: TColor,
        'black--rgb': string,
        'black-75': TColor,
        'black-75--rgb': string,
        'black-50': TColor,
        'black-50--rgb': string,
        'black-25': TColor,
        'black-25--rgb': string,
        'black-10': TColor,
        'black-10--rgb': string,
        'black-5': TColor,
        'black-5--rgb': string,
  
        'purple-light': TColor,
        'purple-light--rgb': string,
        purple: TColor,
        'purple--rgb': string,
  
        'green-light': TColor,
        'green-light--rgb': string,
        green: TColor,
        'green--rgb': string,
  
        'brown-light': TColor,
        'brown-light--rgb': string,
        'brown-green': TColor,
        'brown-green--rgb': string,
        brown: TColor,
        'brown--rgb': string,
  
        // Theme Colors
        primary: TColor,
        'primary--rgb': string,
        'primary-light': TColor,
        'primary-light--rgb': string,
        'primary-stroke': TColor,
        'primary-stroke--rgb': string,
  
        secondary: TColor,
        'secondary--rgb': string,
        'secondary-light': TColor,
        'secondary-light--rgb': string,
  
        tertiary: TColor,
        'tertiary--rgb': string,
        'tertiary-light': TColor,
        'tertiary-light--rgb': string,
        'tertiary-stroke': TColor,
        'tertiary-stroke--rgb': string,
      },
      boxShadow: {
        sm: string,
        lg: string,
      },
      // // https://tailwindcss.com/docs/font-size#customizing-your-theme
      fontSize: {
        xs: string,
        sm: string,
        lg: string,
        xl: string, // h4
        '2xl': string, // h3
        '3xl': string, // h2
        '4xl': string, // h1
      },
      fontFamily: {
        'playfair-display': string,
        'sf-pro-text': string,
      },
}