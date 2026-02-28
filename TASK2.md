# paste the above content → Ctrl+O, Enter → Ctrl+X# Task #2: CSS Computed vs Source Mapping

## Selected Element
`.card` div (includes `<h1>` and `<button>`)  

This element has non-trivial styling because its final appearance is affected by:

- SCSS variables (`$primary-color`, `$secondary-color`, `$font-stack`)  
- Nested rules (`.card h1`, `.card button`)  
- Mixins (`@include button-style`)  
- Flattening and minification from Vite build  

---

## CSS Property Analysis

| Property | Computed Value | Styles Panel Rule | Generated CSS File & Line | Original SCSS Source |
|----------|----------------|-----------------|--------------------------|--------------------|
| background-color | #ffffff | `.card { background: white; }` | `dist/assets/index-A8Wn-Kjn.css:1:234` | `src/scss/main.scss:12` |
| color | #4f46e5 | `.card h1 { color: $primary-color; }` | `dist/assets/index-A8Wn-Kjn.css:2:45` | `src/scss/_variables.scss + main.scss` |
| padding | 40px | `.card { padding: 40px; }` | `dist/assets/index-A8Wn-Kjn.css:1:210` | `src/scss/main.scss:13` |
| border-radius | 16px | `.card { border-radius: 16px; }` | `dist/assets/index-A8Wn-Kjn.css:1:250` | `src/scss/main.scss:14` |
| box-shadow | 0 10px 30px rgba(0,0,0,0.1) | `.card { box-shadow: 0 10px 30px rgba(0,0,0,0.1); }` | `dist/assets/index-A8Wn-Kjn.css:1:280` | `src/scss/main.scss:15` |

> **How this was done:**  
> 1. Open project in Chrome, select `.card` in Elements tab.  
> 2. In **Computed** panel, check the final value of each property.  
> 3. In **Styles** panel, trace the CSS rule that produced the computed value.  
> 4. Check `dist/assets/index-xxxx.css` for generated CSS line/column (Vite minifies the file, so exact lines may vary).  
> 5. Use source maps (inlined or via DevTools) to trace back to original SCSS source.

---

## Ambiguities & Mapping Challenges

1. **Variables:** DevTools shows final computed color (#4f46e5), but the original SCSS variable (`$primary-color`) is not visible.  
2. **Nested Rules Flattened:** SCSS nested selectors are flattened in generated CSS, losing nesting hierarchy.  
3. **Minification Effects:** Vite compresses CSS into single-line/minified form, making line/column numbers hard to correlate with original SCSS.  

---

### Notes

- This mapping demonstrates how modern tooling transforms authored CSS into optimized browser-ready CSS while maintaining source maps for debugging.  
- Source maps allow tracing most values back to SCSS, but some complex interactions (mixins, variables, nested selectors) can make tracing less straightforward.  

