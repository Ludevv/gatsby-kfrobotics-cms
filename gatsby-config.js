require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "gatsby-kfrobotics",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "K.F. Robotics",
        short_name: "KFRobotics",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rubik", "Roboto", "Audiowide"],
        },
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
