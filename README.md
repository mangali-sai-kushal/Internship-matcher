
# ElevateMatch - Tier 2/3 Internship Platform 🚀

ElevateMatch is an intelligent internship matching platform.

## 🚀 Fix for GitHub Pages (White Screen)

If your GitHub Pages site is blank, it's because you need to **build** the project first. Browsers cannot read `.tsx` files directly.

### Steps to Fix:

1.  **Build the project locally**:
    ```bash
    npm install
    npm run build
    ```
2.  **Identify the `dist` folder**:
    After running the build, a folder named `dist` will be created. This contains the production-ready code.
3.  **Deploy the `dist` folder**:
    You have two main options:
    - **Option A (Manual)**: Upload ONLY the contents of the `dist` folder to your repository (or a branch named `gh-pages`).
    - **Option B (Recommended)**: Use the `gh-pages` package:
      ```bash
      npm install gh-pages --save-dev
      ```
      Add this to your `package.json` scripts:
      `"deploy": "gh-pages -d dist"`
      Then run: `npm run deploy`

## 🔑 Environment Variables

For Gemini to work on your deployed site, you must ensure the `process.env.API_KEY` is available. If using Vite, you might need to prefix it with `VITE_` in your `.env` and code, or configure your CI/CD (like GitHub Actions) to inject the secret.

## 📝 Note on Paths
The `vite.config.ts` is configured with `base: './'` to ensure your assets load correctly on `username.github.io/Internship-matcher/`.
