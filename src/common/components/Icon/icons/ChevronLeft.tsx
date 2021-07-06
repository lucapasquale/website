import * as React from 'react'

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="chevron-left_svg__icon chevron-left_svg__icon-tabler chevron-left_svg__icon-tabler-chevron-left"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#607D8B"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M15 6l-6 6 6 6" />
  </svg>
)

export default ChevronLeft
