import React from 'react'

const Dot = ({ active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      'h-1.5 rounded-full transition-all',
      active ? 'w-6 bg-blue-500' : 'w-3 bg-white/40 hover:bg-white/60',
    ].join(' ')}
    aria-pressed={active}
  />
)

const PageDots = ({ total = 2, current = 0, onChange }) => {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} active={i === current} onClick={() => onChange?.(i)} />
      ))}
    </div>
  )
}

export default PageDots
