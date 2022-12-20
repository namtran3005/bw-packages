import { SVGProps } from 'react'

export interface IIcon extends SVGProps<SVGSVGElement> {
  size: string | number
  color: string
}
export const defaultIconProps: IIcon = {
  size: '1em',
  color: '#2C232E',
}

export interface IIllustration extends SVGProps<SVGSVGElement> {
  size: string | number
}
export const defaultIllustrationProps: IIllustration = {
  size: '300px',
}
