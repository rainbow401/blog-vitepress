import { defineConfig } from 'vitepress';

const baseUrl = '/blog-vitepress/';
export default defineConfig({
  base: '/blog-vitepress/',
    lastUpdated: true,
    title: '自定义的 title',
    outDir: '../dist',
    description: '自定义的 description',
    themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/what-is-vitepress' },
          {
            text: '下拉选择框',
            items: [
              { text: 'options-1', link: '/' },
              { text: 'options-2', link: 'http://www.baidu.com' }
            ]
          }
        ],
        socialLinks: [{ icon: "github", link: "https://github.com" }],
        sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                items: [
                  { text: 'Index', link: '/guide/' }, // /guide/index.md
                  { text: 'One', link: '/guide/one' }, // /guide/one.md
                  { text: 'Two', link: '/guide/two' } // /guide/two.md
                ]
              }
            ]
        },
        docFooter: { prev: '上一篇', next: '下一篇' },
        footer: { // 网站页脚
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdatedText: "最近更新时间", // 文章更新时间
        logo: '/icon.jpg'
    },
    // locales: { // 国际化
    //     "/": {
    //       lang: "zh-CN",
    //       title: "自定义的 title",
    //       description: "自定义的 description"
    //     },
    //     "/en/": {
    //       lang: "en-US",
    //       title: "Custom title",
    //       description: "Custom description"
    //     }
    // },
});