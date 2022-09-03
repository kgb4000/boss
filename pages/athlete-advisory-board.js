/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHeroSection'
import Button from '../components/Button'

const AthleteBoard = () => {
  return (
    <>
      <PageHero heading="Athlete Advisory Board" />
      <section>
        <div className="container">
          <h2>Athlete Advisory Board Members</h2>
        </div>
        <div className="container">
          <AdvisoryBoardMembers>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Clark “Special K” Kellogg</h3>
              </div>
              <p>
                Clark “Special K” Kellogg, a Cleveland, OH native, had a high
                school basketball career (St. Joe’s High) generally regarded as
                one of the finest in Cleveland history.
              </p>
              <p>
                Kellogg starred at Ohio State from 1979-82, earning All-Big-Ten
                Conference and MVP honors, and was an NBA lottery pick (8th
                overall) after his junior year.
              </p>
              <p>
                Kellogg was heralded as the next breakout NBA superstar (“next
                Magic and first LeBron”) following a rookie season that saw
                become one of five rookies in NBA history to average a
                double/double, runner-up in Rookie-of-the-Year voting and a
                member of the NBA All- Rookie Team.
              </p>
              <p>
                Following his retirement from the NBA after 5 seasons due to
                injury, Kellogg joined ESPN as a basketball analyst. Kellogg
                served as a game analyst for CBS Sports coverage of the NCAA
                Tournament from 1993 to 1994.
              </p>
              <p>
                From 1994 to 1997, he served as a studio co-host for the early
                round coverage of the NCAA Tournament. In 1997, Kellogg joined
                CBS Sports full-time as a studio/game analyst for college
                basketball coverage and was one of three in-studio hosts for
                March Madness.
              </p>
              <p>
                Kellogg replaced Billy Packer as CBS’ lead basketball game
                analyst beginning in the 2008–2009 college basketball season.
                Kellogg appeared in the popular NBA video game NBA 2K9 as the
                co-commentator alongside Kevin Harlan, and the pair have
                appeared in every game since, including NBA 2K19.
              </p>
              <p>
                In 1996, Kellogg received his marketing degree from Ohio State
                and in June, 2010, Ohio Gov. Ted Strickland appointed Kellogg to
                the university's board of trustees, for a term that ended in
                2019. A man of strong faith, Kellogg has two sons and a daughter
                who all played D-1 sports.
              </p>
              <p>
                Kellogg has been married to his college sweetheart, Rosy
                Kellogg, since 1983.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Jameson Evans</h3>
              </div>
              <p>Purdue football, Finance Strategy Manager, Microsoft</p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Dennis Franklin</h3>
              </div>
              <p>
                University of Michigan football (first black quarterback),
                Ferraro & Associates Realty
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Kate Ferrara</h3>
              </div>
              <p>
                Former college athlete, now a member of Holland & Knight&apos;s
                Financial Services Team and Entertainment Law and Sports
                practices, focusing her practice on the representation of
                professional athletes and multijurisdictional secured lending
                transactions in a wide range of industries.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Willie Gault</h3>
              </div>
              <p>
                University of Tennessee football/track, Chicago Bears/Oakland
                Raiders. Entrepreneur, Actor, Motivational Speaker
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Robert Gustavis</h3>
              </div>
              <p>
                A former ASU standout football player and former client of our
                founder. Robert has worked in various financial professional
                roles for the past 14 years and he is currently Divisional Vice
                President at American International Group (AIG).
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Clark Kellogg</h3>
              </div>
              <p>
                Ohio State basketball, Indiana Pacers. Lead Analyst, CBS College
                Basketball, OSU Board of Trustees
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Anthony Hancock</h3>
              </div>
              <p>
                University of Tennessee football/track, Kansas City Chiefs.
                Special Education Teacher/Board of Directors, Tennessee
                Education Association
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Kate Ferrara</h3>
              </div>
              <p>
                Former college athlete, now a member of Holland & Knight&apos;s
                Financial Services Team and Entertainment Law and Sports
                practices, focusing her practice on the representation of
                professional athletes and multijurisdictional secured lending
                transactions in a wide range of industries.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Shawn Stuckey</h3>
              </div>
              <p>
                Vanderbilt football, New England Patriots. Workers Comp
                attorney.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Chandler Jones</h3>
              </div>
              <p>
                San Jose State football, Cleveland Browns. San Jose State grad
                assistant, Masters candidate, Summer 2019
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-name-title">
                <h3>Will Poole</h3>
              </div>
              <p>
                USC football, New York Jets. Real estate broker, Lee &
                Associates
              </p>
            </div>
          </AdvisoryBoardMembers>
          <div className="btn">
            <Button>Donate and Help Us Today!</Button>
          </div>
        </div>
      </section>
    </>
  )
}

const AdvisoryBoardMembers = styled.div`
  .board-member {
    margin: 3rem 0;
  }

  .board-member-name-title {
    margin-bottom: 1rem;
    h3 {
      margin-bottom: 0.5rem;
    }
  }
`

export default AthleteBoard
