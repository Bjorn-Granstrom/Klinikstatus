import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  base: '/klinikstatus/',
  title: "Klinikstatus",
  description: "Yes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Kirurgi',
        collapsed: false,
        items: [
          { text: 'Appendicit', link: '/klinikstatus/docs/src/kirurgi/appendicit'},  
        ],        
      },
      {
        text: 'Internmedicin',
        collapsed: false,
        items: [
          { text: 'Erysipelas', link: '/klinikstatus/internmedicin/erysipelas'}, 
        ],
      },
      {
        text: 'Kardiologi',
        collapsed: false,
        items: [
          { text: 'STEMI', link: '/klinikstatus/kardiologi/stemi'},
        ],
     },
     {
        text: 'Infektion',
        collapsed: false,
        items: [
          { text: 'Diagnos 1'}
      ],
    },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
