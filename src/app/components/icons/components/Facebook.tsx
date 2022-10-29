import React from 'react';
import type { TColor } from '~/core/types';

const Facebook = React.forwardRef<SVGSVGElement, TFacebookProps>(
  (props, ref) => {
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
          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
          fill={color}
        />
      </svg>
    );
  }
);

Facebook.defaultProps = {
  color: '#000000',
  size: 16,
};

export default Facebook;

type TFacebookProps = {
  color?: TColor;
  size?: number | string;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
