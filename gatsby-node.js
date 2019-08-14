exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query {
        list{
            dctSchemasInfo {
                path
            }
        }
    }
  `);
    data.list.dctSchemasInfo.forEach(schema => {
        const slug = schema.path;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/showform.js`),
            context: { slug: slug }
        })
    })
};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.onCreateWebpackConfig = ({
                                     actions,
                                     stage,
                                     getConfig
                                 }) => {
    actions.setWebpackConfig({
        plugins: [new MiniCssExtractPlugin({})],
    })
    // needed to bodge in new css entry points
    if (stage.includes('javascript')) {
        let config = getConfig()
        config.entry["style"] = './src/css/style.css';
        config.entry["responsive"] = './src/css/responsive.css';
        config.optimization.splitChunks.cacheGroups.styles = {}
        actions.replaceWebpackConfig(config)
    }
}

