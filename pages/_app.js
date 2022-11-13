import Head from 'next/head'
import 'styles/global.scss'
import 'github-markdown-css'
import {useEffect} from 'react'

export default function App({Component, pageProps}) {
  return <>
    <Head>
      <title>我的博客 - Eriri</title>
      <meta name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
    </Head>
    <Component {...pageProps} />
  </>
}