module.exports = {
  roots: [
    "src",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
    ".*\\.vue$": `@vue/vue3-jest`,
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
    'vue',
  ],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
};
