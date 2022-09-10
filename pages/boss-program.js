import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const BossProgram = () => {
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          backgroundHeight="70vh"
          heroText="About BOSS"
          subText="We empower our young boys to soar to new heights."
          buttonText="Donate and Help us Today!"
          buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
        />
        <section>
          <div className="container">
            <h2>The Six Pillars of BOSS</h2>
            <p>
              The Mastery Of The Six BOSS™ Pillars Is Critical And Essential For
              The Committed-To-Excellence “Process” We Call BOSS™, To Develop
              The Unwavering Disciple, Focus And Passion Needed To Build
              Sustained Momentum To Evolve, Grow And Develop - Change - To Move
              From Poor To Fair, From Fair To Good, And From Good To Great.
            </p>
            <Pillars>
              <div className="pillar">
                <h3>Mental BOSS</h3>
                <p>
                  Being Mentally BOSS™ Means Being Open-Minded, Book Smart, And
                  Scholastically Strong.
                </p>
              </div>
              <div className="pillar">
                <h3>Emotionally BOSS</h3>
                <p>
                  Emotional Security & Generosity Is At The Heart Of Being
                  Emotionally BOSS™.
                </p>
              </div>
              <div className="pillar">
                <h3>Socially BOSS</h3>
                <p>
                  Those Who Are Socially BOSS™ Are Outgoing, Stylish, And
                  Showcase Excellent Behavior.
                </p>
              </div>
              <div className="pillar">
                <h3>Physically BOSS</h3>
                <p>
                  Being Physically BOSS™ Means Exuding Strength, Striving To
                  Outperform, And Displaying Never-Ending Stamina.
                </p>
              </div>
              <div className="pillar">
                <h3>Economically BOSS</h3>
                <p>
                  Those Who Are Economically BOSS™ Budget Like A Boss, Save Like
                  A Boss, & Own Like A Boss.
                </p>
              </div>
              <div className="pillar">
                <h3>Spiritually BOSS</h3>
                <p>
                  Spiritually BOSS™ People Live Based On Sincerity, Belief, And
                  Submission To Their Creator.
                </p>
              </div>
            </Pillars>
            <div className="btn">
              <Link href="/boss-application">
                <a>
                  <Button>Apply To BOSS Today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>About Boss Programs</h2>
            <p>
              We’re delivering year-round and multi-year programming around our
              6 BOSS Pillars including STEAM focused academic enrichment, career
              pathways, financial literacy, leadership, life skills, networking,
              noncognitive skills and personal development.
            </p>
            <ul>
              <li>
                2020 established BOSS Hackers to compete in hackathons; BOSS
                Robotics to compete in robotics competitions
              </li>
              <li>
                2020 People’s Choice Award winner, MIT App Inventor Global
                Hackathon for Good, Safe Encounter App. Click here for short
                video demonstration of app.
              </li>
              <li>
                2019 Hustle N’ Code Hackathon participant around solving
                community issues through code.
              </li>
              <li>
                Participated in 2-day Launch To Success STEM Workshop presented
                by The Aerospace Corporation and meant to inspire the next
                generation of engineers and scientists by immersing a group of
                Southern CA students in the diverse culture of Aerospace and
                exposing them to the various careers of our employee volunteers.
                Click here for a short video of the workshop
              </li>
              <li>
                Partnership with Microsoft which provides year-round
                opportunities to learn coding, build video games, etc.
              </li>
              <li>
                Career pathway real world experiences including AEG, Aerospace
                Corporation, Applied Minds, Kiewit Engineering, Port of Long
                Beach, SpaceX and Turner Construction.
              </li>
              <li>
                Career pathway seminars and workshops featuring architects,
                computer scientists, developers/designers, engineers, graphic
                designers, logistics experts, media/broadcasting, medical
                professionals, scientists, and technologists.
              </li>
              <li>
                Third-year running with across the board academic outperform
                versus non-BOSS boys
              </li>
            </ul>
            <p>
              Click on the video to learn how we start the “process” with a
              2-week summer enrichment camp.
            </p>
            <div className="btn">
              <Link href="/boss-application" passHref>
                <a>
                  <Button>Apply Today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>What Makes BOSS™ Unique</h2>
            <ul>
              <li>
                Long-term. We follow the same group of boys from middle school
                all the way to and through college, providing a comprehensive
                program of support along the way.
              </li>
              <li>Inclusive. We do not “cherry-pick” students</li>
              <li>Assures financial support for college</li>
              <li>
                Assures a consistent personal relationship and mentorship with
                each program participant, uniquely fitting to their needs
              </li>
              <li>Promotes family engagement with all program participants</li>
              <li>
                Is comprehensive. In addition to academic emphasis on STEAM,
                critical thinking, financial literacy and related fields and
                skills and networking and professional development, we support
                the well-being of boys through ongoing social/emotional support
              </li>
              <li>
                Illustrative career path models include Science, Technology,
                Engineering, Arts and Math (BOSS Techies);, Media, Business,
                Entrepreneurship (BOSS Entrepreneurs); Banking, Finance and
                Investment (BOSS Bankers); Law (BOSS Barristers); Logistics,
                Maritime and Trade (BOSS Traders); Sports (BOSS Ballers); and
                Tourism, Cuisine and Hospitality (BOSS Travelers).
              </li>
              <li>
                Comprehensive. While we are dedicated to promoting the academic
                success of our boys, we focus just as intently on building life
                skills and fostering students’ ongoing social-emotional
                development and well-being.
              </li>
              <li>
                Flexible. Our programming is tailored to suit the needs of the
                communities in which our programs operate.
              </li>
              <li>
                Leveraged. Strategic partnerships at the local, state, and
                national levels ensure an integrated continuum of engagement and
                support for participants on the pathway to success.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Who Are BOSS Ballers?</h2>
            <ul>
              <li>
                Student-athlete boys who participate in our initial career path
                offering BOSS (Business Of Student Success)
              </li>
              <li>
                Uniquely leverages sports participation to help boys position
                themselves to pursue careers in sport beyond the court, diamond,
                or field
              </li>
              <li>
                Helps develop skills transferable to other industries and
                professions
              </li>
            </ul>
            <div className="btn">
              <Link href="/boss-application" passHref>
                <a>
                  <Button>Apply To Boss Today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BossProgram

const Pillars = styled.div`
  @media (min-width: 768px) {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .pillar {
    height: 200px;
    @media (min-width: 768px) {
      height: 400px;
    }
    border: 1px solid #ddd;
    padding: 2.5rem 2rem;
    margin: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    align-self: stretch;

    h3 {
      font-size: 1.4rem;
    }
  }
  @media and screen (min-width: 768px) {
  }
`
