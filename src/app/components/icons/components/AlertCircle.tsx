import React from 'react';
import type { TColor } from '~/core/types';

const AlertCircle = React.forwardRef<SVGSVGElement, TAlertCircleProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 8v4M12 16h.01"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AlertCircle.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default AlertCircle;

type TAlertCircleProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
