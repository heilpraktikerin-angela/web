import React from 'react';
import type { TColor } from '~/core/types';

const ArrowRight = React.forwardRef<SVGSVGElement, TArrowRightProps>(
  (props, ref) => {
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
          d="M17.286 19 23 12l-5.714-7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          y={10.833}
          width={22.857}
          height={2.333}
          rx={1.167}
          fill={color}
        />
      </svg>
    );
  }
);

ArrowRight.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default ArrowRight;

type TArrowRightProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
