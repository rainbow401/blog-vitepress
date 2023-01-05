import { defineConfig } from 'vitepress';

export default defineConfig({
    head: [ // 增加自定义标签
      ['link', { rel: 'icon', href: '/blog-vitepress/favicon.ico' }] // 标签图标
    ],
    base: '/blog-vitepress/', // 仓库名称
    lastUpdated: true, // 开启更新时间
    title: '自定义的 title', // 左上角标题
    outDir: '../dist', // 编译路径
    description: '自定义的 description', // 网站描述
    themeConfig: { // 主题配置
        nav: [
          { text: 'Guide', link: '/guide/guide', activeMatch: '/guide/guide' },
          {
            text: '下拉选择框',
            items: [
              { text: 'options-1', link: '/' },
              { text: 'options-2', link: 'http://www.baidu.com' }
            ]
          }
        ],
        socialLinks: [{ icon: "github", link: "https://github.com" }],
        sidebar: { // 导航，路由匹配
            '/guide/': [
              {
                text: 'Guide',
                items: [
                  { text: 'Index', link: '/guide/index' }, // /guide/index.md
                  { text: 'One', link: '/guide/one' }, // /guide/one.md
                  { text: 'Two', link: '/guide/two' } // /guide/two.md
                ]
              }
            ]
        },
        docFooter: { prev: '上一篇', next: '下一篇' }, // 文章页脚
        footer: { // 网站页脚
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Yan Zhi Hao'
        },
        editLink: { // 编辑跳转
            pattern: 'https://github.com/yanzhihao9/blog-vitepress/tree/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdatedText: "最近更新时间", // 文章更新时间
        logo: '/icon.jpg' // 左上角图标
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
    bodyBgImg: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',

});

// module.exports = {
//   bodyBgImg: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
// }