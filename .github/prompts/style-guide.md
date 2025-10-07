# ISE Website Style Guide

## Overview

The ISE course website uses a modern, clean design with Tailwind CSS for styling. This guide ensures consistency across all pages and components.

## Technology Stack

- **Framework**: Jekyll (Ruby-based static site generator)
- **Styling**: Tailwind CSS v3.x
- **JavaScript**: Vanilla JS (minimal usage)
- **Icons**: Lucide icons (inline SVG)
- **Hosting**: GitHub Pages

## Color Palette

### Primary Colors
- **Blue**: `blue-600` (#2563eb) - Primary actions, links
- **Green**: `green-600` (#16a34a) - Success, industry-focused elements
- **Purple**: `purple-600` (#9333ea) - Projects, accent elements

### Neutral Colors
- **Black**: `text-black` - Primary text
- **Gray**: 
  - `gray-600` - Secondary text
  - `gray-700` - Body text
  - `gray-100` - Light backgrounds

### State Colors
- **Hover states**: Use `-800` variants (e.g., `hover:blue-800`)
- **Background tints**: Use `-50` variants (e.g., `blue-50`)
- **Borders**: Use `-200` variants (e.g., `border-blue-200`)

## Typography

### Headings
```html
<h1 class="text-4xl font-bold mb-8">Main Heading</h1>
<h2 class="text-3xl font-bold mb-8">Section Heading</h2>
<h3 class="text-xl font-semibold mb-4">Subsection</h3>
```

### Body Text
```html
<p class="text-gray-700">Regular paragraph text</p>
<p class="text-gray-600">Secondary text</p>
```

## Layout Patterns

### Sections
```html
<section class="mb-16">
  <h2 class="text-3xl font-bold mb-8 text-center">Section Title</h2>
  <!-- content -->
</section>
```

### Cards
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-semibold mb-4">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

### Grid Layouts
```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- items -->
</div>
```

## Component Patterns

### Links
```html
<!-- Primary link -->
<a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">
  Link Text
</a>

<!-- Button-style link -->
<a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-800">
  Click Here
</a>
```

### List Items with Icons
```html
<li class="flex items-start">
  <svg class="lucide lucide-chevron-right h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0">
    <path d="m9 18 6-6-6-6"></path>
  </svg>
  <p class="text-black">List item text</p>
</li>
```

### Images
```html
<!-- Project logo -->
<img src="{{ site.baseurl }}{{ project.img }}" 
     alt="{{ project.title }} logo"
     class="mx-auto h-64 max-w-[400px] object-contain bg-white p-4 transition-transform hover:scale-105" />
```

## Spacing Guidelines

- **Section margins**: `mb-16` (bottom margin for sections)
- **Card padding**: `p-6` (internal padding)
- **Grid gaps**: `gap-6` (space between grid items)
- **Element spacing**: `mb-4` or `mb-8` depending on hierarchy

## Responsive Design

### Breakpoints
- **Mobile**: Default (no prefix)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

### Mobile-First Approach
Always start with mobile styles, then enhance for larger screens:
```html
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
</div>
```

## Accessibility

### ARIA Labels
```html
<button aria-expanded="false" aria-label="Toggle menu">
  <!-- button content -->
</button>
```

### Focus States
All interactive elements should have visible focus states (Tailwind includes by default)

### Alt Text
Always include descriptive alt text for images:
```html
<img src="logo.png" alt="Company Name logo" />
```

## Animation & Transitions

### Hover Transitions
```html
<a class="transition-colors hover:bg-blue-100">Link</a>
<div class="transition-transform hover:scale-105">Scalable element</div>
```

### Keep Subtle
- Use `transition-colors` for background/text changes
- Use `transition-transform` for scale effects
- Avoid complex animations that may affect performance

## Jekyll-Specific Patterns

### Liquid Variables
```liquid
{{ site.baseurl }}          # Base URL for paths
{{ project.title }}         # Project data
{{ site.data.home.features }} # Data file access
```

### Loops
```liquid
{% for project in site.projects %}
  <!-- project card -->
{% endfor %}
```

### Includes
```liquid
{% include header.html %}
{% include footer.html %}
```

## Code Style

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Keep consistent class ordering (layout → spacing → typography → colors)

### CSS/Tailwind
- Use utility classes over custom CSS
- Group related utilities together
- Avoid `!important` (use specificity instead)

### JavaScript
- Keep minimal and vanilla
- Use modern ES6+ syntax
- Add comments for complex logic

## File Organization

### Assets
```
assets/
├── css/
│   └── tailwind.css
├── js/
│   └── main.js
└── img/
    ├── projects/    # Project logos
    └── icons/       # Site icons
```

### Naming Conventions
- **Files**: lowercase with hyphens (e.g., `project-name.md`)
- **CSS classes**: Use Tailwind utilities
- **IDs**: camelCase (e.g., `#mobileMenu`)

## Best Practices

1. **Performance**: Optimize images, minimize custom CSS
2. **Consistency**: Follow existing patterns
3. **Accessibility**: Test with keyboard navigation
4. **Responsiveness**: Test on mobile devices
5. **SEO**: Use semantic HTML and proper meta tags
6. **Maintainability**: Document complex code
7. **Git**: Make atomic commits with clear messages

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Lucide Icons](https://lucide.dev/)
