import React from 'react';
import type { TColor } from '~/core/types';

const MapPin = React.forwardRef<SVGSVGElement, TMapPinProps>((props, ref) => {
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
        d="M21 10.09c0 6.683-9 12.41-9 12.41s-9-5.727-9-12.41c0-2.278.948-4.463 2.636-6.074C7.324 2.406 9.613 1.5 12 1.5s4.676.905 6.364 2.516C20.052 5.627 21 7.812 21 10.091Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MapPin.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default MapPin;

type TMapPinProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
