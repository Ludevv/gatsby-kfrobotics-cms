require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "gatsby-kfrobotics",
    titleTemplate: "KF Robotics",
    description:
      "Specjalizujemy się w tworzeniu gotowych bezzałogowych jednostek pływających do pomiarów batymetrycznych.",
    url: "https://kfrobotics.netlify.app/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "K.F. Robotics",
        short_name: "KFRobotics",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rubik", "Roboto", "Audiowide", "Roboto Slab"],
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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VFZ9H7VX3S",
      },
    },
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
