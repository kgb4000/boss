import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const Donate = () => {
  return (
    <>
      <HeroSection
        backgroundImage="images/headers/donate-to-boss.jpg"
        backgroundHeight="70vh"
        heroText="Donate"
        subText="Donate and help BOSS empower our young boys."
        buttonText="Donate and Help us Today!"
        buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
      />
      <section>
        <div className="container">
          <h2>Help Us with Your Donation</h2>
          <p>
            The COVID-19 pandemic has laid bare the inequities in public
            education, and how equitable opportunities are so dependent upon
            parental background, wealth, and access to resources. Our goal is to
            dramatically increase the number of boys from under-resourced
            communities and schools who enter and legitimately graduate college
            through a cost and programmatically effective strategy to attract,
            retain, inspire, motivate and support them from middle school
            through college graduation.{' '}
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Do Your Part and Impact The Youth</h2>
          <p>
            They say the future is written by the young. They’re the ones who
            will make life changing decisions, facilitate major change, and lead
            the world into new heights — with the proper tools and
            opportunities. Unfortunately, too many boys of color and those from
            under-resourced schools still grapple with issues that prevent them
            from reaching their personal and collective potential.
          </p>
          <p>
            You can be the difference that helps change that for good! Invest in
            our boys and give them a fighting chance to lead the world tomorrow.
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
          <h2>Give Your Time</h2>
          <p>
            Have you been an ESP volunteer this year? Many companies offer
            volunteer grants to sup­port the non­profit orga­ni­za­tions with
            which their employ­ees are closely involved. Please con­sider
            pur­su­ing this if it’s available at your company.
          </p>
          <p>Become a volunteer today.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Become a Corporate or BOSS Funder</h2>
          <p>
            If you would like to become a corporate or BOSS funder, please
            contact Everett Glenn at (562) 619-8460 or eglenn@bossprograms.org
            today.
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
    </>
  )
}

export default Donate
