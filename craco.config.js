const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@container": path.resolve(__dirname, "src/components/container/"),
      "@ui": path.resolve(__dirname, "src/components/ui/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
  },
};
