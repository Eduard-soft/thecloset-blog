import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.scss'
import { Section, Cover, SocialNetworks, BuyMeCoffee, Title } from '@/components'

import { loadPosts } from './api/posts';

//const inter = Inter({ subsets: ['latin'] })
const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts,total}) {
  return (
    <div>
      <Section>
        <Cover title="THE<br /> CLOSET"/>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section> 
    </div>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP)

  return {
    props: {
      initialPosts: posts,
      total
    }
  }
}

