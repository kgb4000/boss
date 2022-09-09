/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const BoardOfDirectors = () => {
  return (
    <>
      <HeroSection
        backgroundImage="images/headers/board-cover-img.jpg"
        backgroundHeight="70vh"
        heroText="Board of Directors"
        subText="BOSS Leadership Team"
        buttonText="Donate and Help us Today!"
        buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
      />
      <section>
        <div className="container">
          <h2 className="title">Board Members</h2>
        </div>
        <div className="container">
          <BoardMembers>
            <div className="board-member">
              <div className="img">
                <img src="images/board/everett-glenn.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Everett L. Glenn</h3>
                </div>
                <p>
                  A graduate of Oberlin College and Case-Western Reserve
                  University’s School of Law, Everett is a member of the State
                  Bar of Ohio and the State Bar of California.
                </p>
                <p>
                  Everett has extensive legal experience in commercial,
                  corporate and real estate transactions, and has consistently
                  demonstrated an effectiveness at handling complex projects and
                  responding to client needs under time constraints. Everett is
                  an accomplished negotiator with a record of developing
                  creative solutions to complex business and legal problems.
                </p>
                <p>
                  Before establishing the Institute, Everett was a principal of
                  Entertainment & Sports Plus (“ESP”), a Southern California
                  based athlete management firm that represented professional
                  athletes, entertainers, entertainment companies and related
                  talent in contract negotiations and provided advice and
                  counsel on financial, personal development and marketing
                  matters.
                </p>
                <p>
                  For over 20 years, Everett was a NFL and NBA certified
                  contract advisor, whose clients included 13 first round draft
                  picks in the NBA and NFL and 3 inductees into the NFL Hall of
                  Fame. Everett was the first Black attorney/agent to represent
                  multiple 1st round draft picks in the same NFL draft (twice);
                  1st round draft picks in both the NBA and the NFL in the same
                  year (twice); 1st round draft picks in 5 straight NFL drafts;
                  and 1st round wide receivers in 4 straight NFL drafts.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/f-david-coleman.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>F. David Coleman</h3>
                </div>
                <p>
                  Former college athlete. Vice President of Officiating, Pac-12
                  Conference. Former VP of Officiating, National Football
                  League; Director-Human Resources North America, Saint-Gobain
                  Performance Plastics; General Manager, Corporate Diversity,
                  U.S. Steel; Vice President, Ranpak; Lieutenant Colonel –
                  Adjutant General’s Corps, U.S. Army. Board Member, Murtis
                  Taylor Human Services Center. B.S. Engineering, U.S. Military
                  at West Point; M.S. Operational Research, Weatherhead School
                  of Management at Case-Western Reserve University.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/ryan-delaney.jpeg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Ryan Delaney</h3>
                </div>
                <p>
                  Managing Director and Head of Asset Management, Real Estate,
                  Oaktree Capital Management, where he is responsible for
                  overseeing all aspects of asset, fund and portfolio
                  management, including global staffing matters and the workout
                  of distressed assets.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/ferrara-kate-m.jpeg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Kate Ferrara</h3>
                </div>
                <p>
                  Former college athlete, now a member of Holland &
                  Knight&apos;s Financial Services Team and Entertainment Law
                  and Sports practices, focusing her practice on the
                  representation of professional athletes and
                  multijurisdictional secured lending transactions in a wide
                  range of industries.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/alfred-miller.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Alfred Miller</h3>
                </div>
                <p>
                  Former athlete, now an experienced executive committed to
                  developing data-driven strategies, which protect assets,
                  support revenue capture and mitigate organizational risk.
                </p>
                <p>
                  A strategy professional with deep and diverse experiences
                  across multiple disciplines and industries. Experienced in
                  supporting the development of organizational infrastructures,
                  which support advancement by leveraging business analytics and
                  research-based best practices resulting in collaborative,
                  results driven, organizational strategies for the C-suite by
                  developing and implementing initiatives focused on sustainable
                  growth and operational excellence.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/jason-greenlee.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Jason Greenlee</h3>
                </div>
                <p>
                  A graduate of University of La Verne (Cum Laude), Jason is a
                  Certified Public Accountant and a member of the California
                  Board of Accountancy. Jason is an Audit Managing Director,
                  Deloitte & Touche LLP, where he serves clients within the
                  investment management and banking industries. Jason played
                  basketball at the University of La Verne and finished his
                  career as University of La Verne’s all-time leading scorer.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/robert-gustavis.jpeg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Robert Gustavis</h3>
                </div>
                <p>
                  A former ASU standout football player and former client of our
                  founder. Robert has worked in various financial professional
                  roles for the past 14 years and he is currently Divisional
                  Vice President at American International Group (AIG).
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/ralph-jackson.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Ralph Jackson</h3>
                </div>
                <p>
                  California High School Player of the Year (1980) and former
                  UCLA Bruin scholar-athlete, now Senior Vice President,
                  Financial Advisor and Global Sports & Entertainment Director
                  at Morgan Stanley.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/kofi-lomotey.jpg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Kofi Lomotey</h3>
                </div>
                <p>
                  Former college athlete. Bardo Distinguished Professor, Dept.
                  of Human Services, Education Leadership, Western Carolina
                  University.
                </p>
                <p>
                  Professor at SUNY-Buffalo and LSU. Provost at Medgar Evers
                  College-CUNY and Fisk University. Chancellor at Southern
                  University and President at Fort Valley State University.
                  Publications include the Handbook on Urban Education (with H.
                  Richard Milner), the Encyclopedia of African American
                  Education and Going to School: The African American
                  Experience. Editor (19 years) of Urban Education Journal, for
                  19 years.
                </p>
                <p>
                  Member editorial boards of the Journal of Negro Education and
                  Educational Researcher. Member, AERA Journals Publication
                  Committee. B.A., Economics, Oberlin College; M.Ed., Elementary
                  Education Curriculum and instruction (Cleveland State
                  University), MA, Educational Administration and Policy
                  Analysis, Stanford, Ph.D., Educational Administration and
                  Analysis, Stanford.
                </p>
              </div>
            </div>
            <div className="board-member">
              <div className="img">
                <img src="images/board/dr-humphries.jpeg" />
              </div>
              <div className="info">
                <div className="board-member-name-title">
                  <h3>Dr. Frederick Humphries, </h3>
                  <i>Board Member Emeritus</i>
                </div>
                <p>
                  Former college athlete. Regent Professor, College of Law,
                  Florida A&M University. President Emeritus, Tennessee State
                  University and Florida A&M University. CEO (2001-03), National
                  Association for Equal Opportunity in Higher Education. B.A.,
                  Magna Cum Laude, Physical Chemistry, Florida A&M University;
                  Ph.D., Physical Chemistry, University of Pittsburgh.
                </p>
              </div>
            </div>
          </BoardMembers>
          <p className="center">
            Also see our{' '}
            <Link href="/team" passHref>
              <a>Leadership Team</a>
            </Link>{' '}
            and our{' '}
            <Link href="/athlete-advisory-board" passHref>
              <a>Athlete Advisory Board</a>
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
    </>
  )
}

const BoardMembers = styled.div`
  .board-member {
    margin: 3rem 0;

    img {
      max-width: 200px;
      margin-right: 4rem;
      border-radius: 20px;
    }

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
`

export default BoardOfDirectors
