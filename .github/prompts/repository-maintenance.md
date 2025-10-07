# Repository Maintenance Guide

## Context

This guide covers common maintenance tasks for the ISE course website repository, including dependency updates, troubleshooting, and best practices.

## Local Development Setup

### Prerequisites
- Ruby 3.1 or higher
- Bundler gem
- Git

### Initial Setup
```bash
# Clone repository
git clone https://github.com/ind-sw-eng/ise.git
cd ise

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Access at http://localhost:4000/ise/
```

## Dependency Management

### Update Dependencies
```bash
# Update all gems
bundle update

# Update specific gem
bundle update jekyll

# Update GitHub Pages gem (keeps Jekyll version aligned)
bundle update github-pages
```

### Gemfile Overview
Key dependencies:
- `github-pages` - GitHub Pages gem bundle (includes Jekyll)
- `jekyll-tailwindcss` - Tailwind CSS integration
- `faraday-retry` - HTTP retry logic

## Building and Testing

### Local Build
```bash
# Build site
bundle exec jekyll build

# Build with specific baseurl
bundle exec jekyll build --baseurl "/ise"

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

### Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Images display properly
- [ ] Mobile responsive design works
- [ ] No broken links
- [ ] Project pages render correctly

## GitHub Actions Workflow

### Deployment Pipeline
The site uses automated deployment via `.github/workflows/deploy.yml`:

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Process:**
1. Checkout code
2. Setup Ruby 3.1
3. Install dependencies (`bundle install`)
4. Build with Jekyll
5. Upload artifact
6. Deploy to GitHub Pages

### Monitoring Deployments
- Check Actions tab in GitHub for build status
- Typical deployment time: 1-2 minutes
- Site URL: https://ind-sw-eng.github.io/ise/

## Common Issues and Solutions

### Issue: Bundle Install Fails
**Solution:**
```bash
# Clear bundle cache
bundle clean --force

# Remove Gemfile.lock
rm Gemfile.lock

# Reinstall
bundle install
```

### Issue: Jekyll Build Fails
**Solution:**
```bash
# Check for syntax errors in markdown files
bundle exec jekyll build --verbose

# Validate YAML frontmatter
# Ensure all frontmatter is properly formatted
```

### Issue: Tailwind CSS Not Working
**Solution:**
```bash
# Ensure jekyll-tailwindcss plugin is installed
bundle exec jekyll build

# Check tailwind.config.js is properly configured
# Verify content paths include all template files
```

### Issue: Images Not Displaying
**Solution:**
- Check image paths use `{{ site.baseurl }}` prefix
- Verify images are in `/assets/img/` directory
- Ensure proper file extensions (.png, .jpg, .svg)
- Check file names (case-sensitive on Linux)

### Issue: Local Site Shows 404
**Solution:**
- Access site at `http://localhost:4000/ise/` (note the `/ise/` path)
- Baseurl is configured as `/ise` in `_config.yml`

## Git Workflow

### Branch Strategy
- `main` - Production branch (auto-deploys)
- Feature branches for new development

### Commit Messages
Follow conventional commits:
```
feat: Add new project page for Company X
fix: Correct broken link on industry page
docs: Update README with setup instructions
style: Improve mobile navigation styling
```

### Pull Request Process
1. Create feature branch from `main`
2. Make changes and test locally
3. Push branch and create PR
4. Wait for CI/CD checks to pass
5. Review and merge to `main`
6. Automatic deployment to GitHub Pages

## Content Management

### Adding New Content
1. **Projects**: Add markdown file to `_projects/`
2. **Pages**: Add markdown file to `_pages/`
3. **Data**: Update JSON files in `_data/`
4. **Assets**: Add images/files to `assets/`

### Content Review Checklist
- [ ] YAML frontmatter is valid
- [ ] Markdown renders correctly
- [ ] Links are functional
- [ ] Images are optimized
- [ ] Content follows style guide
- [ ] No spelling/grammar errors

## Performance Optimization

### Image Optimization
- Compress images before committing
- Use appropriate formats (PNG for logos, JPEG for photos)
- Recommended tools: ImageOptim, TinyPNG
- Target file sizes: <500KB per image

### Build Optimization
- Minimize custom CSS/JS
- Use Tailwind's purge feature (configured in tailwind.config.js)
- Leverage Jekyll's incremental build features

## Security

### Dependency Updates
- Monitor Dependabot alerts in GitHub
- Update dependencies regularly
- Test after updates before deploying

### Content Security
- Don't commit sensitive data
- Review external links regularly
- Keep contact information current

## Backup and Recovery

### Repository Backup
- GitHub repository is the source of truth
- Clone repository for local backup
- All content is version-controlled

### Rollback Procedure
```bash
# View commit history
git log --oneline

# Revert to previous commit
git revert <commit-hash>

# Or reset to specific commit (use cautiously)
git reset --hard <commit-hash>
```

## Documentation

### Keep Updated
- README.md - Main repository documentation
- technical-setup.md - Technical architecture details
- This prompts directory - Development guides

### Documentation Standards
- Clear and concise
- Include code examples
- Keep up-to-date with changes
- Link to external resources

## Contact and Support

### Project Maintainers
See `_data/home.json` for current contact information

### External Resources
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Monitoring and Analytics

### GitHub Pages Analytics
- Built-in traffic analytics available
- Check repository Insights tab

### Uptime
- GitHub Pages provides 99.9% uptime SLA
- No additional monitoring needed for basic setup

## Future Enhancements

### Potential Improvements
- Custom domain configuration
- Enhanced SEO optimization
- Additional project filtering/search
- Contact form integration
- Analytics integration (Google Analytics, etc.)
