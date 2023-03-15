/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { React, useState } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'
import ModalVideo from 'react-modal-video'
import { getPosts } from '../lib/data'

import styled from 'styled-components'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

const donate = 'https://bossprograms.app.neoncrm.com/forms/donation-form'

const Home = ({ data }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Layout>
        <Index>
          <HeroSection
            backgroundImage="/images/headers/header-img.webp"
            backgroundHeight="90vh"
            heroText="Business of Student Success"
            subText="We position our BOSS Pillars and timeless success principles as the transformative engine in our boys’ lives to inspire, equip and empower them to soar"
            buttonText="Donate and Help us Today!"
            buttonLink={donate}
          />
          <section>
            <div className="large-container">
              <div className="grid">
                <img
                  src="images/headers/boss-index-cover-img.jpg"
                  className="shadow"
                  alt="Business of student success"
                  loading="lazy"
                />
                <div className="text">
                  <h2>BOSS - Business of Student Success</h2>
                  <p>
                    We equip BIPOC youth, especially economically disadvantaged
                    and boys of color with the tools and skills to succeed in
                    all aspects of their lives.
                  </p>
                  <p>
                    BOSS™ (Business Of Student Success) instills a mindset
                    within our boys that advances both individual excellence and
                    team mastery. The BOSS values are embedded in all that we
                    do, fostering our boys’ intellectual, physical, and
                    emotional well-being.
                  </p>
                  <p>
                    We leverage our BOSS Pillars and the power of timeless
                    success principles to inspire the pursuit of greatness in
                    schools, at home, and in the community. With an emphasis on
                    STEAM learning and the essential sharpening of critical
                    thinking skills, we challenge our boys to excel
                    professionally as well-rounded scholars, so they are
                    prepared and confident to shine in any career they choose.
                  </p>
                </div>
              </div>
              <div className="btn">
                <a
                  href="https://bossprograms.app.neoncrm.com/forms/student-application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Apply Today!</Button>
                </a>
              </div>
            </div>
          </section>
          <section className="counsel-sec">
            <div className="large-container">
              <h2 className="title">What We Do</h2>
              <div className="services">
                <Service>
                  <img
                    src="/images/inspire-white.png"
                    alt="Inspire our youth."
                    loading="lazy"
                  />
                  <h3>Inspire</h3>
                  <p>
                    Our boys and young men have endless possibilities within
                    them. BOSS inspires their passion, courage, and confidence
                    to skillfully transcend any limitations placed by given
                    realities or internal doubts. BOSS supports their interests,
                    fuels their dreams, and celebrates their pursuit of
                    greatness.
                  </p>
                </Service>
                <Service>
                  <img
                    src="/images/equip-white.png"
                    alt="Equip our youth to succeed."
                    loading="lazy"
                  />
                  <h3>Equip</h3>
                  <p>
                    Life is very rarely a straight and even path. Through the
                    BOSS program, our boys and young men develop the necessary
                    skill sets, mindsets, and resources to navigate life’s most
                    difficult twists and turns.
                  </p>
                </Service>
                <Service>
                  <img
                    src="/images/empower-white.png"
                    alt="Equip our youth to succeed."
                    loading="lazy"
                  />
                  <h3>Empower</h3>
                  <p>
                    Empowering our boys to soar and step forward bravely into
                    the unknown, being guided more by imagination than memory,
                    and ultimately, to reach beyond their fears and failures in
                    all areas.
                  </p>
                </Service>
              </div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="/3_NsvY-MwLo"
                onClose={() => setOpen(false)}
              />
              <div className="btn">
                <Button onClick={() => setOpen(true)}>Watch This Video!</Button>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container spacex">
              <div className="grid">
                <h2 className="mobile-text">
                  Resources are what dictate how successful kids are likely to
                  be in the future
                </h2>
                <img
                  src="images/space-x-500.jpg"
                  alt="Space X and Boss"
                  loading="lazy"
                />
                <div>
                  <h2 className="desktop-text">
                    Resources are what dictate how successful kids are likely to
                    be in the future
                  </h2>
                  <p>
                    Unfortunately, target youth lack the basic resources needed
                    to reach the same success as more “advantaged” households.We
                    leverage our BOSS Pillars and the power of timeless success
                    principles to inspire the pursuit of greatness in schools,
                    at home, and in the community. With an emphasis on STEAM
                    learning and the essential sharpening of critical thinking
                    skills, we challenge our boys to excel professionally as
                    well-rounded scholars, so they are prepared and confident to
                    shine in any career they choose.
                  </p>
                  <p>BOSS includes:</p>
                  <ul>
                    <li>
                      Annual summer camp including STEAM project work, Math
                      Madness competition, critical reading/argumentative
                      writing and career pathway field trips and activities.
                    </li>
                    <li>
                      Year-round and multi-year academic enrichment and support.
                    </li>
                    <li>
                      Real-world experiences aligned with Consulting,
                      Engineering, Global Trade, Law, Media, Medicine, and
                      Technology career pathways.
                    </li>
                    <li>
                      Opportunities for advocacy and service to build on
                      leadership and team building skills.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="btn">
              <Link href="/about" passHref>
                <a>
                  <Button>Learn more about us</Button>
                </a>
              </Link>
            </div>
          </section>
          <section>
            <div className="large-container">
              <div className="ParallaxVideo">
                <video autoPlay muted loop id="myVideo">
                  <source src="/video/boss-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container">
              <div className="grid">
                <div>
                  <h2>We’re Committed to Helping Our Kids</h2>
                  <p>
                    Target youth live in a society where they are too often
                    confronted with the violence of poverty and the reality of
                    systemic racism. BOSS preparation accounts for the increased
                    challenges our boys and young men may face. We strive to
                    infuse their lives with an abundance of resources to support
                    them in navigating life’s obstacle courses with trust in
                    themselves, belief in their abilities, and a self-awareness
                    that is key to their decision-making.
                  </p>
                  <img className="pic" src="images/boss-learning.jpg" />
                </div>
                <div>
                  <div className="box">
                    <div className="box-text">
                      <h3>4100</h3>
                      <p>Kids Impacted</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-text">
                      <h3>5</h3>
                      <p>Year Academic Out-Performance</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-text">
                      <h3>38</h3>
                      <p>Events Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container">
              <h2 className="title">What Our BOSS Kids Are Saying</h2>
              <div className="videoWrapper">
                <iframe
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/Ad3ZlP-bdcA"
                ></iframe>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container team-section">
              <h2 className="center title">Our Boss Leadership Team</h2>
              <div className="team">
                <div className="team-members">
                  <img
                    src="images/team/everett-glenn.jpg"
                    alt="Everett Glenn"
                    loading="lazy"
                  />
                </div>
                <div className="team-members">
                  <img
                    src="images/team/erika-thurmond.jpg"
                    alt="Erika Thurmond"
                    loading="lazy"
                  />
                </div>
                <div className="team-members">
                  <img
                    src="images/team/gwendolyn-bush.jpg"
                    alt="Gwendolyn Bush"
                    loading="lazy"
                  />
                </div>
                <div className="team-members">
                  <img
                    src="images/team/dr-kagba-suaray.jpg"
                    alt="Dr. Kagba Suaray"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="btn">
                <Link href="/team" passHref>
                  <a>
                    <Button>Learn more about our Team</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="board-sec">
            <div className="large-container">
              <div className="dots-bg"></div>
              <h2 className="title">
                Our Board is Composed of People Committed to Helping Kids in Our
                Community
              </h2>
              <div className="board">
                <div className="board-members">
                  <img src="images/board/everett-glenn.jpg" />
                </div>
                <div className="board-members">
                  <img src="images/board/f-david-coleman.jpg" />
                </div>
                <div className="board-members">
                  <img src="images/board/ryan-delaney-1.jpg" />
                </div>
                <div className="board-members">
                  <img src="images/board/kate-ferrara.jpg" />
                </div>
                <div className="board-members">
                  <img src="images/board/alfred-miller.jpg" />
                </div>
                <div className="board-members">
                  <img
                    src="images/board/jason-greenlee.jpg"
                    alt="Jason Greenlee"
                  />
                </div>
                <div className="board-members">
                  <img
                    src="images/board/robert-gustavis.jpeg"
                    alt="Robert Gustavis"
                  />
                </div>
                <div className="board-members">
                  <img
                    src="images/board/ralph-jackson.jpg"
                    alt="Ralph Jackson"
                  />
                </div>
                <div className="board-members">
                  <img src="images/board/frederick-humphries.jpg" />
                </div>
              </div>
              <div className="btn">
                <Link href="/board-of-directors" passHref>
                  <a>
                    <Button>Read more about our board members</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="donate-sec">
            <div className="large-container donate">
              <img src="images/tom-williams.jpg" className="shadow" />
              <div>
                <h2>Do Your Part to Help and Impact the Youth</h2>
                <p>
                  They say the future is written by the young. They’re the ones
                  who will make life changing decisions, facilitate major
                  change, and lead the world into new heights — with the proper
                  tools and opportunities. Unfortunately, too many target youth
                  still grapple with issues that prevent them from reaching
                  their personal and collective potential.
                </p>
                <p>
                  You can be the difference that helps change that for good!
                  Invest in our target youth and give them a fighting chance to
                  lead the world tomorrow.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href={donate} target="blank" rel="noreferrer">
                <Button>Donate and help us today!</Button>
              </a>
            </div>
          </section>
          <section>
            <div className="large-container">
              <h2 className="title">Latest News</h2>
              <div className="all-news">
                {data.posts.slice(0, 3).map((post) => (
                  <div key={post.slug}>
                    <div className="event">
                      <Link href={`/${post.slug}`} passHref>
                        <a>
                          <img
                            className="news-img"
                            src={post.coverImage.url}
                            alt={post.title}
                            loading="lazy"
                            title={post.title}
                          />
                          <div className="blog-info">
                            {/* <p>
                              {new Date(post.date).toLocaleDateString('en-us', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p> */}
                            <h2>{post.postTitle}</h2>
                            <p>{post.excerpt}</p>
                            <p>Read more</p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="btn">
              <Link href="/news">
                <a>
                  <Button>Read More News</Button>
                </a>
              </Link>
            </div>
          </section>
        </Index>
      </Layout>
    </>
  )
}

export default Home

const Index = styled.div`
  .flex {
    display: flex;
  }
  .blog-info {
    padding: 2rem;
    height: 400px;
    h2 {
      font-size: 1.4rem;
    }
  }

  .sponsors {
    max-width: 20rem;
    height: auto;
  }
  .events {
    @media (min-width: 1440px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
      grid-gap: 40px;
    }

    .news,
    .event {
      border: 1px solid #eee;
      border-radius: 20px;

      .news-info,
      .event-info {
        padding: 2rem;
        padding-bottom: 3rem;
      }

      img {
        margin-bottom: 1rem;
      }
    }
  }

  .spacex {
    img {
      box-shadow: -20px 20px 0;
      color: #f1c40f;
    }
  }

  .box-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    grid-gap: 40px;
  }
  .box {
    max-width: 100%;
    padding: 2rem;
    background-color: #2ecc71;
    margin-bottom: 1rem;
    color: #fff;
    box-shadow: 10px 10px 0;
    color: #27ae60;

    .box-text {
      color: #fff;

      p {
        font-size: 1.4rem;
      }
    }

    h3 {
      margin: 0;
      font-size: 3.5rem;
    }
  }
  .shadow {
    box-shadow: -20px 20px 0;
    color: #f1c40f;
  }

  .title {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .counsel-sec {
    color: #fff;
    .services {
      .service {
        border: 2px solid #fff;
        padding: 2rem;
        margin-bottom: 3rem;
      }

      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        justify-content: space-between;
      }
    }
    h2 {
      margin-bottom: 3rem;
    }
    background-image: linear-gradient(
        to bottom,
        rgb(37, 38, 56),
        rgba(37, 38, 56, 0.37)
      ),
      url('images/boss-counselling.jpg');
    background-position: center;
    background-size: cover;
    padding: 9rem 0;
    left: 0px;
    top: 0px;
    right: 0px;
    width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .resources-sec {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.8)
      ),
      url('images/dots.png');
    background-position: center;
    background-size: cover;
  }
  .team-sec {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.999999),
        rgba(255, 255, 255, 0.8)
      ),
      url('images/la-background.jpg');
    background-position: center;
    background-size: cover;
  }
  .donate-sec {
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.999999),
        rgba(255, 255, 255, 0.5)
      ),
      url('images/tom-williams-teaching.jpg');
    background-position: top;
    background-size: cover;
    padding: 4rem 0;
  }

  /* Team */
  .team-members,
  .board-members {
    img {
      margin: 0 auto;
      display: block;
      border-radius: 10px;
      box-shadow: -10px 10px 0;
      color: #ecf0f1;
    }

    .name {
      margin: 2rem 0;
      text-align: center;
    }
  }

  .team-section {
    p {
      max-width: 900px;
      margin: 0 auto;
      margin-top: 2rem;
      text-align: center;
    }
  }
  .team {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  .board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 1140px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      grid-gap: 40px;

      img {
        border-radius: 10px;
      }
    }
    .donate {
      display: flex;
      align-items: center;

      img {
        max-width: 40rem;
        margin-right: 2rem;
      }

      .btn {
        text-align: left;
      }
    }
  }
`

const Service = styled.div`
  border: 2px solid #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  img {
    width: 100px;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 3rem;
    border-bottom: 10px solid red;
    padding-bottom: 1rem;
    width: 30%;
  }

  p {
    font-size: 1.4rem;
  }
`
