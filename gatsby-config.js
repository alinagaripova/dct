module.exports = {
    pathPrefix: "/dct",
    siteMetadata: {
        title: `Gatsby`,
    },
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "LIST",
                fieldName: "list",
                url: "https://dct.uslugi.kzn.ru/graphql",
            },
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "SHOWFORM",
                fieldName: "showform",
                url: "https://dct.uslugi.kzn.ru/graphql",
            },
        }

    ],
};
