exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query {
        list{
            dctSchemasInfo {
                path
            }
        }
  }
  `)
    data.list.dctSchemasInfo.forEach(schema => {
        const slug = schema.path
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/showform.js`),
            context: { slug: slug }
        })
    })
}