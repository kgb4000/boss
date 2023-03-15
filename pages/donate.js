/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const donate = 'https://bossprograms.app.neoncrm.com/forms/donation-form'

const Donate = () => {
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="images/headers/donate-to-boss.jpg"
          backgroundHeight="70vh"
          heroText="Donate"
          subText="Donate and help BOSS empower our target youth"
          buttonText="Donate and Help us Today!"
          buttonLink={donate}
        />
        <section>
          <div className="container">
            <h2>Join the BOSS Movement!</h2>
            <p>
              The COVID-19 pandemic has laid bare the inequities in public
              education, and how equitable opportunities are so dependent upon
              parental background, wealth, and access to resources. Our goal is
              to dramatically increase the number of target youth who enter and
              legitimately graduate college or post-secondary education through
              a cost and programmatically effective strategy to attract, retain,
              motivate and support them from middle school through graduation.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Become a BOSS Funder</h2>
            <p>
              They say the future is written by the young. They’re the ones who
              will make life changing decisions, facilitate major change, and
              lead the world into new heights — with the proper tools and
              opportunities. Unfortunately, too many target youth still grapple
              with issues that prevent them from reaching their personal and
              collective potential.
            </p>
            <p>
              You can be the difference that helps change that for good! Invest
              in our target youth and give them a fighting chance to lead the
              world tomorrow.
            </p>
          </div>
          <div className="btn">
            <a href="">
              <Button>Donate and Help us today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Become a BOSS Mentor or Volunteer</h2>
            <p>
              It takes a village to raise a child, and we have many! If you'd
              like to join the BOSS village and have ever considered
              volunteering, we have a variety of ways you can lend your time,
              talents or expertise to help shape our target youth.
            </p>
            <p>Become a volunteer today.</p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Become a Corporate BOSS Sponsor</h2>
            <p>
              If you would like details on how to become a Corporate BOSS
              Sponsor, please contact Everett Glenn directly at (562) 619-8460
              or info@bossprograms.org today.
            </p>
          </div>
          <div className="btn">
            <Link href="/contact">
              <a>
                <Button>Contact us today!</Button>
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Donate
