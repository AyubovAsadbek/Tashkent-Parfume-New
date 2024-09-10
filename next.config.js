// @ts-check

const path = require("path");
const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.resolve.alias["form"] = path.resolve(__dirname, "components/form");

    return config;
  },
};

module.exports = withNextIntl(config);
