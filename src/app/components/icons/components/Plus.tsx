import React from 'react';
import type { TColor } from '~/core/types';

const Plus = React.forwardRef<SVGSVGElement, TPlusProps>((props, ref) => {
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
        d="M12 5v14M5 12h14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Plus.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default Plus;

type TPlusProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
