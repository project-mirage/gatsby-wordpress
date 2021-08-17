module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "wordpress-test",
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "http://cms.promirage.tech/graphql",
            },
            schema: {
                typePrefix: `Wp`,
            },
            develop: {
                hardCacheMediaFiles: true,
            },
            type: {
                Post: {
                    limit:
                        process.env.NODE_ENV === `development`
                            ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                              50
                            : // and we don't actually need more than 5000 in production for this particular site
                              5000,
                },
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
