import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <img
      src='https://d1k3yc88qskd8x.cloudfront.net/aurevo/images/logos/logo-blue-light.png'
      height={50}
      width={50}
    />
  ),
  project: {
    link: 'https://github.com/aurevodev/docs',
  },
  chat: {
    link: 'https://discord.gg/aurevo',
  },
  docsRepositoryBase: 'https://github.com/aurevodev/docs',
  search: {
    placeholder: 'Search documentation',
  },
  footer: {
    text: (
      <span>
        Copyright © {new Date().getFullYear()} Velta, LLC. All rights reserved.
      </span>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: 'Improve →',
  },
  head: function Head({ title }: any) {
    const router = useRouter()
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          href={`https://d1k3yc88qskd8x.cloudfront.net/aurevo/images/logos/logo-blue-light.png`}
          type='image/png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:type' content='website' />
        <meta name='og:title' content={title} />

        <meta
          property='og:url'
          content={`https://docs.aurevo.us${router.asPath}`}
        />
        <meta property='og:site_name' content='Aurevo Documentation' />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Aurevo',
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ textAlign: 'center' }}>{title}</div>
      }
      if (title) {
        return <>{title}</>
      }
      return <>{title}</>
    },
  },
  darkMode: true,
}

export default config
