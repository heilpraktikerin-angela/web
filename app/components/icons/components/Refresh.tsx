import React from 'react';
import type { TColor } from '~/core/types';

const Refresh = React.forwardRef<SVGSVGElement, TRefreshProps>((props, ref) => {
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
        d="M1 4v6h6M23 20v-6h-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Refresh.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default Refresh;

type TRefreshProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
