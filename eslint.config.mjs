import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [".dist/**", ".next-stale/**", ".tmp/**"]
  }
];

export default config;
