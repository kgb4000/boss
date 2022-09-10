import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <>
      <Layout>
        <AboutPage>
          <HeroSection
            backgroundImage="images/boss-classroom.jpg"
            backgroundHeight="70vh"
            heroText="About us"
            subText="Donate and help us empower our young boys."
            buttonText="Donate and Help us Today!"
            buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
          />
          <section>
            <div className="container">
              <h2>Who We Are & What We Are About</h2>
              <p>
                The BOSS Program, now in its 5th year, has its origins in
                sports, both its advantages and its pitfalls.
              </p>
              <p>
                Program founder Everett L. Glenn, a successful and now retired
                attorney, understood that many successful people including
                himself point with fondness and pride to their participation in
                sport growing up as a major contributor to their success.
              </p>
              <p>
                Character built, values learned, camaraderie shared are common
                themes, and even highly competitive sports experience more often
                than not is viewed as a net-positive contributor to personal and
                professional success.
              </p>
              <p>The exception: inner-city boys/boys of color.</p>
              <p>
                Lacking the support structures of their peers, inner city
                boys/boys of color who show promise in sports can end up being
                “athlete track’ed”, or over-focusing on athletics to the
                detriment of their academic and interpersonal skills
                development.
              </p>
              <p>
                This led to the creation of BOSS™ (Business Of Student Success),
                a year-round and multi-year effort to take our boys from middle
                school to and through college graduation and into their career.
              </p>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Our Mission</h2>
              <p>
                To create an equal playing field in education for boys,
                especially boys of color and/or those from under-resourced
                communities and schools, by providing positive role models,
                multi-year and year round academic guidance (STEAM focused) and
                coaching, life advice, career exposure and networking, resources
                and equipment to increase their chances for personal and
                professional success in all industries including consulting,
                engineering, finance, global trade, law, medicine, sports &
                entertainment and technology. We supplement what schools and
                families can provide so that our boys are also from “advantaged
                households”.
              </p>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>It Takes a Team</h2>
              <div className="team-section">
                <div className="teams">
                  <h3>BOSS Leadership Team</h3>
                  <p>
                    The perfect team — our principals and advisors have over 100
                    years of combined experience in sports and related
                    industries.
                  </p>
                  <div className="btn">
                    <Link href="/team" passHref>
                      <a>
                        <Button>Learn more</Button>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="teams">
                  <h3>Board of Directors</h3>
                  <p>
                    We support the foundation and logistical needs of BOSS so
                    kids can truly benefit from our program.
                  </p>
                  <div className="btn">
                    <a href="">
                      <Button>Learn more</Button>
                    </a>
                  </div>
                </div>
                <div className="teams">
                  <h3>Athlete Advisory Board</h3>
                  <p>
                    We help get our kids from the little league to the big
                    league. Our network and input helps makes a difference.
                  </p>
                  <div className="btn">
                    <a href="">
                      <Button>Learn more</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>What We Do</h2>
              <p>
                We’ve delivered programming for 5 years, including the past 3
                years when we’ve delivered year-round programming including
                academic coaching, mentoring and exposure to real world
                experiences and opportunities for advocacy and service.
              </p>
            </div>
          </section>
        </AboutPage>
      </Layout>
    </>
  )
}

export default About

const AboutPage = styled.div`
  .team-section {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
    }

    h3 {
      font-size: 2rem;
    }
  }

  .teams {
    border: 1px solid #ddd;
    padding: 2.5rem 2rem;
    margin: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    align-self: stretch;
  }
`
