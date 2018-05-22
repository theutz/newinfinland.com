module.exports = {
  siteMetadata: {
    title: 'New In Finland',
    keywords: ['Finland', 'expat', 'new', 'tourist', 'travel', 'move'],
    description: 'A site for people that are new to Finland',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['tajawal'],
      },
    },
  ],
}
