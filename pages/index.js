/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Layout>
        <Index>
          <HeroSection
            backgroundImage="images/headers/boss-cover-img.jpg"
            backgroundHeight="100vh"
            heroText="Business of Student Success"
            subText="We leverage the power of sports to empower our young boys to soar."
            buttonText="Donate and Help us Today!"
            buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
          />
          <section>
            <div className="container">
              <div className="intro">
                <div className="text">
                  <h2>BOSS - Business of Student Success</h2>
                  <p>
                    Through BOSS™ (Business Of Student Success), We’re Equipping
                    Boys, Especially Boys Of Color, With The Tools To Succeed In
                    School, In The Community And Professionally, With An
                    Emphasis On STEAM, Critical Thinking/Writing And Related
                    Fields. We Also Leverage The Power Of Sport To Inspire Boys
                    To Pursue Greatness
                  </p>
                  <div className="button">
                    <Link href="/boss-application" passHref>
                      <a>
                        <Button>Apply Today!</Button>
                      </a>
                    </Link>
                  </div>
                </div>
                <img
                  src="images/headers/boss-index-cover-img.jpg"
                  className="shadow"
                />
                {/* <div className="button">
              <Link href="/boss-application" passHref>
                <a>
                  <Button>Apply Today!</Button>
                </a>
              </Link>
            </div> */}
              </div>
            </div>
          </section>
          <section className="counsel-sec">
            <div className="large-container">
              <h2>What We Do</h2>
              <div className="services">
                <div className="service">
                  <h3>Prepare</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    qui maiores facilis nihil dicta voluptatem perspiciatis modi
                    culpa, accusantium quisquam voluptas inventore id. Ipsa
                    tempora excepturi corporis praesentium non enim.
                  </p>
                </div>
                <div className="service">
                  <h3>Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    qui maiores facilis nihil dicta voluptatem perspiciatis modi
                    culpa, accusantium quisquam voluptas inventore id. Ipsa
                    tempora excepturi corporis praesentium non enim.
                  </p>
                </div>
                <div className="service">
                  <h3>Leverage</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    qui maiores facilis nihil dicta voluptatem perspiciatis modi
                    culpa, accusantium quisquam voluptas inventore id. Ipsa
                    tempora excepturi corporis praesentium non enim.
                  </p>
                </div>
              </div>
              <div className="button">
                <Link href="/boss-program" passHref>
                  <a>
                    <Button>Check out our program!</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="resources-sec">
            <div className="large-container spacex">
              <img src="images/spacex-trip.jpg" className="shadow" />
              <div>
                <h2>Resources Lead To Success</h2>
                <p>
                  Resources are what dictate how successful kids are likely to
                  be in the future. Unfortunately, inner city boys and boys of
                  color (Target Boys), lack the basic resources needed to reach
                  the same success as more “advantaged” households.
                </p>
                <p>
                  That’s why the BOSS™ program was created: to provide the
                  exposure, opportunities, and resources so our Target Boys come
                  from “advantaged households” and have an equal opportunity to
                  achieve personal and professional success, including:
                </p>
                <ul>
                  <li>
                    Intensive 2-week camp including STEAM project work, Math
                    Madness competition, critical reading/argumentative writing
                    and career pathway field trips and activities
                  </li>
                  <li>
                    Year-round and multi-year Academic Enrichment (STEAM focused
                    with critical thinking/writing), financial literacy,
                    leadership, life skills, noncognitive skills development
                  </li>
                  <li>
                    Amazing real-world experiences aligned with Consulting,
                    Engineering, Global Trade, Law, Media, Medicine, and
                    Technology career paths
                  </li>
                  <li>
                    Opportunities for advocacy and service to build on
                    leadership and team building skills
                  </li>
                </ul>
                <div className="btn">
                  <Link href="/about" passHref>
                    <a>
                      <Button>Learn more about us</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="team-sec">
            <div className="team-container">
              <h2 className="center">Our Team</h2>
              <div className="team">
                <div className="team-members">
                  <img src="images/team/everett-glenn.jpg" />
                  <h3 className="name">Everett Glenn</h3>
                </div>
                <div className="team-members">
                  <img src="images/team/justin-glenn.jpg" />
                  <h3 className="name">Justin Glenn</h3>
                </div>
                <div className="team-members">
                  <img src="images/team/kofi-lomotey.jpg" />
                  <h3 className="name">Kofi Lomotey</h3>
                </div>
                <div className="team-members">
                  <img src="images/team/skyles-runser.jpg" />
                  <h3 className="name">Skyles Runser​</h3>
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
              <h2 className="center">Our Board Members</h2>
              <div className="board">
                <div className="board-members">
                  <img src="images/board/everett-glenn.jpg" />
                  <h3 className="name">Everett Glenn</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/f-david-coleman.jpg" />
                  <h3 className="name">F. David Coleman</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/ryan-delaney.jpeg" />
                  <h3 className="name">Ryan Delaney</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/ferrara-kate-m.jpeg" />
                  <h3 className="name">Kate Ferrara</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/alfred-miller.jpg" />
                  <h3 className="name">Alfred Miller</h3>
                </div>
                <div className="board-members">
                  <img
                    src="images/board/jason-greenlee.jpg"
                    alt="Jason Greenlee"
                  />
                  <h3 className="name">Jason Greenlee</h3>
                </div>
                <div className="board-members">
                  <img
                    src="images/board/robert-gustavis.jpeg"
                    alt="Robert Gustavis"
                  />
                  <h3 className="name">Robert Gustavis</h3>
                </div>
                <div className="board-members">
                  <img
                    src="images/board/ralph-jackson.jpg"
                    alt="Ralph Jackson"
                  />
                  <h3 className="name">Ralph Jackson</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/kofi-lomotey.jpg" />
                  <h3 className="name">Kofi Lomotey</h3>
                </div>
                <div className="board-members">
                  <img src="images/board/dr-humphries.jpeg" />
                  <h3 className="name">Dr. Frederick Humphries</h3>
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
                <h2>Do Your Part & Impact The Youth</h2>
                <p>
                  They say the future is written by the young. They’re the ones
                  who will make life changing decisions, facilitate major
                  change, and lead the world into new heights — with the proper
                  tools and opportunities. Unfortunately, too many boys of color
                  and those from under-resourced schools still grapple with
                  issues that prevent them from reaching their personal and
                  collective potential.{' '}
                </p>
                <p>
                  You can be the difference that helps change that for good!
                  Invest in our boys and give them a fighting chance to lead the
                  world tomorrow.
                </p>
                <div className="btn">
                  <a
                    href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
                    target="blank"
                    rel="noreferrer"
                  >
                    <Button>Donate and help us today!</Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Latest News</h2>
              <p>
                Where Young Minds Are Empowered to Soar, To Sail, To Step
                Forward Bravely Into The Unknown, Being Guided More By
                Imagination Than Memory, And Ultimately To Reach Beyond Their
                Fears And Failures
              </p>
              <div className="btn">
                <Button>Read More</Button>
              </div>
            </div>
          </section>
        </Index>
      </Layout>
    </>
  )
}

