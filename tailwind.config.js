// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
}
