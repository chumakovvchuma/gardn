import React from 'react';

import { black } from '../../colors';

/* eslint-disable-next-line */
interface AttentionIconProps {
  width?: string,
  rotate?: string,
  primaryColor?: string,
  secondaryColor?: string,
  secondaryColorOpacity?: number
}

/**
 * @param props 
 */
export const AttentionIcon = ({width, rotate, primaryColor, secondaryColor, secondaryColorOpacity}: AttentionIconProps) => {
  const defaultWidth = '1rem';
  const defaultSecondaryColorOpacity = 0.4;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
      transform: rotate ? `rotate(${rotate})` : undefined, 
      width: width || defaultWidth
    }}>
      <path style={{fill: primaryColor ? primaryColor : black}} d="M278.32 128h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 246.48 288h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 278.32 128zM256 320a32 32 0 1 0 32 32 32 32 0 0 0-32-32z" />
      <path style={{opacity: secondaryColorOpacity ? secondaryColorOpacity : defaultSecondaryColorOpacity, fill: secondaryColor ? secondaryColor : primaryColor ? primaryColor : black}} d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 265.52 288h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 233.68 128h44.64a16 16 0 0 1 15.92 17.59z" />
    </svg>
  )
}

export default AttentionIcon;