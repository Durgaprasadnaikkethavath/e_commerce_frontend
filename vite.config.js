import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5173/",
    },
  },
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import styledComponents from "vite-plugin-styled-components";

// export default defineConfig({
//   plugins: [react(), styledComponents()],
// });
