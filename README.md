# ISE Course

Welcome to the ISE (Industrial Software Engineering) course repository. This repository contains the source code and content for the ISE course website.

## Table of Contents

- [ISE Course](#ise-course)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
  - [Building the Project](#building-the-project)
  - [Contributing](#contributing)
  - [License](#license)

## About

The ISE course is designed to provide students with hands-on experience in industrial software engineering. The course includes various projects and activities that simulate real-world software development scenarios.

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

## Contributing

We welcome contributions from the community. To contribute, please fork the repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


