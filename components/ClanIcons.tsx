'use client'

import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function BullIcon({ size = 64, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Horns */}
      <path
        d="M18 28 C10 20, 8 10, 14 6 C20 2, 26 8, 24 18"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M82 28 C90 20, 92 10, 86 6 C80 2, 74 8, 76 18"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Head */}
      <ellipse cx="50" cy="42" rx="26" ry="22" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Snout */}
      <ellipse cx="50" cy="56" rx="14" ry="9" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Nostrils */}
      <circle cx="44" cy="57" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="56" cy="57" r="2.5" fill="currentColor" opacity="0.7" />
      {/* Eyes */}
      <circle cx="38" cy="38" r="3.5" fill="currentColor" opacity="0.9" />
      <circle cx="62" cy="38" r="3.5" fill="currentColor" opacity="0.9" />
      {/* Eye glints */}
      <circle cx="39.5" cy="36.5" r="1" fill="white" opacity="0.6" />
      <circle cx="63.5" cy="36.5" r="1" fill="white" opacity="0.6" />
      {/* Ears */}
      <ellipse cx="24" cy="36" rx="5" ry="7" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" transform="rotate(-15 24 36)" />
      <ellipse cx="76" cy="36" rx="5" ry="7" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" transform="rotate(15 76 36)" />
      {/* Neck / body suggestion */}
      <path
        d="M36 64 C36 72, 40 82, 50 85 C60 82, 64 72, 64 64"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="currentColor"
        opacity="0.1"
      />
      {/* Brow line */}
      <path d="M32 34 C35 31, 38 30, 40 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M68 34 C65 31, 62 30, 60 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
    </svg>
  )
}

export function WolfIcon({ size = 64, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Ears */}
      <polygon
        points="26,36 18,14 36,24"
        fill="currentColor"
        opacity="0.85"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points="74,36 82,14 64,24"
        fill="currentColor"
        opacity="0.85"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner ear */}
      <polygon points="27,33 21,18 34,26" fill="currentColor" opacity="0.2" />
      <polygon points="73,33 79,18 66,26" fill="currentColor" opacity="0.2" />
      {/* Head shape */}
      <path
        d="M24 40 C22 55, 26 66, 34 72 C40 76, 46 78, 50 78 C54 78, 60 76, 66 72 C74 66, 78 55, 76 40 C74 28, 64 22, 50 22 C36 22, 26 28, 24 40Z"
        fill="currentColor"
        opacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Snout */}
      <path
        d="M38 58 C40 64, 45 68, 50 68 C55 68, 60 64, 62 58"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
        strokeLinecap="round"
      />
      {/* Nose */}
      <ellipse cx="50" cy="57" rx="5" ry="3.5" fill="currentColor" opacity="0.85" />
      {/* Mouth */}
      <path d="M46 61 L50 65 L54 61" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Eyes */}
      <ellipse cx="37" cy="42" rx="4" ry="4.5" fill="currentColor" opacity="0.9" />
      <ellipse cx="63" cy="42" rx="4" ry="4.5" fill="currentColor" opacity="0.9" />
      {/* Eye glints */}
      <circle cx="38.5" cy="40.5" r="1.2" fill="white" opacity="0.65" />
      <circle cx="64.5" cy="40.5" r="1.2" fill="white" opacity="0.65" />
      {/* Brow */}
      <path d="M30 37 C33 33, 37 32, 40 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M70 37 C67 33, 63 32, 60 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9" />
      {/* Fur texture lines */}
      <path d="M44 36 C45 34, 47 33, 50 33 C53 33, 55 34, 56 36" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M50 22 L50 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
    </svg>
  )
}

export function EagleIcon({ size = 64, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Wings spread */}
      <path
        d="M50 48 C44 42, 32 36, 16 30 C10 28, 6 30, 8 36 C10 42, 20 44, 32 46 C40 47, 46 48, 50 48Z"
        fill="currentColor"
        opacity="0.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 48 C56 42, 68 36, 84 30 C90 28, 94 30, 92 36 C90 42, 80 44, 68 46 C60 47, 54 48, 50 48Z"
        fill="currentColor"
        opacity="0.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Wing feather details - left */}
      <path d="M18 32 C22 38, 28 42, 36 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M12 36 C18 40, 26 43, 34 46" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
      {/* Wing feather details - right */}
      <path d="M82 32 C78 38, 72 42, 64 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M88 36 C82 40, 74 43, 66 46" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="10" ry="14" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Head */}
      <circle cx="50" cy="36" r="11" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="36" r="8" fill="currentColor" opacity="0.1" />
      {/* Beak */}
      <path
        d="M50 40 L44 47 L50 45 L56 47 Z"
        fill="currentColor"
        opacity="0.9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="43" cy="33" r="4" fill="currentColor" opacity="0.9" />
      <circle cx="57" cy="33" r="4" fill="currentColor" opacity="0.9" />
      {/* Eye rings */}
      <circle cx="43" cy="33" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="57" cy="33" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Eye glints */}
      <circle cx="44.5" cy="31.5" r="1.5" fill="white" opacity="0.7" />
      <circle cx="58.5" cy="31.5" r="1.5" fill="white" opacity="0.7" />
      {/* Tail feathers */}
      <path d="M44 72 L42 82 L50 78 L58 82 L56 72" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.4" strokeLinejoin="round" />
      <path d="M50 78 L50 72" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
    </svg>
  )
}
