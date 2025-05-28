import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Твоя шаурма - пользовательская документация</span>,
  footer: {
    text: 'Создано А.В. Киселем, ОНИКС, 2025',
  },
  search: {
    component: null
  },
  feedback: {content: null},
  editLink: {component: null},
  toc: {title: "На этой странице"},
  gitTimestamp: ''
}

export default config
