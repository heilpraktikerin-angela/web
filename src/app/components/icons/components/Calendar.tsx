import React from 'react';
import type { TColor } from '~/core/types';

const Calendar = React.forwardRef<SVGSVGElement, TCalendarProps>(
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
          d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Calendar.defaultProps = {
  color: '#000000',
  size: 16,
  strokeWidth: 2,
};

export default Calendar;

type TCalendarProps = {
  color?: TColor;
  size?: number | string;
  strokeWidth?: number;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
