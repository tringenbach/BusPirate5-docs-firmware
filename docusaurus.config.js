// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bus Pirate 5 Firmware',
  tagline: 'Universal Open Source Hacking Tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://firmware.buspirate.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dangerousprototypes', // Usually your GitHub org/user name.
  projectName: 'buspirate5-docs-firmware', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			    routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DangerousPrototypes',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/danger.png',
      navbar: {
        //title: 'Bus Pirate v5',
        logo: {
          alt: 'Bus Pirate Docs logo',
          src: 'img/danger.png',
        },
        items: [
          {
            to: 'https://buspirate.com',
            label: 'Bus Pirate v5',
            position: 'left',
          },
          {
            to: 'https://hardware.buspirate.com',
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hardware',
          },		            
          {
            to: 'https://firmware.buspirate.com',
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Firmware',
          }, 
          {
            to: 'https://forum.buspirate.com',
            label: 'Forum',
            position: 'left',
          },     
          {
            to: 'https://buspirate.com/about',
            label: 'About',
            position: 'left',
          },                  
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/DangerousPrototypes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Distributors',
            items: [
              {
                label: 'Dirty PCBs',
                to: 'https://dirtypcbs.com',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: 'introduction',
              },
              {
                label: 'Hardware',
                to: 'https://hardware.buspirate.com',
              },
              {
                label: 'Firmware',
                to: 'https://firmware.buspirate.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                to: 'https://forum.buspirate.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://buspirate.com',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/DangerousPrototypes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Where Labs, LLC. Built with Open Source.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
