/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../../lib/data'
// import { ArticleJsonLd, NextSeo } from 'next-seo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  // const SEO = {
  //   title: 'Learn how SEO can help your business | Blog | Bowie SEO',
  //   description:
  //     'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
  //   type: 'website',
  //   canonical: 'https://bowieseo.com/blog',
  //   openGraph: {
  //     title: 'Learn how SEO can help your business | Blog | Bowie SEO',
  //     description:
  //       'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
  //     type: 'website',
  //   },
  // }
  return (
    <>
      {/* <ArticleJsonLd
        url="https://bowieseo.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization."
      />
      <NextSeo {...SEO} /> */}
      <Navbar />
      <section>
        <div className="blog-container">
          <h1 className="title">News & Events</h1>
        </div>
      </section>
      <BlogMain>
        <div className="large-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <div className="event">
                  <Link href={`/${post.slug}`} passHref>
                    <div>
                      <img
                        className="news-img"
                        src={post.coverImage.url}
                        alt={post.title}
                        loading="lazy"
                        title={post.title}
                      />
                      <div className="blog-info">
                        <h2>{post.postTitle}</h2>
                        <p>{post.excerpt}</p>
                        <a>Read more</a>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogMain>
      <Footer />
    </>
  )
}

const BlogMain = styled.main`
  .event {
    ${
      '' /* border: 1px solid #ddd;
    border-radius: 20px;
    margin-bottom: 2rem;
    height: 700px; */
    }

    .blog-info {
      border: 1px solid #ddd;
      border-radius: 0 0 20px 20px;
      margin-bottom: 2rem;
      height: 400px;
      padding: 2rem;

      h2 {
        font-size: 1.4rem;
      }
    }
  }

  .large-container {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
`
