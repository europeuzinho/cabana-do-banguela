import type { SVGProps } from "react";

export const DragonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 2.83 2.83L19 12.21a2 2 0 0 0-2.83-2.83l-2.07 2.07a2 2 0 0 1-2.83-2.83l2.07-2.07a2 2 0 0 0-2.83-2.83z" />
    <path d="M22 12c-2 2-4 2-6 0-2-2-2-4 0-6" />
    <path d="M12 12l4-4" />
  </svg>
);

export const VikingHelmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 14.5A5.5 5.5 0 0 1 7.5 9h9A5.5 5.5 0 0 1 22 14.5" />
    <path d="M16 9l-2-7" />
    <path d="M8 9l2-7" />
    <path d="M12 22V9" />
  </svg>
);
