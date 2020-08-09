module.exports = {
  title: 'Kook.js',
  tagline: 'A progressive lego like Node.js framework for building efficient and scalable server-side applications.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/kook-logo.png',
  organizationName: 'Khankia', // Usually your GitHub org/user name.
  projectName: 'kookjs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,

    },
    navbar: {
      title: 'Kook.js',
      logo: {
        alt: 'Kook.js',
        src: 'img/kook-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: "https://www.khanakia.com/blog", label: 'Blog', position: 'left'},
        {href: "https://www.khanakia.com/contact", label: 'Contact', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kookjs/kook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Getting Started',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack Channel',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {href: "https://www.khanakia.com/blog", label: 'Blog'},
            {
              label: 'GitHub',
              href: 'https://github.com/kookjs/kook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kook.js, Powered by Khanakia Inc.`,
    },
  },

 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap",
    "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  ],
};
