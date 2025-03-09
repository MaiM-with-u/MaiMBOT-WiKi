import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs/',
  sidebar: [1.项目介绍]
})

const deploy = defineNoteConfig({
  dir: '部署教程',
  link: '/deploy/',
  sidebar: 'auto'
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [root,deploy]
})
