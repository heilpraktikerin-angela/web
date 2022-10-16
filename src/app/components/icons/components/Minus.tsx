import React from 'react';
import type { TColor } from '~/core/types';

const Minus = React.forwardRef<SVGSVGElement, TMinusProps>((props, ref) => {
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
        d="M5 12h14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Minus.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default Minus;

type TMinusProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
