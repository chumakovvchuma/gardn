/**
 * LogoIcon from SVG
 */
import React from 'react';

import { black } from '../../colors';

/* eslint-disable-next-line */
export interface HumidityIconProps {
  width?: string,
  rotate?: string,
  color?: string
}

/**
 * @param props 
 */
export const HumidityIcon = ({width, rotate, color}: HumidityIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg style={{
      transform: rotate ? `rotate(${rotate})` : undefined, 
      width: width || defaultWidth
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path style={{fill: color ? color : black}} d="M160 292c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm92 60c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zM223.9 22.1C219.5 7.5 205.8 0 192 0c-13.5 0-27 7.2-31.8 22.1C109.1 179.8 0 222.7 0 333.9 0 432.3 85.9 512 192 512s192-79.7 192-178.1c0-111.7-108.9-153.3-160.1-311.8zM192 480c-88.2 0-160-65.5-160-146.1 0-47.6 25-80.4 59.6-125.9 32.6-42.8 73.1-96 98.6-175.7.1-.1.8-.3 1.8-.3.7 0 1.2.1 1.4.1h.1c26 80.4 66.5 133.4 99.1 176.1C327.1 253.4 352 286 352 333.9c0 80.6-71.8 146.1-160 146.1zm61-212.2l-12.5-10c-3.5-2.8-8.5-2.2-11.2 1.2l-99.5 134c-2.8 3.5-2.2 8.5 1.2 11.2l12.5 10c3.5 2.8 8.5 2.2 11.2-1.2l99.5-134c2.8-3.4 2.2-8.5-1.2-11.2z"/>
    </svg>
  )
}

export default HumidityIcon;