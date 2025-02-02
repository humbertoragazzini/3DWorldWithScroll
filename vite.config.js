const path = require("path");
console.log(path.resolve(__dirname, "src"));

export default {
  root: "./src",
  publicDir: "../static",
  base: "./",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~jquery": path.resolve(__dirname, "node_modules/jquery"),
    },
  },
  // plugins: [tailwindcss()],
  server: {
    host: true, // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
};
