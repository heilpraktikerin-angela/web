import React from 'react';
import type { TColor } from '~/core/types';

const Twitter = React.forwardRef<SVGSVGElement, TTwitterProps>((props, ref) => {
  const { size, color, ...others } = props;

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
        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"
        fill={color}
      />
    </svg>
  );
});

Twitter.defaultProps = {
  color: '#000000',
  size: 16,
};

export default Twitter;

type TTwitterProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
