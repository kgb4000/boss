/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const AthleteBoard = () => {
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="images/athletic-board/kellogg-and-obama.jpg"
          backgroundHeight="70vh"
          heroText="Athlete Advisory Board"
          subText="Donate and help us empower our young boys"
          buttonText="Donate and Help us Today!"
          buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
        />
        <section>
          <div className="container">
            <h2 className="title">Athlete Advisory Board Members</h2>
          </div>
          <div className="container">
            <AdvisoryBoardMembers>
              <div className="board-member-clark-kellogg">
                <div>
                  <img
                    src="images/athletic-board/kellogg-and-obama.jpg"
                    alt="Clark “Special K” Kellogg"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Clark “Special K” Kellogg</h3>
                  </div>
                  <p>
                    Clark “Special K” Kellogg, a Cleveland, OH native, had a
                    high school basketball career (St. Joe’s High) generally
                    regarded as one of the finest in Cleveland history.
                  </p>
                  <p>
                    Kellogg starred at Ohio State from 1979-82, earning
                    All-Big-Ten Conference and MVP honors, and was an NBA
                    lottery pick (8th overall) after his junior year.
                  </p>
                  <p>
                    Kellogg was heralded as the next breakout NBA superstar
                    (“next Magic and first LeBron”) following a rookie season
                    that saw become one of five rookies in NBA history to
                    average a double/double, runner-up in Rookie-of-the-Year
                    voting and a member of the NBA All- Rookie Team.
                  </p>
                  <p>
                    Following his retirement from the NBA after 5 seasons due to
                    injury, Kellogg joined ESPN as a basketball analyst. Kellogg
                    served as a game analyst for CBS Sports coverage of the NCAA
                    Tournament from 1993 to 1994.
                  </p>
                  <p>
                    From 1994 to 1997, he served as a studio co-host for the
                    early round coverage of the NCAA Tournament. In 1997,
                    Kellogg joined CBS Sports full-time as a studio/game analyst
                    for college basketball coverage and was one of three
                    in-studio hosts for March Madness.
                  </p>
                  <p>
                    Kellogg replaced Billy Packer as CBS’ lead basketball game
                    analyst beginning in the 2008–2009 college basketball
                    season. Kellogg appeared in the popular NBA video game NBA
                    2K9 as the co-commentator alongside Kevin Harlan, and the
                    pair have appeared in every game since, including NBA 2K19.
                  </p>
                  <p>
                    In 1996, Kellogg received his marketing degree from Ohio
                    State and in June, 2010, Ohio Gov. Ted Strickland appointed
                    Kellogg to the university's board of trustees, for a term
                    that ended in 2019. A man of strong faith, Kellogg has two
                    sons and a daughter who all played D-1 sports.
                  </p>
                  <p>
                    Kellogg has been married to his college sweetheart, Rosy
                    Kellogg, since 1983.
                  </p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/jameson-evans.png"
                    alt="Clark “Special K” Kellogg"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Jameson Evans</h3>
                  </div>
                  <p>Purdue football, Finance Strategy Manager, Microsoft</p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/dennis-franklin.png"
                    alt="Dennis Franklin"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Dennis Franklin</h3>
                  </div>
                  <p>
                    University of Michigan football (first black quarterback),
                    Ferraro & Associates Realty
                  </p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/willie-gault.png"
                    alt="Willie Gault"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Willie Gault</h3>
                  </div>
                  <p>
                    University of Tennessee football/track, Chicago
                    Bears/Oakland Raiders. Entrepreneur, Actor, Motivational
                    Speaker
                  </p>
                </div>
              </div>

              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/anthony-hancock.png"
                    alt="Anthony Hancock"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Anthony Hancock</h3>
                  </div>
                  <p>
                    University of Tennessee football/track, Kansas City Chiefs.
                    Special Education Teacher/Board of Directors, Tennessee
                    Education Association
                  </p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/shawn-stuckey.jpg"
                    alt="Shawn Stuckey"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Shawn Stuckey</h3>
                  </div>
                  <p>
                    Vanderbilt football, New England Patriots. Workers Comp
                    attorney.
                  </p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/chandler-jones.jpg"
                    alt="Chandler Jones"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Chandler Jones</h3>
                  </div>
                  <p>
                    San Jose State football, Cleveland Browns. San Jose State
                    grad assistant, Masters candidate, Summer 2019
                  </p>
                </div>
              </div>
              <div className="board-member">
                <div>
                  <img
                    src="images/athletic-board/will-poole.jpg"
                    alt="Will Poole"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="board-member-name-title">
                    <h3>Will Poole</h3>
                  </div>
                  <p>
                    USC football, New York Jets. Real estate broker, Lee &
                    Associates
                  </p>
                </div>
              </div>
            </AdvisoryBoardMembers>
            <p className="center">
              Also see our{' '}
              <Link href="/team" passHref>
                <a>Leadership Team</a>
              </Link>{' '}
              and our{' '}
              <Link href="/board-of-directors" passHref>
                <a>Board of Directors</a>
              </Link>
              .
            </p>
            <div className="btn">
              <a
                href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
                target="blank"
                rel="noreferrer"
              >
                <Button>Donate and Help Us Today!</Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

const AdvisoryBoardMembers = styled.div`
  .board-member {
    
    img {
      width: 200px;
      margin-bottom: 1rem;
      border-radius: 20px;
      box-shadow: -8px 8px 0;
      color: #ecf0f1;
      }
  }

  .board-member-clark-kellogg {
      margin-bottom: 4rem;

      img {
      width: 200px;
      border-radius: 20px;
      margin-bottom: 1rem;
    }
    }

  @media (min-width: 500px) {
    .board-member {
      display: flex;
      margin-bottom: 4rem;
  }

      img {
        max-width: 200px;
        margin: 0;
        margin-right: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    .board-member-clark-kellogg {
      display: flex;
      margin-bottom: 4rem;
    }
  }
`

export default AthleteBoard
