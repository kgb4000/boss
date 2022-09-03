import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const About = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
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
            The BOSS Program, now in its 5th year, has its origins in sports,
            both its advantages and its pitfalls.
          </p>
          <p>
            Program founder Everett L. Glenn, a successful and now retired
            attorney, understood that many successful people including himself
            point with fondness and pride to their participation in sport
            growing up as a major contributor to their success.
          </p>
          <p>
            Character built, values learned, camaraderie shared are common
            themes, and even highly competitive sports experience more often
            than not is viewed as a net-positive contributor to personal and
            professional success.
          </p>
          <p>The exception: inner-city boys/boys of color.</p>
          <p>
            Lacking the support structures of their peers, inner city boys/boys
            of color who show promise in sports can end up being “athlete
            track’ed”, or over-focusing on athletics to the detriment of their
            academic and interpersonal skills development.
          </p>
          <p>
            This led to the creation of BOSS™ (Business Of Student Success), a
            year-round and multi-year effort to take our boys from middle school
            to and through college graduation and into their career.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To create an equal playing field in education for boys, especially
            boys of color and/or those from under-resourced communities and
            schools, by providing positive role models, multi-year and year
            round academic guidance (STEAM focused) and coaching, life advice,
            career exposure and networking, resources and equipment to increase
            their chances for personal and professional success in all
            industries including consulting, engineering, finance, global trade,
            law, medicine, sports & entertainment and technology. We supplement
            what schools and families can provide so that our boys are also from
            “advantaged households”.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About