# Technical Setup and Architecture Guide

This document provides a comprehensive overview of how the ISE (Industrial Software Engineering) project website is set up, hosted, and deployed.

## 1. Website Hosting and Infrastructure

### Hosting Platform: GitHub Pages
- **Where hosted**: The website is hosted on GitHub Pages at https://ind-sw-eng.github.io/ise/
- **Cost**: Free - GitHub provides GitHub Pages hosting at no cost for public repositories
- **URL Assignment**: The URL follows GitHub's standard pattern: `{organization-name}.github.io/{repository-name}`
  - Organization: `ind-sw-eng` 
  - Repository: `ise`
  - Result: `https://ind-sw-eng.github.io/ise/`

### Configuration Details
- **Repository**: `ind-sw-eng/ise` (configured in `_config.yml`)
- **Base URL**: `/ise` (subpath under the organization's GitHub Pages domain)
- **Custom Domain**: None currently configured (uses default GitHub Pages domain)

## 2. Jekyll Static Site Generator

### Why Jekyll?
Jekyll was chosen for several strategic reasons:

1. **GitHub Pages Native Support**: Jekyll is the default static site generator for GitHub Pages, providing seamless integration
2. **Automatic Deployment**: No manual build/deploy steps needed - GitHub automatically builds and deploys Jekyll sites
3. **Markdown Support**: Allows content to be written in Markdown, making it easy for non-developers to contribute
4. **Template System**: Provides layouts, includes, and data files for maintainable site structure
5. **Academic/Educational Focus**: Jekyll is widely used in academic settings for course websites and documentation

### How Jekyll Works in This Project

#### Site Structure
```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _pages/              # Main site pages
├── _projects/           # Project showcase content
├── _data/               # Data files (JSON/YAML)
├── assets/              # CSS, JS, images
└── .github/workflows/   # GitHub Actions
```

#### Content Management
- **Projects**: Each industry partnership is a markdown file in `_projects/`
- **Pages**: Site pages like "About", "Projects" are in `_pages/`
- **Layouts**: HTML templates in `_layouts/` provide consistent structure
- **Data**: Structured data in `_data/` for dynamic content generation

## 3. GitHub Actions Deployment Pipeline

### Automated Deployment Workflow
The site uses GitHub Actions (`.github/workflows/deploy.yml`) for automated building and deployment:

#### Workflow Triggers
- **Push to main branch**: Automatically deploys when code is pushed to main
- **Manual dispatch**: Can be triggered manually from GitHub Actions tab

#### Build Process
1. **Environment Setup**: 
   - Ubuntu runner with Ruby 3.1
   - Bundle install for dependencies
   - GitHub Pages configuration
   
2. **Site Building**:
   - `bundle exec jekyll build --baseurl "/ise"`
   - Outputs to `_site/` directory
   - Production environment optimizations

3. **Deployment**:
   - Uploads built site as artifact
   - Deploys to GitHub Pages environment
   - Updates live site at https://ind-sw-eng.github.io/ise/

### Permissions and Security
- **Read permissions**: For repository contents
- **Write permissions**: For GitHub Pages deployment
- **ID token**: For secure deployment authentication

## 4. Technical Dependencies and Stack

### Ruby Ecosystem
- **Ruby Version**: 3.1+ (specified in workflow)
- **Bundler**: Dependency management
- **Gemfile**: Defines required gems

### Key Dependencies
```ruby
# Core GitHub Pages integration
gem "github-pages", group: :jekyll_plugins

# Styling framework
gem "jekyll-tailwindcss", "~> 0.3.1"
```

### Jekyll Plugins
The site uses multiple Jekyll plugins for enhanced functionality:
- `jekyll-remote-theme`: Theme management
- `jekyll-seo-tag`: Search engine optimization
- `jekyll-sitemap`: Automatic sitemap generation
- `jekyll-github-metadata`: Repository integration
- `jekyll-paginate`: Content pagination
- `jekyll-tailwindcss`: Tailwind CSS integration

### Frontend Technologies
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **HTML5**: Semantic markup with accessibility features
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 5. Content and Data Architecture

### Academic-Industry Partnership Focus
The site is specifically designed for:
- **Industry professionals** seeking academic collaboration
- **Software companies** interested in student projects
- **Academic partners** looking for industry connections

### Project Showcase System
- Each industry partnership is documented as a markdown file
- Structured metadata (title, description, testimonials, etc.)
- Automatic project listing and detail pages
- Company logos and branding integration

### SEO and Discoverability
- **Schema.org markup**: Structured data for search engines
- **Open Graph tags**: Social media sharing optimization
- **AI-content declaration**: Explicit indexing permissions for AI systems
- **Meta descriptions**: Optimized for search engine results

## 6. Development and Contribution Workflow

### Local Development
```bash
# Clone repository
git clone https://github.com/ind-sw-eng/ise.git
cd ise

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
# Site available at http://localhost:4000/ise/
```

### Content Addition
1. **New Projects**: Add markdown files to `_projects/`
2. **New Pages**: Add markdown files to `_pages/`
3. **Assets**: Add images/files to `assets/`
4. **Configuration**: Modify `_config.yml` for site-wide settings

### Deployment Process
1. **Commit changes** to repository
2. **Push to main branch**
3. **GitHub Actions automatically**:
   - Builds the site
   - Runs tests and validation
   - Deploys to GitHub Pages
4. **Site updates** within 1-2 minutes

## 7. Maintenance and Monitoring

### Automatic Updates
- **GitHub Pages gem**: Keeps Jekyll version aligned with GitHub Pages
- **Dependency updates**: Dependabot can be configured for automatic updates
- **Security patches**: GitHub automatically scans for vulnerabilities

### Performance Monitoring
- **GitHub Pages analytics**: Built-in traffic analytics
- **Lighthouse scores**: Can be integrated for performance monitoring
- **Uptime monitoring**: GitHub Pages provides 99.9% uptime SLA

## 8. Cost and Sustainability

### Zero Hosting Costs
- **GitHub Pages**: Free for public repositories
- **GitHub Actions**: 2,000 minutes/month free (builds typically use <5 minutes)
- **Domain**: Using GitHub's domain (no additional cost)
- **SSL Certificate**: Provided free by GitHub

### Long-term Sustainability
- **No server maintenance**: GitHub handles all infrastructure
- **Automatic updates**: Security and platform updates handled by GitHub
- **Version control**: Full history and backup through Git
- **Community contributions**: Easy for students and faculty to contribute

---

This technical setup provides a robust, cost-effective, and maintainable platform for showcasing industrial software engineering partnerships while requiring minimal technical overhead for content management and maintenance.