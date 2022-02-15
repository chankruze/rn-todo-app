/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Jan 26 2022 21:42:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
