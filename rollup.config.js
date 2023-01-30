export default {
  input: "index.js",
  output: [
    {
      format: "es",
      file: "dist/index.es.js",
      sourcemap: true,
    },
    {
      format: "cjs",
      file: "dist/index.cjs.js",
      sourcemap: true,
    },
    {
      format: "umd",
      name: "freeloop",
      file: "dist/index.umd.js",
      sourcemap: true,
    },
  ],
};
