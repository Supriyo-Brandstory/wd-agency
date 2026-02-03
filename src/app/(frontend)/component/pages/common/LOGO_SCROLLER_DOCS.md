# Logo Scroller Component Documentation

## Overview

The LogoScroller component is a reusable, animated logo carousel that creates infinite scrolling effects in both left and right directions.

## Components Created

### 1. LogoScroller (Base Component)

**Location:** `src/app/(frontend)/component/pages/common/LogoScroller.jsx`

A reusable component for creating infinite scrolling logo carousels.

#### Props:

- `logos` (Array, required): Array of logo objects with `{ src, alt }` properties
- `direction` (String, default: 'left'): Scroll direction - 'left' or 'right'
- `speed` (Number, default: 30): Animation duration in seconds
- `className` (String, optional): Additional CSS classes

#### Example Usage:

```jsx
import LogoScroller from "./LogoScroller";

const logos = [
  { src: "/path/to/logo1.png", alt: "Client 1" },
  { src: "/path/to/logo2.png", alt: "Client 2" },
  { src: "/path/to/logo3.png", alt: "Client 3" },
];

<LogoScroller logos={logos} direction="left" speed={40} />;
```

### 2. ClientSection (Implementation Component)

**Location:** `src/app/(frontend)/component/pages/common/ClientSection.jsx`

A complete client logos section with two rows scrolling in opposite directions.

#### Features:

- Row 1: Scrolls left
- Row 2: Scrolls right (reverse)
- Pre-configured with client logos from brandstory.ae
- Beautiful gradient background
- Fully responsive

#### Example Usage:

```jsx
import ClientSection from "@/app/(frontend)/component/pages/common/ClientSection";

export default function Page() {
  return (
    <div>
      <ClientSection />
    </div>
  );
}
```

## Features

### ✨ Visual Effects:

- **Glassmorphism Design**: Modern frosted glass effect on logo containers
- **Smooth Animations**: Infinite scrolling with seamless loop
- **Hover Effects**: Logo cards lift on hover with enhanced opacity
- **Pause on Hover**: Animation pauses when user hovers over the section
- **Gradient Background**: Premium animated gradient backdrop
- **Responsive Design**: Adapts to all screen sizes

### 🎨 Customization:

#### Change Scroll Speed:

```jsx
<LogoScroller logos={logos} speed={50} /> // Slower
<LogoScroller logos={logos} speed={20} /> // Faster
```

#### Change Direction:

```jsx
<LogoScroller logos={logos} direction="left" />  // Scrolls left
<LogoScroller logos={logos} direction="right" /> // Scrolls right
```

#### Add Your Own Logos:

```jsx
const myLogos = [
  {
    src: "/images/client-logo-1.png",
    alt: "Company Name 1",
  },
  {
    src: "/images/client-logo-2.png",
    alt: "Company Name 2",
  },
];

<LogoScroller logos={myLogos} direction="left" speed={35} />;
```

## CSS Customization

### Logo Container Styling

Edit `LogoScroller.css` to customize the logo containers:

```css
.logo-wrap {
  background: rgba(255, 255, 255, 0.05); /* Change background */
  border-radius: 12px; /* Change border radius */
  padding: 1rem 2rem; /* Adjust padding */
}
```

### Animation Speed

Adjust the animation duration directly via the `speed` prop, or modify the CSS:

```css
.logo-scroller {
  animation-duration: 30s; /* Global default */
}
```

## Integration Example

To use in any page:

```jsx
import ClientSection from "@/app/(frontend)/component/pages/common/ClientSection";

export default function HomePage() {
  return (
    <main>
      <section>{/* Your other content */}</section>

      <ClientSection />

      <section>{/* More content */}</section>
    </main>
  );
}
```

## Advanced Usage

### Multiple Rows with Different Speeds:

```jsx
import LogoScroller from "./LogoScroller";

export default function MultiRowLogos() {
  return (
    <div>
      <LogoScroller logos={row1Logos} direction="left" speed={40} />
      <LogoScroller logos={row2Logos} direction="right" speed={35} />
      <LogoScroller logos={row3Logos} direction="left" speed={30} />
    </div>
  );
}
```

### Custom Styling:

```jsx
<LogoScroller
  logos={logos}
  direction="left"
  speed={40}
  className="my-custom-class"
/>
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- Uses CSS animations for optimal performance
- `will-change` property for smooth scrolling
- Lazy loading for images
- Hardware-accelerated transforms

## Notes

- Images are automatically duplicated for seamless infinite scroll
- The component handles responsive breakpoints automatically
- Logo colors are inverted (white) for dark backgrounds
- Hover state pauses the animation for better UX
