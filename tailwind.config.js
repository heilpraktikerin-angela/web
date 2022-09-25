// Based on: https://remix.run/docs/en/v1/guides/styling#tailwind-css

module.exports = {
  content: ['./src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
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
      return `rgba(var(${hexToRgb(variableName)}), ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : hex;
}
