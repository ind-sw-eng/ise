# Website Content Update Guide

## Context

The ISE course website is a Jekyll-based static site with content managed through markdown files and YAML data files.

## Content Structure

### Pages (`_pages/`)
Main website pages:
- `index.md` - Homepage with featured sections
- `projects.md` - Project listing page
- `industry.md` - Information for industry partners
- `students.md` - Information for students

### Data Files (`_data/`)
Structured data in JSON format:
- `home.json` - Homepage content and configuration
- Other data files for dynamic content

### Projects (`_projects/`)
Individual project showcase pages (see `add-project.md` for details)

## Updating Content

### Homepage Content
Edit `_data/home.json` to update:
- Feature highlights
- Benefits list
- Partnership information
- Professor/contact information

### Page Content
Edit markdown files in `_pages/`:
1. Maintain YAML frontmatter (layout, title, nav settings)
2. Use markdown for content
3. Apply Tailwind CSS classes for styling
4. Keep responsive design in mind

### Navigation
Navigation is configured in page frontmatter:
```yaml
---
nav: true
nav_order: 1
---
```

## Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing spacing/margin patterns
- Maintain color scheme consistency:
  - Primary: blue-600
  - Secondary: green-600
  - Accent: purple-600
- Use shadow and rounded classes for cards
- Keep mobile-first responsive design

## Common Tailwind Patterns in This Site

### Cards
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <!-- content -->
</div>
```

### Grid Layouts
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- items -->
</div>
```

### Buttons/Links
```html
<a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">
  Link text
</a>
```

## Testing Changes

```bash
# Local development server
bundle exec jekyll serve

# Access at http://localhost:4000/ise/
```

## Content Guidelines

1. **Clarity** - Write clear, concise descriptions
2. **Consistency** - Follow existing tone and style
3. **SEO** - Include relevant keywords naturally
4. **Accessibility** - Use semantic HTML and proper alt text
5. **Mobile-First** - Ensure content works on all screen sizes

## Deployment

- Changes to `main` branch deploy automatically
- GitHub Actions builds and deploys to GitHub Pages
- Updates typically live within 1-2 minutes
- No manual deployment needed

## Common Tasks

### Add a Professor/Contact
Edit `_data/home.json` professors array:
```json
{
  "name": "Professor Name",
  "role": "Role/Title",
  "email": "email@example.com"
}
```

### Update Feature List
Edit `_data/home.json` features array to add/modify features

### Change Site Configuration
Edit `_config.yml` for site-wide settings (URL, title, etc.)

## File Locations Reference

```
├── _config.yml          # Site configuration
├── _data/               # Data files (JSON)
│   └── home.json        # Homepage data
├── _pages/              # Main pages
│   ├── index.md         # Homepage
│   ├── projects.md      # Projects listing
│   ├── industry.md      # Industry info
│   └── students.md      # Student info
├── _projects/           # Project showcase files
├── _layouts/            # HTML templates
├── _includes/           # Reusable components
└── assets/              # CSS, JS, images
```
