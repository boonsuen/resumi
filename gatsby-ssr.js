const React = require("react");
const GlobalStyle = require("./src/components/GlobalStyle.css").default;
const { fontFaceRules } = require("./src/components/GlobalStyle.css");
const { Helmet } = require("react-helmet");

const GraphikRegularWoff2 = require("./src/assets/fonts/Graphik-Regular-Web.woff2");
const GraphikMediumWoff2 = require("./src/assets/fonts/Graphik-Medium-Web.woff2");

exports.wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="preload" as="font" href={GraphikRegularWoff2} type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href={GraphikMediumWoff2} type="font/woff2" crossOrigin="anonymous" />
        <style>{fontFaceRules}</style>
      </Helmet>
      <GlobalStyle />
      {element}
    </React.Fragment>
  );
};