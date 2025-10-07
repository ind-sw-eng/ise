# Adding a New Project to the ISE Website

## Context

This ISE (Industrial Software Engineering) course website uses Jekyll as a static site generator and is hosted on GitHub Pages. Projects are stored as markdown files in the `_projects/` directory.

## Project File Structure

Each project is a markdown file with YAML frontmatter and markdown content.

### Location
`_projects/[company-name].md`

### Frontmatter Template
```yaml
---
layout: project
title: "Project Title"
description: "Brief one-line description"
img: /assets/img/projects/[company-logo].png
importance: 1
category: active
---
```

### Content Sections

1. **Project Overview** - Brief introduction to the company and project
2. **Challenge** - What problem the project addresses
3. **Solution** - What the students built/delivered
4. **Technologies** - Tech stack used
5. **Outcomes** - Results and impact
6. **Testimonials** (optional) - Quotes from industry partners

## Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow responsive design patterns used in existing projects
- Maintain consistency with existing project pages
- Images should be optimized (web-ready, appropriate size)

## Image Requirements

- Company logos: 400x400px or similar square format
- Store in: `/assets/img/projects/`
- Format: PNG or SVG preferred
- Naming: Use lowercase with hyphens (e.g., `company-name.png`)

## Steps to Add a New Project

1. Create a new markdown file in `_projects/` with the company name
2. Add the YAML frontmatter with project metadata
3. Write the project content following existing patterns
4. Add company logo to `/assets/img/projects/`
5. Test locally with `bundle exec jekyll serve`
6. Commit and push changes - GitHub Actions will deploy automatically

## Example

See existing projects in `_projects/` directory for reference:
- `_projects/danoffice.md`
- `_projects/perfusiontech.md`
- `_projects/lexentry.md`

## Building and Testing

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000/ise/projects to preview
```

## Deployment

Changes pushed to the `main` branch are automatically deployed via GitHub Actions to https://ind-sw-eng.github.io/ise/
