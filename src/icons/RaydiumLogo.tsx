import { SvgIcon } from './type'

export default function RaydiumLogo(props: SvgIcon) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" />
      <text x="20" y="25" textAnchor="middle" fontSize="10" fill="currentColor">
        stacc
      </text>
    </svg>
  )
}
