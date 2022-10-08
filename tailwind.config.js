// Based on: https://remix.run/docs/en/v1/guides/styling#tailwind-css

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    // https://tailwindcss.com/docs/theme#screens
    screens: {
      mobile: '375px',
      tablet: '960px',
      desktop: '1248px',
    },
    colors: {
      // Primitive Colors
      white: withOpacity('--color-white'),
      black: withOpacity('--color-black'),
      'black-75': withOpacity('--color-black-75'),
      'black-50': withOpacity('--color-black-50'),
      'black-25': withOpacity('--color-black-25'),
      'black-10': withOpacity('--color-black-10'),
      'black-5': withOpacity('--color-black-5'),

      'purple-light': withOpacity('--color-purple-light'),
      purple: withOpacity('--color-purple'),

      'green-light': withOpacity('--color-green-light'),
      green: withOpacity('--color-green'),

      'brown-light': withOpacity('--color-light'),
      'brown-green': withOpacity('--color-brown-green'),
      brown: withOpacity('--color-brown'),

      // Theme Colors
      primary: withOpacity('var(--color-primary)'),
      'primary-light': withOpacity('--color-primary-stroke'),
      'primary-stroke': withOpacity('--color-purple-light'),

      secondary: withOpacity('--color-secondary'),
      'secondary-light': withOpacity('--color-secondary-light'),

      tertiary: withOpacity('--color-tertiary'),
      'tertiary-light': withOpacity('--clor-tertiary-light'),
      'tertiary-stroke': withOpacity('--color-tertiary-stroke'),
    },
    // textColor: {
    //   skin: {
    //     base: withOpacity('--color-text-base'),
    //     muted: withOpacity('--color-text-muted'),
    //     inverted: withOpacity('--color-text-inverted'),
    //   },
    // },
    // backgroundColor: {
    //   skin: {
    //     fill: withOpacity('--color-fill'),
    //     'button-accent': withOpacity('--color-button-accent'),
    //     'button-accent-hover': withOpacity('--color-button-accent-hover'),
    //     'button-muted': withOpacity('--color-button-muted'),
    //   },
    // },
    boxShadow: {
      sm: '--box-shadow-sm',
      lg: '--box-shadow-lg',
    },
    // // https://tailwindcss.com/docs/font-size#customizing-your-theme
    // fontSize: {
    //   xs: '--font-size-xs',
    //   sm: '--font-size-sm',
    //   lg: '--font-size-lg',
    //   xl: '--font-size-xl', // h4
    //   '2xl': '--font-size-2xl', // h3
    //   '3xl': '--font-size-3xl', // h2
    //   '4xl': '--font-size-4xl', // h1
    // },
    // fontFamily: {
    //   'playfair-display': 'Playfair Display, sans-serif',
    //   'sf-pro-text': 'SF Pro Text, sans-serif',
    // },
    // // TODO https://www.youtube.com/watch?v=cZc4Jn5nK3k
    // extend: {
    //   // extend default tailwind styles
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

// https://www.youtube.com/watch?v=MAtaT8BZEAo
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue != null) {
      // Note: Only works with colors structured as rgb as CSS variables aren't resolved at compile time.
      //       See this article: // https://medium.com/techhive-io/how-to-use-css-variables-with-sass-mixins-671e1f6067b3
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}
