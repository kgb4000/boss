import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        backgroundHeight="100vh"
        heroText="BOSS"
        subText="Leveraging the power of sports to empower our young boys to soar."
        buttonText="Donate and Help us Today!"
        buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
      />
      <section>
        <div className="container">
          <h2>Boss Program</h2>
          <p>
            Through BOSS™ (Business Of Student Success), We’re Equipping Boys,
            Especially Boys Of Color, With The Tools To Succeed In School, In
            The Community And Professionally, With An Emphasis On STEAM,
            Critical Thinking/Writing And Related Fields. We Also Leverage The
            Power Of Sport To Inspire Boys To Pursue Greatness
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
          <h2>What We Do</h2>
          <h3>Prepare</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui
            maiores facilis nihil dicta voluptatem perspiciatis modi culpa,
            accusantium quisquam voluptas inventore id. Ipsa tempora excepturi
            corporis praesentium non enim.
          </p>
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui
            maiores facilis nihil dicta voluptatem perspiciatis modi culpa,
            accusantium quisquam voluptas inventore id. Ipsa tempora excepturi
            corporis praesentium non enim.
          </p>
          <h3>Leverage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui
            maiores facilis nihil dicta voluptatem perspiciatis modi culpa,
            accusantium quisquam voluptas inventore id. Ipsa tempora excepturi
            corporis praesentium non enim.
          </p>
          <div className="btn">
            <Button>Learn More!</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Resources Lead To Success</h2>
          <p>
            Resources are what dictate how successful kids are likely to be in
            the future. Unfortunately, inner city boys and boys of color (Target
            Boys), lack the basic resources needed to reach the same success as
            more “advantaged” households.
          </p>
          <p>
            That’s why the BOSS™ program was created: to provide the exposure,
            opportunities, and resources so our Target Boys come from
            “advantaged households” and have an equal opportunity to achieve
            personal and professional success, including:
          </p>
          <ul>
            <li>
              Intensive 2-week camp including STEAM project work, Math Madness
              competition, critical reading/argumentative writing and career
              pathway field trips and activities
            </li>
            <li>
              Year-round and multi-year Academic Enrichment (STEAM focused with
              critical thinking/writing), financial literacy, leadership, life
              skills, noncognitive skills development
            </li>
            <li>
              Amazing real-world experiences aligned with Consulting,
              Engineering, Global Trade, Law, Media, Medicine, and Technology
              career paths
            </li>
            <li>
              Opportunities for advocacy and service to build on leadership and
              team building skills
            </li>
          </ul>
          <div className="btn">
            <Button>Read More About Us!</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Do Your Part & Impact The Youth</h2>
          <p>
            They say the future is written by the young. They’re the ones who
            will make life changing decisions, facilitate major change, and lead
            the world into new heights — with the proper tools and
            opportunities. Unfortunately, too many boys of color and those from
            under-resourced schools still grapple with issues that prevent them
            from reaching their personal and collective potential.{' '}
          </p>
          <p>
            You can be the difference that helps change that for good! Invest in
            our boys and give them a fighting chance to lead the world tomorrow.
          </p>
          <div className="btn">
            <Button>Donate Today!</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Latest News</h2>
          <p>
            Where Young Minds Are Empowered to Soar, To Sail, To Step Forward
            Bravely Into The Unknown, Being Guided More By Imagination Than
            Memory, And Ultimately To Reach Beyond Their Fears And Failures
          </p>
          <div className="btn">
            <Button>Read More</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
