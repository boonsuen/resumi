const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const App = path.resolve(`./src/components/App.js`)
  createPage({
    path: '/app',
    matchPath: "/app/*",
    component: App,
    context: {}
  });
};