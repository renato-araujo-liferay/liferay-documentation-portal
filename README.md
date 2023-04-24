# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

### Run

```
$ npx http-server ./build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Regular issues

Fix Mermaid Color theme:

```
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest @docusaurus/theme-search-algolia@latest @docusaurus/module-type-aliases@latest