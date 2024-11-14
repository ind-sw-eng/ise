# ISE

## Project Overview

This project is a website of the ISE course at ITU and is meant to provide information about the course.

## Project Structure

```
.github/
	workflows/
		deploy.yml
asset/
public/
	fonts/
		HackDejavu.woff2
		HackDejavuBold.woff2
		HackDejavuItalic.woff2
	images/
	selfie.md
README.md
src/
	components/
		Blog/
			...
		Footer/
            ...
		Header/
            ...
	env.d.ts
	layouts/
		BaseLayout.astro
		Head.astro
		MarkdownPostLayout.astro
	lib/
		utils.ts
	pages/
		blog/
		index.astro
		posts/
		rss.xml.js
	scripts/
		animate.ts
	styles/
		global.css
.gitignore
astro.config.mjs
LICENSE
package.json
pnpm-lock.yaml
tailwind.config.mjs
tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd ise
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

### Running the Project

To start the development server, run:
```sh
pnpm dev
```

### Building the Project

To build the project for production, run:
```sh
pnpm build
```

### Deploying the Project

The deployment process is managed through GitHub Actions. You can find the workflow configuration in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Project Layouts

- **BaseLayout**: [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- **Head**: [src/layouts/Head.astro](src/layouts/Head.astro)
- **MarkdownPostLayout**: [src/layouts/MarkdownPostLayout.astro](src/layouts/MarkdownPostLayout.astro)

## Utilities

- **Utils**: [src/lib/utils.ts](src/lib/utils.ts)

## Example Blog Post

An example blog post can be found in [src/pages/posts/fff7d006-6e31-81d1-b5b9-c9908760f04d.md](src/pages/posts/fff7d006-6e31-81d1-b5b9-c9908760f04d.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to customize this template to better fit your project's specifics.