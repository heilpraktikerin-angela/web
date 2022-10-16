import React from 'react';
import type { TColor } from '~/core/types';

const Star = React.forwardRef<SVGSVGElement, TStarProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.47.308 3.425 7.277 7.655 1.168c.198.03.363.176.424.375.062.2.01.418-.133.565l-5.538 5.663 1.307 7.999a.561.561 0 0 1-.208.538.506.506 0 0 1-.554.042l-6.847-3.775-6.848 3.776a.506.506 0 0 1-.554-.041.56.56 0 0 1-.208-.538l1.308-8-5.54-5.664a.569.569 0 0 1-.133-.565.535.535 0 0 1 .424-.375l7.655-1.168L11.531.308a.52.52 0 0 1 .47-.308c.2 0 .382.12.47.308Z"
        fill={color}
      />
    </svg>
  );
});

Star.defaultProps = {
  color: '#F59E0B',
  size: 16,
};

export default Star;

type TStarProps = {
  color?: TColor;
  size?: number | string;
  className?: string; // Required to apply styling from Tailwind
} & React.SVGProps<SVGSVGElement>;
