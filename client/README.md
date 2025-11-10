# React + Vite (Enhanced)

This project started from the Vite + React template and adds a reusable responsive frame component.

## Frame-based Responsive Content

`FramedContent` lets you place UI elements inside a device/frame image (`Frame.png`) while preserving relative sizing (no distortion) as the overall frame scales.

### Key Ideas
- The frame image sets the outer dimensions (width responsive, height auto to keep aspect).
- A safe-area overlay uses percentage insets to match the visible screen region of the frame image.
- Container queries (`[container-type:inline-size]`) allow usage of `cqw` / `cqh` units so spacing, font sizes, and radii scale proportionally with the inner width.

### Usage Example
```jsx
import FramedContent from './src/components/FramedContent'
import Frame from './src/assets/Frame.png'

export default function Example() {
	return (
		<div className="min-h-dvh grid place-items-center p-4 bg-neutral-900">
			<FramedContent src={Frame} safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}>
				<div className="absolute inset-0 [container-type:inline-size] flex flex-col items-center justify-center gap-[4cqw]">
					<h1 className="text-white text-[7cqw] font-bold leading-none">Hello</h1>
					<p className="text-white/70 text-[3cqw] max-w-[80cqw] text-center">Fully responsive without losing layout ratios.</p>
					<button className="text-[3cqw] px-[5cqw] py-[2cqw] rounded-[2cqw] bg-indigo-600 text-white">Tap Me</button>
				</div>
			</FramedContent>
		</div>
	)
}
```

### Adjusting the Safe Area
Tweak the `safeArea` prop (percentages):
```jsx
<FramedContent safeArea={{ top: 7.5, right: 5.5, bottom: 7.5, left: 5.5 }}>...</FramedContent>
```
Measure pixel offsets from the raw image and convert: `percent = (pixels / imageDimension) * 100`.

### Recommended Units
- Typography: `text-[Xcqw]` (container query width units)
- Spacing: `gap-[Xcqw]`, `px-[Xcqw]`, `py-[Xcqw]`
- Rounded corners: `rounded-[Xcqw]`
- Grids: use `grid-cols-*` combined with `gap-[Xcqw]`

### Placing Specific Elements
Use absolute positioning with percentages: `absolute top-[4%] left-1/2 -translate-x-1/2` for a centered header, etc. Because the container scales, percentages remain visually consistent.

### Performance Note
Container queries are supported in modern browsers. For older browsers lacking support, you can fall back to using `vw` units and wrap the frame in a width-constrained parent, though ratios may differ slightly.

## Development
Run dev server:
```bash
npm run dev
```

## License
Open for personal customization.
