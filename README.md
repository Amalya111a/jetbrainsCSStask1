# JetBrains CSS DevTools Task #1

This project demonstrates the use of **SCSS**, **Vite**, and **Source Maps** to show how modern CSS is transformed for production.


## 🚀 Setup & Run Instructions

1. **Clone the repository and enter the project folder:**
   ```bash
   git clone [https://github.com/Amalya111a/jetbrainsCSStask1.git](https://github.com/Amalya111a/jetbrainsCSStask1.git)
   cd jetbrainsCSStask1
 2. Install dependencies:
    npm install
3. Run the development server:
   npm run build

   CSS Transformation

The authored CSS undergoes a multi-step transformation process from SCSS to production-ready CSS:

Compilation: Modular SCSS files (using @use and @mixins) are flattened and compiled into standard CSS.

Minification: Vite uses esbuild to remove whitespace and comments, creating a single-line file for optimized browser performance.

Bundling: All styles are combined into a single versioned asset file.
    
Generated Assets & Source Maps

Location: After running npm run build, the final CSS is located in the dist/assets/index-[hash].css file.

Source Maps: Source maps are enabled in the vite.config.js file.

 Note: If the CSS file is small, Vite inlines the map at the bottom of the CSS file as a Base64 string.

 This allows Browser DevTools to map the production code back to the original SCSS lines for easier debugging.
        
