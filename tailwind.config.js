// Based on: https://remix.run/docs/en/v1/guides/styling#tailwind-css

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    // https://tailwindcss.com/docs/theme#screens
    screens: {
      mobile: '576px',
      tablet: '960px',
      desktop: '1248px',
    },
    colors: {
      // Primitive Colors
      white: 'var(--color-white)',
      'white--rgb': withOpacity('--white--rgb'),
      black: 'var(--color-black)',
      'black--rgb': withOpacity('--color-black'),
      'black-75': 'var(--color-black-75)',
      'black-75--rgb': withOpacity('--color-black-75--rgb'),
      'black-50': 'var(--color-black-50)',
      'black-50--rgb': withOpacity('--color-black-50--rgb'),
      'black-25': 'var(--color-black-25)',
      'black-25--rgb': withOpacity('--color-black-25--rgb'),
      'black-10': 'var(--color-black-10)',
      'black-10--rgb': withOpacity('--color-black-10--rgb'),
      'black-5': 'var(--color-black-5)',
      'black-5--rgb': withOpacity('--color-black-5--rgb'),

      'purple-light': 'var(--color-purple-light)',
      'purple-light--rgb': withOpacity('--color-purple-light--rgb'),
      purple: 'var(--color-purple)',
      'purple--rgb': withOpacity('--color-purple'),

      'green-light': 'var(--color-green-light)',
      'green-light--rgb': withOpacity('--color-green-light--rgb'),
      green: 'var(--color-green)',
      'green--rgb': withOpacity('--color-green--rgb'),

      'brown-light': 'var(--color-brown-light)',
      'brown-light--rgb': withOpacity('--color-brown-light--rgb'),
      'brown-green': 'var(--color-brown-green)',
      'brown-green--rgb': withOpacity('--color-brown-green--rgb'),
      brown: 'var(--color-brown)',
      'brown--rgb': withOpacity('--color-brown--rgb'),

      // Theme Colors
      primary: 'var(--color-primary)',
      'primary--rgb': withOpacity('--color-primary--rgb'),
      'primary-light': 'var(--color-primary-stroke)',
      'primary-light--rgb': withOpacity('--color-primary-stroke--rgb'),
      'primary-stroke': 'var(--color-purple-light)',
      'primary-stroke--rgb': withOpacity('--color-purple-light--rgb'),

      secondary: 'var(--color-secondary)',
      'secondary--rgb': withOpacity('--color-secondary--rgb'),
      'secondary-light': 'var(--color-secondary-light)',
      'secondary-light--rgb': withOpacity('--color-secondary-light--rgb'),

      tertiary: 'var(--color-tertiary)',
      'tertiary--rgb': withOpacity('--color-tertiary--rgb'),
      'tertiary-light': 'var(--color-tertiary-light)',
      'tertiary-light--rgb': withOpacity('--clor-tertiary-light--rgb'),
      'tertiary-stroke': 'var(--color-tertiary-stroke)',
      'tertiary-stroke--rgb': withOpacity('--color-tertiary-stroke--rgb'),
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
      sm: 'var(--box-shadow-sm)',
      lg: 'var(--box-shadow-lg)',
    },
    // // https://tailwindcss.com/docs/font-size#customizing-your-theme
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)', // h4
      '2xl': 'var(--font-size-2xl)', // h3
      '3xl': 'var(--font-size-3xl)', // h2
      '4xl': 'var(--font-size-4xl)', // h1
    },
    fontFamily: {
      'playfair-display': `"Playfair Display", "sans-serif"`,
      'sf-pro-text': `"SF Pro Text", "sans-serif"`,
    },
    borderRadius: {
      none: '0',
      xs: '.25rem', // 4px
      sm: '.5rem', // 8px
      md: '1rem', // 16px
      lg: '3rem', // 48px
    },
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
    // Note: Only works with colors structured as rgb as CSS variables aren't resolved at compile time.
    //       See this article: // https://medium.com/techhive-io/how-to-use-css-variables-with-sass-mixins-671e1f6067b3
    if (opacityValue != null && variableName.endsWith('--rgb')) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}
