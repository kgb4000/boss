/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'
import ModalVideo from 'react-modal-video'

const About = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Layout>
        <AboutPage>
          <HeroSection
            backgroundImage="/images/about-us-header.jpg"
            backgroundHeight="70vh"
            heroText="About us"
            subText="Donate and help us empower our young boys"
            buttonText="Donate and Help us Today!"
            buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
          />
          <section>
            <div className="container">
              <h2>Our Story</h2>
              <p>
                BOSS was founded in 2017 by Everett L. Glenn, a renowned and now
                retired attorney. Following decades of accomplishments in a
                range of legal sectors; working with private, municipal, and
                federal entities; and after over 20 years as an NFL and NBA
                certified contract advisor negotiating for athletic all-stars,
                Mr. Glenn realized that there was a common thread between his
                childhood experience and so many of his successful counterparts,
                colleagues and clients. He found that participating in sports as
                a young person was a fundamental contributor to their individual
                development and long-term achievements. Consistent sports
                involvement can lead to the increased ability to approach
                challenges from a solution mindset, efficient adaptability to
                new environments, and among many other shared qualities, a deep
                sense of pride.
              </p>
              <p>
                Families often prioritize sports involvement for their children,
                because of the common themes that will contribute to their
                healthy development. Beyond the physical training and health
                benefits, there are intellectual and socio-emotional skills that
                can be gained as well; character built, values practiced,
                camaraderie shared and integrity celebrated. Lacking in the
                support structures and stability of their more affluent athletic
                peers, boys of color and those coming from low-income households
                who show athletic promise can, all too often, end up
                over-focusing on athletics to the detriment of their academic
                and interpersonal skills development. BOSS was created to
                provide boys of color and those from low-income households with
                the access, opportunity, training, and tools that will
                positively contribute to their success today, tomorrow, and for
                the rest of their lives.
              </p>
              <p>
                BOSS began running beta tests of programming to conference rooms
                full of young people from 2009-2016 as part of the “Taste the
                Game Celebration” at Super Bowls 43- 50. We began working with
                Boys and Girls Clubs in South Central, LA, and Hayward, CA, and
                it was evident that the BOSS programs had far-reaching value for
                our young people. What began as a weekend program, then grew
                into a handful of boys eager to make a positive change in their
                life, and has subsequently led us to currently serving over 175
                young men (and counting) who believe in BOSS because of the
                impact it continues to have on their lives.
              </p>
              <p>
                It became clear that in order to fulfill our purpose
                effectively, our persistent commitment to our boys’ success
                cannot be seasonal. BOSS is now proud to offer a dynamic
                calendar of year-round programming, as part of a larger
                multi-year effort supporting our boys from middle school, to and
                through college graduation and into their careers. With a
                special focus on STEM disciplines, BOSS works toward mastery of
                universally applicable leadership, intrapersonal, and
                professional skills that are embedded throughout our 6
                Foundational BOSS Pillars of Excellence: Mental BOSS, Emotional
                BOSS, Social BOSS, Physical BOSS, Economic BOSS, and Spiritual
                BOSS and our Good to Great principles.
              </p>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="/3iMU2W7PPRo"
                onClose={() => setOpen(false)}
              />
              <div className="btn">
                <Button onClick={() => setOpen(true)}>Watch This Video!</Button>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container">
              <div className="grid">
                <div className="text">
                  <h2>The BOSS Mission</h2>
                  <p>
                    To inspire BIPOC youth, especially boys of color, to adopt a
                    success mindset while helping them develop the character,
                    discipline, habits and skills to pursue success in any
                    industry or profession.
                  </p>
                  <p>
                    We achieve this by providing positive role models,
                    multi-year and year-round academic guidance, and
                    STEAM-focused enrichment activities. Our BOSS resources also
                    include coaching, life advice, career exposure, early
                    networking, family support, and a range of equipment and
                    technology to increase access, opportunities, and
                    competencies. We supplement what schools and families
                    provide so that our boys can walk confidently through life
                    knowing no matter the obstacles they face, they are
                    advantaged.
                  </p>
                </div>
                <img
                  src="images/headers/boss-index-cover-img.jpg"
                  className="shadow"
                  alt="Business of student success"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="large-container">
              <div className="grid">
                <img
                  src="images/boss-students.jpg"
                  className="shadow"
                  alt="Business of student success"
                  loading="lazy"
                />
                <div className="text">
                  <h2>BOSS Achievements at a Glance</h2>
                  <ul>
                    <li>
                      100% of our cohort high school seniors graduated and
                      successfully matriculated into college; some of which
                      include Cornell, CSULB, Lincoln University, San Diego
                      State, Stanford, Tennessee State, UCLA, UC Merced, and
                      Whittier College.
                    </li>
                    <li>
                      5 consecutive years of our boys outperforming school
                      district peers on standardized assessments across all
                      content areas
                    </li>
                    <li>
                      More than 30% of our BOSS scholars take Algebra by the 8th
                      grade
                    </li>
                    <li>
                      In 2021, while many students experienced learning loss
                      during the pandemic, the average Lexile growth for BOSS
                      scholars was more than a full grade level.
                    </li>
                    <li>
                      38 events, including BOSS Showcases, BOSS Awards, and BOSS
                      clinics
                    </li>
                    <li>2020 MIT Appathon People’s Choice Award Winner</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="large-container">
              <h2>BOSS Teammates</h2>
              <div className="team-section">
                <div className="teams">
                  <img
                    src="images/team/leadership-team.jpg"
                    alt="Business of student success"
                    loading="lazy"
                  />
                  <div className="team-info">
                    <h3>BOSS Leadership Team</h3>
                    <p>
                      The perfect team — our principals and advisors have over
                      100 years of combined experience in sports and related
                      industries.
                    </p>
                    <div className="btn">
                      <Link href="/team" passHref>
                        <a>Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="teams">
                  <img
                    src="images/board/board-of-directors.jpg"
                    alt="Business of student success"
                    loading="lazy"
                  />
                  <div className="team-info">
                    <h3>BOSS Board of Directors</h3>
                    <p>
                      We support the foundation and logistical needs of BOSS so
                      kids can truly benefit from our program.
                    </p>
                    <div className="btn">
                      <Link href="/board-of-directors" passHref>
                        <a>Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="teams">
                  <img
                    src="images/athletic-board/athletic-advisory-board.jpg"
                    alt="Business of student success"
                    loading="lazy"
                  />
                  <div className="team-info">
                    <h3>BOSS Athlete Advisory Board</h3>
                    <p>
                      We help get our kids from the little league to the big
                      league. Our network and input helps makes a difference.
                    </p>
                    <div className="btn">
                      <Link href="/athlete-advisory-board" passHref>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn">
              <a
                href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
                target="blank"
                rel="noreferrer"
              >
                <Button>Donate and help us today!</Button>
              </a>
            </div>
          </section>
        </AboutPage>
      </Layout>
    </>
  )
}

export default About

const AboutPage = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    justify-content: space-between;
    align-items: center;
  }

  img.shadow {
    box-shadow: -20px 20px 0;
    color: #f1c40f;
    border-radius: 20px;
  }
  .team-section {
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      gap: 20px;
    }

    h3 {
      font-size: 2rem;
    }
  }

  .teams {
    margin-bottom: 1rem;
  }

  .team-info {
    border: 1px solid #ddd;
    padding: 2.5rem 2rem;
    border: 1px solid #ddd;
    border-radius: 0 0 20px 20px;
    align-self: stretch;
  }
`
