// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jo Lares',
  tagline: 'A website on building stuff, and things like that.',
  favicon: 'img/favicon.ico',

  // Specifies the production url of the site here
  url: 'https://jolares.github.io.',
  // Specifies the /<baseUrl>/ pathname under which the site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  /* GitHub Pages deployment config. Note: this is onnly needed when using GitHub pages */
  organizationName: 'jolares', // Usually the GitHub org/user name.
  projectName: 'jolares.github.io', // Usually the repo name.
  deploymentBranch: 'github-pages',
  // Specifies whether GitHub Pages adds a trailing slash to Docusaurus URLs.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may
  // want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jolares/jolares.github.io/tree/master/apps/jolares-web/docs/',

          remarkPlugins: [math],  // Needed for KaTex support.
          rehypePlugins: [katex], // Needed for KaTex support.
        },
        blog: {
          blogTitle: 'Jo Lares blog!',
          blogDescription: 'A blog about building stuff!',
          postsPerPage: 10, // Valid values are 'ALL' or a number.

          /* Blog Sidebar */
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL', // Valid values are 'ALL' or a number.

          /* Reading Time */
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          /* Feed */
          // feedOptions: {
          //   type: 'all', // 'rss' | 'atom' | 'json' | null (disables feed generation)
          //   copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          //   createFeedItems: async (params) => {
          //     const {blogPosts, defaultCreateFeedItems, ...rest} = params;
          //     return defaultCreateFeedItems({
          //       // keep only the 10 most recent blog posts in the feed
          //       blogPosts: blogPosts.filter((item, index) => index < 10),
          //       ...rest,
          //     });
          //   },
          // },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jolares/jolares.github.io/tree/master/apps/jolares-web/blog/',

          remarkPlugins: [math], // Needed for KaTex support.
          rehypePlugins: [katex], // Needed for KaTex support.
        },
        
        /* Theme */
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  stylesheets: [
    // Needed for KaTex support.
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // options are 'light' or 'dark'
        disableSwitch: false, // Hides the switch in the navbar.
        // Whether to use the prefers-color-scheme media-query, using user
        // system preferences, instead of the hardcoded defaultMode.
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Jo Lares',
        logo: {
          alt: 'Jo Lares logo',
          src: 'img/navbar-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/jolares',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jolares/jolares.github.io',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jolares',
              },
              {
                label: 'Report issues',
                href: 'https://github.com/jolares/jolares.github.io/issues/new',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/jo_lares',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jo Lares`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
