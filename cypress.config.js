const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    experimentalStudio:true,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
     
    },
  },
});
