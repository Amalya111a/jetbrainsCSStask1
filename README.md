# JetBrains CSS DevTools Task

## Setup & Run
1. Clone the repo and enter project folder:
```bash
git clone [https://github.com/Amalya111a/jetbrainsCSStask1.git](https://github.com/Amalya111a/jetbrainsCSStask1.git)
cd jetbrainsCSStask1
npm install
npm run dev

## CSS Transformation

## The authored CSS is transformed from SCSS into production-ready CSS:

   ## Compilation: Modular SCSS files using @use and @mixins are flattened into standard CSS.

##    Minification: Vite uses esbuild to remove whitespace and comments, creating a single-line file for better performance.

##    Bundling: All styles are combined into a single versioned asset.

## Generated Assets & Source Maps

  ##  Location: After running npm run build, you can find the final CSS in dist/assets/index-[hash].css.

##    Source Maps: Enabled in vite.config.js. If the file is small, the map is inlined at the bottom of the CSS file as a Base64 string. This allows DevTools to show you the original SCSS lines during debugging.





