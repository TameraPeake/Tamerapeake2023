const config = {
    tailwindjs: "./tailwind.config.js",
    port: 9050, // default port
    // purgecss options
    purgecss: {
      content: ["src/**/*.{html,js,php}"],
      ...
    },
    // imagemin options for image optimizations
    imagemin: {
      png: [0.7, 0.7], // range between min (0) and max (1) as quality - 70% with current values for png images,
      jpeg: 70, // % of compression for jpg, jpeg images
    },
  };
  
  // tailwind plugins
  const plugins = {
    typography: true, // set to false to disable
    forms: true,
    containerQueries: true,
  };
