const {
  override,
  addPostcssPlugins,
  addBabelPlugin,
  addWebpackAlias,
} = require("customize-cra");
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

// module.exports = override( addPostcssPlugins([require("tailwindcss")]));
module.exports = (env, config) => {
  // console.log(env, "config", config);
  const cssPostProccPlugins = [
    tailwind("./tailwind.js"),
    require("autoprefixer"),
  ];
  if (process.env.NODE_ENV === "production") {
    cssPostProccPlugins.push(
      purgecss({
        content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        whitelist: [],
        whitelistPatterns: [/(ant|body|html|zoom|h1|h2|h3|h4|h5|h6|p|drag)/],
        whitelistPatternsChildren: [
          /(ant|window-mode|drag|data-slate|force|tabindex)/,
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      })
    );
  }

  const overridePlugins = [
    addPostcssPlugins(cssPostProccPlugins),
    process.env.NODE_ENV !== "production"
      ? addBabelPlugin("react-hot-loader/babel")
      : null,
    addWebpackAlias({
      "react-dom":
        process.env.NODE_ENV === "production"
          ? "react-dom"
          : "@hot-loader/react-dom",
    }),
  ];
  return override(...overridePlugins)(env, config);
};
