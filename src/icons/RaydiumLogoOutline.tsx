import { SvgIcon } from './type'

export default function RaydiumLogoOutline(props: SvgIcon) {
  return (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1" y="1" width="28" height="32" stroke="currentColor" strokeWidth="2" />
      <text x="15" y="20" textAnchor="middle" fontSize="8" fill="currentColor">
        stacc
      </text>
    </svg>
  )
}
