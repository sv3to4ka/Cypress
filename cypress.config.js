const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 60000, // Set the page load timeout to 60 seconds or adjust as needed
});
