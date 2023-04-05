import Head from 'next/head';
import Image from 'next/image';
import React, {useState} from 'react'
import { Section,
         Cover,
         SocialNetworks,
         BuyMeCoffee,
         PostGrid,
         Post } from '@/components'

import {loadPosts} from './api/posts';

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts,total}) {

 const [posts, setPosts] = useState(initialPosts);
  return (
    <div>
      <Section>
        <Cover title="THE<br /> CLOSET"/>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post>
              key={post.slug.current}
              {...post}
            </Post>
          ))}
        </PostGrid>
      </Section> 
    </div>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)

  return {
    props: {
      initialPosts: posts,
      total
    }
  }
}

