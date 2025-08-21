# ISE Course

Welcome to the ISE (Industrial Software Engineering) course repository. This repository contains the source code and content for the ISE course website.

## Table of Contents

- [ISE Course](#ise-course)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Live Website](#live-website)
  - [Technical Architecture](#technical-architecture)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
  - [Building the Project](#building-the-project)
  - [Contributing](#contributing)
  - [License](#license)

## About

The ISE (Industrial Software Engineering) course is designed to provide students with hands-on experience in industrial software engineering while facilitating meaningful partnerships between academia and industry. The course includes various projects and activities that simulate real-world software development scenarios, with direct involvement from industry partners.

### Intended Audience

This portal is specifically designed for:

- **Industry professionals** seeking to collaborate with academic institutions
- **Software companies** interested in partnering with students on real-world projects
- **Technology organizations** looking for innovative solutions and fresh perspectives
- **Potential partners** considering academic-industry collaboration opportunities

## Live Website

🌐 **Website**: [https://ind-sw-eng.github.io/ise/](https://ind-sw-eng.github.io/ise/)

The ISE course website is hosted on GitHub Pages and showcases industry partnerships, student projects, and collaboration opportunities between IT University of Copenhagen and various companies.

## Technical Architecture

This project uses a modern, cost-effective technical stack:

- **Hosting**: GitHub Pages (free hosting)
- **Static Site Generator**: Jekyll
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Actions (automated)
- **Content Management**: Markdown files

> 📖 **For detailed technical information** about hosting, deployment, Jekyll setup, and project architecture, see [TECHNICAL_SETUP.md](TECHNICAL_SETUP.md)


## Getting Started

To get started with the project, clone the repository and install the necessary dependencies.

```sh
git clone https://github.com/ind-sw-eng/ise.git
cd ise
bundle install
```

## Project Structure

The project has the following structure:

- `_config.yml`: Configuration file for the Jekyll site.
- `_data/`: Contains data files in JSON format.
- `_includes/`: Contains reusable HTML components.
- `_layouts/`: Contains layout templates for the site.
- `_pages/`: Contains markdown files for different pages.
- `_projects/`: Contains markdown files for project descriptions.
- `assets/`: Contains CSS and JavaScript files.
- `.github/`: Contains GitHub workflows.
- `Gemfile`: Specifies the Ruby gems required for the project.
- `LICENSE`: License file for the project.
- `README.md`: This file.
- `tailwind.config.js`: Configuration file for Tailwind CSS.

## Dependencies

The project uses the following dependencies:

- Jekyll
- Tailwind CSS
- Various Jekyll plugins (listed in `Gemfile`)

## Building the Project

To build the project, run the following command:

```sh
bundle exec jekyll build
```

To serve the project locally, run:

```sh
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/ise/`

> **Note**: Make sure you have Ruby installed on your system. The project requires Ruby 3.1+ for optimal compatibility.

## Contributing

We welcome contributions from the community. To contribute, please fork the repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


