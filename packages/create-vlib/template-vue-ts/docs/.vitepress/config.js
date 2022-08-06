import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { sidebar } from './sidebar.js';
import { resolve } from 'path';

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/ruabick' : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '@{projectName}',
      description: '@{description}',
    },
    '/en/': {
      lang: 'en-US',
      title: '@{projectName}',
      description: '@{description}',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    localeLinks: {
      text: '',
      items: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' },
      ],
    },
    nav: [{ text: '指南', link: '/guide' }],
    sidebar,
    algolia: {},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/@{user}/@{projectName}' },
    ],
  },
  vue: {},
  vite: {
    plugins: [genTemp()],
    resolve: {
      alias: {
        '@{projectName}': resolve('./src/'),
      },
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
});