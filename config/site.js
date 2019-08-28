module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Ivan', // Navigation and Site Title
  siteTitleAlt: 'Ivan - Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Ivan', // short_name for manifest
  siteHeadline: 'Graphic Designer learning to code', // Headline for schema.org JSONLD
  siteUrl: 'https://emilia.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Dark One-Page portfolio with cards & detailed project views',
  author: 'Ivan', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emilia', // Twitter Username
  ogSiteName: 'emilia', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-47519312-4',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/ivanha.png',
  name: 'ivan ha',
  location: 'Toronto',
  socialMedia: [
    {
      url: 'https://twitter.com/lekoarts_de',
      name: 'Twitter',
    },
    {
      url: 'https://www.instagram.com/lekoarts.de',
      name: 'Instagram',
    },
    {
      url: 'https://www.lekoarts.de/en',
      name: 'Homepage',
    },
  ],
}
