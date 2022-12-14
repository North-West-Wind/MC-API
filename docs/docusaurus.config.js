module.exports = {
  title: 'MC-API',
  tagline: 'A library for interacting with API that is related to Minecraft.',
  url: 'https://eve0415.github.io',
  baseUrl: '/MC-API/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eve0415',
  projectName: 'MC-API',
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        allReflectionsHaveOwnDocument: true,
        docsRoot: 'docs',
        entryPoints: [
          '../src/typings/index.ts',
          "../src/api/CurseForge/index.ts",
          "../src/api/Mojang/index.ts",
          "../src/api/PaperMC/index.ts"
        ],
        excludeExternals: true,
        excludePrivate: true,
        name: "MC-API",
        out: 'api',
        readme: "none",
        tsconfig: '../tsconfig.json',
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'MC-API',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mc-api.png',
      },
      items: [
        {
          to: 'docs/about/intro',
          activeBasePath: 'docs/about',
          label: 'Documentations',
          position: 'left',
        },
        {
          to: 'docs/api',
          activeBasePath: 'docs/api',
          label: 'API',
        },
        {
          href: 'https://github.com/eve0415/MC-API',
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
              to: 'docs/about/intro',
            },
            {
              label: 'Installation',
              to: 'docs/about/install',
            },
            {
              label: 'API',
              to: 'docs/api',
            }
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Minecraft',
              to: 'https://www.minecraft.net/',
            },
            {
              label: 'CurseForge',
              to: 'https://www.curseforge.com/',
            },
            {
              label: 'PaperMC',
              to: 'https://papermc.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/eveevekun',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eve0415/MC-API',
            },
          ],
        },
      ],
      copyright: `Copyright ?? ${new Date().getFullYear()} eve0415.`,
    },
    prism: {
      additionalLanguages: ['markdown'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/eve0415/MC-API/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
