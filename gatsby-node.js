const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const App = path.resolve(`src/components/app.js`)
  createPage({
    path: 'app',
    component: App,
    context: {}
  })
};