export default Home

const Index = styled.div`
  .shadow {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
        rgba(37, 38, 56, 0.99999),
        rgba(37, 38, 56, 0.9)
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

  ${
    '' /* .dots-bg {
    background-image: url('images/small-dots.png');
    position: absolute;
    right: 40px;
    bottom: 5px;
    width: 212px;
    height: 181px;
    background-repeat: no-repeat;
  } */
  }

  /* Team */
  .team-members,
  .board-members {
    margin-bottom: 4rem;
    height: 450px;
    border: 1px solid #ddd;
    width: 250px;
    margin: 4rem auto;
    box-shadow: 0px 15px 30px 0px rgb(0 0 0 / 8%);
    background-color: #fff;

    h3 {
      font-size: 1.5rem;
    }

    img {
      height: 300px;
      width: 250px;
      margin: 0 auto;
      display: block;
    }

    .name {
      margin: 2rem 0;
      text-align: center;
    }
  }
  .team {
    @media (min-width: 550px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }

    @media (min-width: 1270px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
    }
  }
  .board {
    @media (min-width: 550px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }

    @media (min-width: 1270px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-content: center;
    }
  }

  @media (min-width: 1140px) {
    .intro {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      grid-gap: 20px;

      img {
        box-shadow: 0px 15px 30px 0px rgb(0 0 0 / 8%);
      }
    }
    .spacex,
    .donate {
      display: flex;
      align-items: center;

      img {
        max-width: 40rem;
        margin-right: 4rem;
      }

      .btn {
        text-align: left;
      }
    }
  }
`
