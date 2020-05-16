module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected 
                  humour, or randomised words which don't look even slightly believable.`,
    author: `@gatsbyjs`,
    copyright: `Copyright - All Rights Reserved`,
    siteUrl: `https://www.example.com`,
    SocialMedia: {
      facebook: `https://pt-br.facebook.com/`,
      github: `https://github.com`,
      twitter: `https://twitter.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-marvel",
      options: {
        publicKey: "sua chave publica",
        privateKey: "sua chave privada",
        queries: [
          {
            entity: "events",
            entityFilter: {
              id: 314,
            },
          },
        ],
      },
    },
  ],
}
