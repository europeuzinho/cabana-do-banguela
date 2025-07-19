import type { SVGProps } from "react";

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
