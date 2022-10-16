import React from 'react';
import type { TColor } from '~/core/types';

const Heart = React.forwardRef<SVGSVGElement, THeartProps>((props, ref) => {
  const { size, color, strokeWidth, ...others } = props;

  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={ref}
      {...others}
    >
      <path
        d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37ZM17.5 6.5h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heart.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default Heart;

type THeartProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
