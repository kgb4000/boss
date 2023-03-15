/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

import Layout from '../components/Layout/Layout'
const Team = () => {
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          backgroundHeight="70vh"
          heroText="Team"
          subText="BOSS Leadership Team"
          buttonText="Donate and Help us Today!"
          buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
        />
        <section>
          <div className="container">
            <h2 className="title">Team Members</h2>
          </div>

          <div className="container">
            <TeamMembers>
              <div className="team-member">
                <div>
                  <img
                    src="images/team/everett-glenn.jpg"
                    alt="Everett L. Glenn​"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="team-member-name-title">
                    <h3>Everett L. Glenn</h3>
                    <i>CEO and Executive Director</i>
                  </div>
                  <p>
                    A graduate of Oberlin College and Case-Western Reserve
                    University’s School of Law, Everett is a member of the State
                    Bar of Ohio and the State Bar of California.
                  </p>
                  <p>
                    Everett has extensive legal experience in commercial,
                    corporate and real estate transactions, and has consistently
                    demonstrated an effectiveness at handling complex projects
                    and responding to client needs under time constraints.
                  </p>
                  <p>
                    Everett is an accomplished negotiator with a record of
                    developing creative solutions to complex business and legal
                    problems. Before establishing the Institute, Everett was a
                    principal at Entertainment & Sports Plus (“ESP”), a Southern
                    California based athlete management firm that represented
                    professional athletes, entertainers, entertainment companies
                    and related talent in contract negotiations and provided
                    advice and counsel on financial, personal development and
                    marketing matters.
                  </p>
                  <p>
                    For over 20 years, Everett was a NFL and NBA certified
                    contract advisor, whose clients included 13 first round
                    draft picks in the NBA and NFL and 3 inductees into the NFL
                    Hall of Fame.
                  </p>
                  <p>
                    Everett was the first Black attorney/agent to represent
                    multiple 1st round draft picks in the same NFL draft
                    (twice); first and perhaps still the only attorney/agent to
                    represent 1st round draft picks in both the NBA and the NFL
                    in the same year (twice); 1st round draft picks in 5
                    straight NFL drafts; and 1st round wide receivers in 4
                    straight NFL drafts.
                  </p>
                  <p>
                    Everett’s list of “firsts” also includes becoming the first
                    Black attorney in the Office of the City Attorney for the
                    City of Long Beach, where he took the lead on ensuring
                    compliance by developers with Section 3 of the Housing and
                    Urban Development (HUD) Act of 1968 on over $150 million in
                    affordable housing projects and authored the Small Business
                    Enterprise Program for the Port of Long Beach, the nation’s
                    busiest port, to promote participation of small and very
                    small business concerns in Port spending.
                  </p>
                  <p>
                    Enacted in 2006, the program resulted in the award of over
                    $300 million in construction and planning contracts for
                    small and very small businesses.
                  </p>
                  <p>
                    Everett got his legal start at Guren, Merritt, Sogg & Cohen
                    in Cleveland, OH in 1977 working under James Bailey, the
                    attorney for former Cleveland Browns (now Baltimore Ravens)
                    owner, Art Modell.
                  </p>
                  <p>
                    Everett relocated to San Francisco in 1980 and, after a
                    3-year stint as District Counsel for the U.S. Small Business
                    Administration, joined Heller, Ehrman, White & McAuliffe
                    which was one of the 100 largest law firms in the country.
                  </p>
                  <p>
                    During his career Everett also served as a Senior Attorney
                    with the Resolution Trust Corporation, the federal agency
                    established to manage the disposition of over $195 billion
                    in S & L assets, Everett developed the strategy for
                    terminating letters of credit in 76 mixed-housing,
                    commercial and retail bond-financed projects, in connection
                    with the winding up of the affairs of the receiverships for
                    16 thrifts, enabling the government to avoid $628 million in
                    funding obligations.
                  </p>
                  <p>
                    Everett serves in an Of Counsel capacity to Alvarado Smith,
                    LLP, the largest minority-owned law firm in California.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div>
                  <img
                    src="images/team/erika-thurmond.jpg"
                    alt="Erika Thurmond​"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="team-member-name-title">
                    <h3>Erika Thurmond​</h3>
                    <i>Executive Administrator</i>
                  </div>
                  <p>
                    Erika is responsible for the success of all internal
                    operations and developing solutions to program/system
                    requirements. As the right hand to our CEO, Erika is also
                    responsible for implementing policies and practices related
                    to student performance, academic coach enrichment and
                    overall operations.
                  </p>
                  <p>
                    A native of Chicago with a BA focused on Communications from
                    Chicago State University, Erika is an accomplished
                    professional with extensive experience in sales with a
                    history of achieving and exceeding revenue goals while
                    tracking activity in Salesforce. She is highly skilled at
                    cultivating strong, trusted relationships with key
                    decision-makers and creating strategic partnerships through
                    consultative selling. Known for identifying areas for
                    improvement and implementing solutions which enhance
                    processes and achieve organizational goals. She is skilled
                    in media sales, relationship management, account planning
                    and customer retention.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div>
                  <img
                    src="images/team/gwendolyn-bush.jpg"
                    alt="Gwendolyn Bush"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="team-member-name-title">
                    <h3>Gwendolyn Bush​</h3>
                    <i>Student Performance Consultant</i>
                  </div>
                  <p>
                    Gwendolyn Bush is responsible for helping our student
                    athletes ensure they are college and NCAA eligible before
                    high school senior year. The process will involve analyzing
                    their current transcript, tracking, and monitoring their
                    progress and developing an action plan to keep or put them
                    on track.
                  </p>
                  <p>
                    Gwendolyn Bush holds a bachelor’s in Computer Information
                    Systems and a masters in Educational Leadership and has
                    worked 27 years in the Broward County school system in a
                    variety of teaching and administrative positions. Gwen spent
                    three years as Recruiting Administrator and Player
                    Development for the University of Michigan’s Director of
                    Football Operations. She acted as a liaison between the
                    players, their parents, and the coaches. She was
                    instrumental in reviewing transcripts, developing academic
                    plans, and administered a job- shadowing program for
                    players.
                  </p>
                  <p>
                    Bush successfully navigated her own children to successful
                    collegiate careers. Her son, Wayne Lyons, played football at
                    Stanford University and the University of Michigan where he
                    graduated with a bachelor’s degree in Engineering and a
                    master’s degree in Social Work respectively. Her daughter,
                    Danielle Lyons, graduated from University of Florida with a
                    bachelor’s degree in Recreation and Event Management and
                    currently serves as the Assistant Director of Football
                    Operations with Florida Atlantic University Football.
                  </p>
                  <p>
                    Bush is an active member of Alpha Kappa Alpha Sorority,
                    Incorporated.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div>
                  <img
                    src="images/team/dr-kagba-suaray.jpg"
                    alt="Dr. Kagba Suaray"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="team-member-name-title">
                    <h3>Dr. Kagba Suaray</h3>
                    <i>Math/STEM Initiative Consultant</i>
                  </div>
                  <p>
                    Kagba Suaray is currently in his 17th year as a Professor of
                    Mathematics and Statistics at California State University,
                    Long Beach.
                  </p>
                  <p>
                    He serves as Graduate Advisor for one of the largest Applied
                    Statistics masters programs in the state. He has also served
                    as the Director of Upward Bound’s Math Science program at
                    CSULB, and is a product of the McNair scholars’ program
                    which helped him earn his PhD in mathematics from UC San
                    Diego at the age of 25, where he was the recipient of the
                    Eugene Cota Robles Fellowship.
                  </p>
                  <p>
                    As a founding member of The Hesabu Circle, he strives
                    to empower youth to discover the mathematical greatness that
                    resides within them because of their Blackness, not in spite
                    of it.
                  </p>
                  <p>
                    “Hesabu” is the Kiswahili word for “Mathematics.” The group
                    of Black mathematics faculty and administrative staff at
                    Southern California campuses who created the Circle did so
                    to create connections for mutual support to break down
                    artificial barriers caused by geography, institution, or
                    academic level and build networks of support that encourage
                    and empower individuals of African descent to envision and
                    achieve excellence in mathematics.
                  </p>
                </div>
              </div>
              <p className="center">
                Also see our{' '}
                <Link href="/board-of-directors" passHref>
                  <a>Board of Directors</a>
                </Link>{' '}
                and our{' '}
                <Link href="/athlete-advisory-board" passHref>
                  <a>Athlete Advisory Board</a>
                </Link>
                .
              </p>
            </TeamMembers>
            <div className="btn">
              <Button>Donate and Help Us Today!</Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

const TeamMembers = styled.div`
  .team-member {
    margin-bottom: 4rem;
  }
  img {
    max-width: 200px;
    margin: 0;
    margin-bottom: 1rem;
    border-radius: 20px;
    box-shadow: -8px 8px 0;
    color: #ecf0f1;
  }

  .team-member-name-title {
    margin-bottom: 1rem;
    h3 {
      margin-bottom: 0.5rem;
    }
    i {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    .team-member {
      display: flex;
      justify-content: space-between;

      img {
        margin-right: 4rem;
      }
    }
  }
`

export default Team
