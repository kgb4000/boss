/* eslint-disable @next/next/no-img-element */
import { useState, React } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'
import ModalVideo from 'react-modal-video'

const BossProgram = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="/images/headers/boss-programs-cover.jpg"
          backgroundHeight="70vh"
          heroText="Our Programming"
          subText="We empower our youth to soar to new heights"
          buttonText="Donate and Help us Today!"
          buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
        />
        <section>
          <div className="large-container">
            <h2>The Foundational Pillars of BOSS Excellence</h2>
            <p>
              All of our program participants are committed to the mastery of
              the Six Foundational BOSS™ Pillars of Excellence and timeless
              leadership, personal development and success imperatives. It is a
              shared understanding across the BOSS community (including youth,
              families, staff, and supporters) that mastering each of these
              pillars is an essential part of the BOSS process. In order to
              excel in any of our programs, our young scholars must embrace
              these pillars and challenge themselves to uphold them to the best
              of their abilities at all times. To master the pillars and
              principles, our young people proudly commit to:
            </p>
            <ul>
              <li>Develop unwavering discipline</li>
              <li>Nourish the passion needed to sustain momentum</li>
              <li>Build a persistent focus on personal evolution </li>
            </ul>
          </div>
        </section>
        <SixPillars>
          <div className="large-container">
            <div className="fixed-bg">
              <h2>Six Pillars of Boss</h2>
              <Pillars>
                <div className="pillar mentally">
                  <div className="pillar-header">
                    <div>
                      <img
                        src="images/brain-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Mentally BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Be coachable &amp; teachable</p>
                    <p>Observe 4 learning stages</p>
                    <p>Strive for mastery</p>
                    <p>Self-care and awareness</p>
                  </div>
                </div>
                <div className="pillar emotionally">
                  <div className="pillar-header">
                    <div>
                      <img
                        src="images/emotions-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Emotionally BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Become comfortable being uncomfortable</p>
                    <p>Openness to feelings and values</p>
                    <p>Stay true to you</p>
                    <p>Set boundaries</p>
                  </div>
                </div>
                <div className="pillar socially">
                  <div className="pillar-header">
                    <div>
                      <img
                        src="images/network-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Socially BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Build connections</p>
                    <p>Operate with integrity</p>
                    <p>Strengthen your voice</p>
                    <p>Step outside comfort zone</p>
                  </div>
                </div>
                <div className="pillar physically">
                  <div className="pillar-header">
                    <div>
                      <img
                        src="images/sprint-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Physically BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Balance diet &amp; exercise</p>
                    <p>Organize your time</p>
                    <p>Strengthen mind &amp; body</p>
                    <p>Set personal goals</p>
                  </div>
                </div>
                <div className="pillar economically">
                  <div className="pillar-header economically">
                    <div>
                      <img
                        src="images/global-economy-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Economically BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Be money smart</p>
                    <p>Observe budgets</p>
                    <p>Set life goals</p>
                    <p>Save and give back</p>
                  </div>
                </div>
                <div className="pillar spiritually">
                  <div className="pillar-header">
                    <div>
                      <img
                        src="images/pray-white.png"
                        className="icon"
                        alt="Business of student success"
                        loading="lazy"
                      />
                      <h3>Spiritually BOSS</h3>
                    </div>
                  </div>
                  <div className="pillar-content">
                    <p>Believe in possibilities</p>
                    <p>Observe ethical decisions</p>
                    <p>Stay aligned</p>
                    <p>Servant leadership</p>
                  </div>
                </div>
              </Pillars>
              <div className="btn">
                <div className="btn">
                  <a
                    href="https://bossprograms.app.neoncrm.com/forms/student-application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Apply To BOSS Today!</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SixPillars>
        <section>
          <div className="large-container">
            <div className="grid">
              <img
                src="images/boss-students.jpg"
                className="shadow"
                alt="Business of student success"
                loading="lazy"
              />
              <div>
                <h2>About the BOSS Program</h2>
                <p>
                  We inspire the passion, confidence and courage of target youth
                  to skillfully transcend any limitations placed by given
                  reality or internal doubt. We also help them develop the
                  necessary skill sets, mindsets and resources to navigate
                  life’s twists and turns. And we empower target youth to soar
                  and step forward bravely into the unknown, being guided more
                  by imagination than memory, and, ultimately, to reach beyond
                  their fears and failures in all areas.
                </p>
                <h3>Noted Accomplishments:</h3>
                <ul>
                  <li>
                    2020 People’s Choice Award winner, MIT App Inventor Global
                    Hackathon for Good, Safe Encounter App. Click{' '}
                    <ModalVideo
                      channel="youtube"
                      autoplay
                      isOpen={isOpen}
                      videoId="/3_NsvY-MwLo"
                      onClose={() => setOpen(false)}
                    />
                    <a onClick={() => setOpen(true)}>here</a> for short video
                    demonstration of app.
                  </li>
                  <li>Super Bowl 56 Legacy Champion</li>
                  <li>US patent for Safe Encounter Mobile App</li>
                  <li>
                    Five years (running) across the board outperform on metrics
                    track by DOE
                  </li>
                  <li>
                    Partnership with Microsoft which provides year-round
                    opportunities to learn coding, build video games, etc.
                  </li>
                  <li>
                    Partnership with Microsoft which provides year-round
                    opportunities to learn coding, build video games, etc.
                  </li>
                  <li>
                    Partnership with the Alliance (11 Southern California Pro
                    Sports Teams) to explore nonplaying careers in the various
                    sports.
                  </li>
                </ul>
                <p>
                  Click on the video to learn how we start the “process” with a
                  2-week summer enrichment camp.
                </p>
              </div>
            </div>
          </div>
          <div className="btn">
            <a
              href="https://bossprograms.app.neoncrm.com/forms/student-application"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Apply To BOSS Today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="large-container">
            <h2>Core BOSS Programs</h2>
            <div>
              <h3>BOSS Summer Intensive</h3>
              <p>
                Two Week Camp to practice the BOSS Foundational Pillars in a
                supportive, fun, and challenging environment. Camp includes
                dynamic STEAM projects, a Math Madness competition, critical
                reading, argumentative writing and career pathway-based field
                trips and activities.
              </p>
            </div>
            <div>
              <h3>BOSS Academy</h3>
              <p>
                Year-round and multi-year academic support and enrichment that
                takes place daily, after-school, regularly on weekends and
                occasionally on weeknights. The content of our BOSS Academy
                includes STEM-based activities, critical
                thinking/reading/writing, financial literacy, leadership
                development, life skills, and noncognitive skills
                (communication, interpersonal and social skills, motivation,
                etc.
              </p>
            </div>
            <div>
              <h3>BOSS STEM Enrichment</h3>
              <ul>
                <li>
                  BOSS Hackers- scholars learn coding skills and participate in
                  hackathons (hacking competitions) where they put their skills
                  to the test with innovation challenges including things like
                  on the spot App creation
                </li>
                <li>
                  BOSS Robotics- scholars learn fundamental engineering and
                  technology principles building robots and then put them to the
                  test in robotics competitions
                </li>
              </ul>
            </div>
            <div>
              <h3>BOSS Career Pathways</h3>
              <p>
                Real-world experiences, projects, trips and guest workshops
                aligned with illustrative career path models including BOSS
                Techies, BOSS Entrepreneurs, BOSS Bankers, BOSS Barristers, BOSS
                Traders, BOSS Ballers, and BOSS Travelers. Some of the specific
                career fields explored include architecture, computer science,
                software development, aerospace engineering, consulting,
                engineering, global trade, law, media/broadcasting, medicine,
                and technology. A component of the pathways program also
                includes leadership development, advocacy and service. ***Stay
                tuned for our BOSS STEAM Career Pathway Portal! A special
                resource for districts, schools, and other youth focused
                organizations, this portal will serve as an online hub with a
                plethora of information on various STEM career pathways, soon
                available!
              </p>
            </div>
            <div>
              <h3>BOSS Talks</h3>
              <p>
                Bi-weekly virtual discussions (that began during the pandemic)
                with renowned athletes, professionals and executives who share
                their journeys with our boys…the good, the bad, and the
                in-between. It’s an opportunity for accomplished individuals to
                have honest conversations with our young people about the
                strategies, tools and resources they relied upon to achieve
                their goals. Featured guests have included:
              </p>
              <div className="grid">
                <img
                  src="images/athletic-board/kellogg-and-obama.jpg"
                  alt="Clark “Special K” Kellogg"
                  loading="lazy"
                />
                <ul>
                  <li>
                    Former NBA Rookie-of-the-Year and CBS basketball analyst{' '}
                    <a
                      href="https://www.youtube.com/watch?v=0nAxZ2SH7MM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Clark Kellogg
                    </a>
                    .
                  </li>
                  <li>
                    Grammy-award winning producer/writer and Recording Academy
                    President,{' '}
                    <a
                      href="https://www.youtube.com/watch?v=rKXc3r6uFlo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Harvey Mason, Jr
                    </a>
                    .
                  </li>
                  <li>
                    Billionaire venture capital fund managing partner and Golden
                    State Warriors part-owner{' '}
                    <a
                      href="https://www.youtube.com/watch?v=0493KFAqz8s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mark Stevens
                    </a>
                    .
                  </li>
                  <li>
                    Steelers quarterback and aerospace engineer{' '}
                    <a
                      href="https://www.youtube.com/watch?v=rvgKdVJNxwY"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Josh Dobbs
                    </a>
                    .
                  </li>
                  <li>
                    The Black Tax author,{' '}
                    <a
                      href="https://www.youtube.com/watch?v=cAzryw5PG70"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shawn Rochester
                    </a>
                    .
                  </li>
                  <li>
                    Klutch Sports’{' '}
                    <a
                      href="https://www.youtube.com/watch?v=KQfER1KT_iA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rich Paul
                    </a>
                    .
                  </li>
                  <li>
                    NBA’s{' '}
                    <a
                      href="https://www.youtube.com/watch?v=9b01qa6vIbg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Adam Harper
                    </a>
                    .
                  </li>
                  <li>
                    Investment banker{' '}
                    <a
                      href="https://www.youtube.com/watch?v=h1EPs6O5pJY"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Michael Haddix
                    </a>
                    .
                  </li>
                  <li>
                    Former NFL exec turned ASU Athletic Director{' '}
                    <a
                      href="https://www.youtube.com/watch?v=5qeVUej0OLY"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ray Anderson
                    </a>
                    .
                  </li>
                  <li>
                    NASA scientist{' '}
                    <a
                      href="https://www.youtube.com/watch?v=nnC3jJRUyNU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tony Magee
                    </a>
                    .
                  </li>
                  <li>
                    Real estate mogul and former business partner to Magic
                    Johnson,{' '}
                    <a
                      href="https://www.youtube.com/watch?v=2RKcUcEakQM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ken Lombard
                    </a>
                    .
                  </li>
                </ul>
              </div>
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
              <div>
                <h2>What Makes BOSS Unique</h2>
                <ul>
                  <li>
                    Long-term. We follow the same group of boys from middle
                    school all the way to and through college, providing a
                    comprehensive program of support along the way.
                  </li>
                  <li>Inclusive. We do not “cherry-pick” students</li>
                  <li>Assures financial support for college</li>
                  <li>
                    Assures a consistent personal relationship and mentorship
                    with each program participant, uniquely fitting to their
                    needs
                  </li>
                  <li>
                    Promotes family engagement with all program participants
                  </li>
                  <li>
                    Comprehensive. While we are dedicated to promoting the
                    academic success of our boys, we focus just as intently on
                    building critical thinking, financial literacy and related
                    fields and skills and networking and professional
                    development. We also support the well-being of boys through
                    ongoing ongoing social-emotional development and well-being.
                  </li>
                  <li>
                    Illustrative career path models include Science, Technology,
                    Engineering, Arts and Math (BOSS Techies);, Media, Business,
                    Entrepreneurship (BOSS Entrepreneurs); Banking, Finance and
                    Investment (BOSS Bankers); Law (BOSS Barristers); Logistics,
                    Maritime and Trade (BOSS Traders); Sports (BOSS Ballers);
                    and Tourism, Cuisine and Hospitality (BOSS Travelers).
                  </li>
                  <li>
                    Flexible. Our programming is tailored to suit the needs of
                    the communities in which our programs operate.
                  </li>
                  <li>
                    Leveraged. Strategic partnerships at the local, state, and
                    national levels ensure an integrated continuum of engagement
                    and support for participants on the pathway to success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="large-container">
            <div className="grid">
              <img
                src="images/black-youth.jpg"
                className="shadow"
                alt="Business of student success"
                loading="lazy"
              />
              <div>
                <h2>Who are Target Youth?</h2>
                <ul>
                  <li>
                    Middle and high school BIPOC youth, especially economically
                    disadvantaged and boys of color, residing in Southern
                    California who want to be better and do better.
                  </li>
                  <li>Student-athletes who want to be better and do better.</li>
                </ul>
              </div>
            </div>
            <div className="btn">
              <a
                href="https://bossprograms.app.neoncrm.com/forms/student-application"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Apply To BOSS Today!</Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BossProgram

const Pillars = styled.div`
  .economically {
    background-color: #00b894;
  }
  .emotionally {
    background-color: #0984e3;
  }
  .spiritually {
    background-color: #a29bfe;
  }
  .mentally {
    background-color: #2d3436;
  }
  .socially {
    background-color: #d63031;
  }
  .physically {
    background-color: #e17055;
  }
  .pillar-header {
    display: flex;
    background-size: cover;
    background-position: center;
    height: 300px;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;

    img {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .pillar {
    justify-items: stretch;
    align-items: stretch;

    .icon {
      width: 6rem;
      border-radius: 2px soild #333;
    }

    @media (min-width: 768px) {
    }

    .pillar-content {
      padding: 1rem 2rem;
      border-top: 0;
      height: 300px;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`

const SixPillars = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.5)
    ),
    url('images/boss-programs.jpg');
  background-position: top;
  background-size: cover;
  padding: 4rem 0;
  padding: 9rem 0;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  h2 {
    color: #fff;
  }
`
