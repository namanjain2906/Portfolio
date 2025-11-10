import React from 'react'
import FrameDefault from '../assets/Frame.png'

const FramedContent = ({
  src = FrameDefault,
  alt = 'Frame',
  safeArea = { top: 8, right: 6, bottom: 8, left: 6 },
  className = '',
  maxWidthClass = 'max-w-[420px]',
  heightClass,
  children,
}) => {
  const { top = 8, right = 6, bottom = 8, left = 6 } = safeArea || {}

  return (
    <div
      className={[
        'relative',
        heightClass ? 'inline-block' : 'w-full',
        heightClass ? heightClass : maxWidthClass,
        className,
      ].join(' ')}
    >
      <img
        src={src}
        alt={alt}
        className={heightClass
          ? 'block h-full w-auto select-none pointer-events-none'
          : 'block w-full h-auto select-none pointer-events-none'}
        draggable={false}
      />
      <div
        className="absolute"
        style={{ top: `${top}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left}%` }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FramedContent
