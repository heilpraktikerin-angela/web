export type TRGB = `rgb(${number}, ${number}, ${number})`;
export type TRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type THEX = `#${string}`;

export type TColor = TRGB | TRGBA | THEX | 'currentColor';
