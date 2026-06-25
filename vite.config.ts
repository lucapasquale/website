import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vitejs.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/routeTree.gen.ts"],
    experimentalSortImports: {},
    experimentalTailwindcss: {
      stylesheet: "./src/index.css",
      functions: ["clsx", "cn", "cva", "tw"],
    },
  },
  lint: {
    ignorePatterns: ["src/routeTree.gen.ts"],
    plugins: ["typescript", "react", "react-perf", "oxc", "import", "promise", "unicorn"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: lazyPlugins(() => [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ]),
});
