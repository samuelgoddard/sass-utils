module.exports = {
  title: '@SASSUtils',
  description: 'A small but powerful collection of agnostic, super easy to implement utilities and tools to speed up your front-end workflow',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig:{
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'http://github.com' },
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/configuration',
          '/guide/main'
        ]
      },
      {
        title: 'About',
        collapsable: false,
        children: [
          '/about/'
        ]
      }
    ]
  }
}