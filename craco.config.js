module.explores = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  },
  babel: {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-syntax-dynamic-import"]
  }
}
