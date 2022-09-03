/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import PageHeroSection from '../components/PageHeroSection'
import Button from '../components/Button'

import React from 'react'

const TestimonialsPage = () => {
  return (
    <>
      <PageHeroSection
        heading="Testimonials"
        subText="Leveraging the power of sports to empower our young boys to soar."
        buttontext="Learn more"
        buttonLink="Https:google.com"
      />
      <section>
        <div className="container">
          <h2>Boss Program Testimonials</h2>
          <div className="btn">
            <Button>Apply Today!</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>From Parents</h2>
          <TestimonialsSections>
            <p>
              A true leader is someone who thinks of the next generation. Mr .
              Everett Glenn is such a leader. He is a man of integrity and I
              totally trust my two boys with him and his leadership. The BOSS
              program is a blessing and encouragement to my boys to strive and
              achieve all that God has designed them to be. We cannot raise our
              kids alone, but with the help of the BOSS program and the time,
              efforts and all those who make the program what it is , we are
              motivated to encourage our kids to dream big and do what is
              necessary to fulfill that dream.
            </p>
            <p>Thank you Mr Glenn and BOSS.</p>
            <p>Nadira Harrell</p>
          </TestimonialsSections>
          <TestimonialsSections>
            <p>
              The BOSS program is one of the best things that ever happened to
              me. It gave me tips to succeed in life and most importantly, it
              prepared me for my future. I love this program and wish more will
              come.
            </p>
            <p>Makaih Williams</p>
          </TestimonialsSections>
          <TestimonialsSections>
            <p>
              I am the parent of 2 BOSS participants and want to urge your
              support for and thank Everett and his team for the great job they
              did with the boys at summer camp and throughout the year!
            </p>
            <p>
              Each one of the field trips they took, the Port of Long Beach,
              Laker's clinic, Dodger's game, Rams' camp and the upcoming
              Chargers game would be the highlight of the summer for most kids
              in Long Beach.Our boys got them all! It wasn't all fun and games
              either, the boys also got to experience 2 days at the Aerospace
              Corporation in El Segundo where they got experience on future
              space technology and hands-on work with space engineers and
              scientists. The boys received Chrome Books to do research, they
              had "Math Madness" competitions, built robots, had reading
              assignments, and (my boys least favorite activity) wrote
              argumentative essays.
            </p>
            <p>
              But, as a parent, the best part of the BOSS summer camp and the
              BOSS program in general is that you knew the boys were in good
              hands with Everett. The peace of mind, knowing your boys are safe,
              is priceless! So I urge us parents to make a financial
              contribution to the BOSS program in whatever amount you can. There
              is no way we could afford to send our boys to a privately run camp
              that provided the safety and all of the activities that Boss
              provided.
            </p>
            <p>Reggie and Lori Ann Harrison</p>
          </TestimonialsSections>
          <div className="btn">
            <Button>Apply Today!</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsPage

const TestimonialsSections = styled.div`
  padding: 3rem;
  margin-bottom: 2rem 4rem;
`
