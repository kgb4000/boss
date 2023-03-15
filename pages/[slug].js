/* eslint-disable @next/next/no-img-element */
import { useState, React } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import { getPost, getPosts, getPostsSlugs, getRecentPosts } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
// import { NextSeo, ArticleJsonLd } from 'next-seo'
import AuthorBio from '../components/AuthorBio'
import ShareBtn from '../components/ShareBtn'
import Layout from '../components/Layout/Layout'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default function Articles({ post }) {
  const [isOpen, setOpen] = useState(false)
  // const SEO = {
  //   title: post.title,
  //   description: post.excerpt,
  //   url: `https://bossprograms.org/${post.slug}`,
  //   canonical: `https://bossprograms.org/${post.slug}`,
  //   type: 'article',
  //   openGraph: {
  //     type: 'article',
  //     description: post.excerpt,
  //     // article: {
  //     //   publishedTime: post.date,
  //     //   authors: [`https://bossprograms.org/authors/@${post.author.name}`],
  //     // },
  //     images: [
  //       {
  //         url: post.coverImage.url,
  //         width: post.coverImage.width,
  //         height: post.coverImage.height,
  //         alt: post.title,
  //       },
  //     ],
  //     locale: 'en_US',
  //     url: `https://bossprograms.org/${post.slug}`,
  //     site_name: 'Bowie SEO',
  //   },
  // }

  return (
    <>
      {/* <ArticleJsonLd
        url={`https://bossprograms.org/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        alt={post.title}
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        publisherName={post.author.name}
        publisherLogo="https://bossprograms.org/public/images/logo.jpg"
        description={post.excerpt}
      /> */}

      {/* <NextSeo {...SEO} /> */}
      <Layout>
        <BlogContent>
          <div className="blog-container author-info">
            <h1 className="title">{post.postTitle}</h1>
            <img
              src={[post.coverImage.url]}
              alt={post.title}
              title={post.title}
              loading="lazy"
            />
            <ShareBtn shareLink={`https://bossprograms.org/${post.slug}`} />
            <RichText content={post.content.raw} />
            <ShareBtn shareLink={`https://bossprograms.org/${post.slug}`} />
            <AuthorBio
              authorImg={post.author.photo.url}
              authorName={post.author.name}
              authorBio={post.author.bio}
            />
            <Link href="/news">
              <Button>Back to News</Button>
            </Link>
          </div>
        </BlogContent>
      </Layout>
    </>
  )
}

const BlogContent = styled.main`
  .author-info {
    h1 {
      font-size: 1.8rem;
      margin: 2rem 0;

      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h2 {
      text-align: left;
      margin-left: 0;
    }
    img {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`
