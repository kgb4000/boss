import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const Stem = () => {
  return (
    <>
      <Layout>
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          backgroundHeight="70vh"
          heroText="S T E M"
          subText="Science | Technology | Enginerring | Mathematics"
          buttonText="register for STEM today!"
          buttonLink="/register"
        />
        <StemPage>
          <div className="container">
            <h2>Why STEM?</h2>
            <p>
              Science, Technology, Engineering, and Math (STEM) occupations are
              in high demand and continue to be among the fastest growing within
              the 21st century workforce across the US economy (BLS, 2017).
            </p>
            <p>
              And yet, despite comprising 27% of the US Population, only 11% of
              science and engineering jobs are held by Black, Latinx, and Native
              American workers (NSF, 2018). The needs of this quickly evolving
              21st century global workforce creates both an economic and social
              imperative to ensure students of color are equipped to engage in
              the STEM sector at parity with their peers.
            </p>
            <p>
              Eliminating the barriers facing Black, Latinx, and Native American
              students who have the desire to enter STEM and computing
              professions has the potential to meet the projected demand for
              STEM workers in our future workforce, while broadening the
              economic opportunities of underrepresented communities of color.
              Moreover, by investing in youth of color to enter and persist in
              STEM and computing occupations, they develop the skills to engage
              in the modern workforce while being empowered to leverage their
              lived experiences to solve the most pressing problems facing
              society (Bobb, 2016).
            </p>
            <div className="btn">
              <Link href="/register">
                <a>
                  <Button>Apply to our STEM Program</Button>
                </a>
              </Link>
            </div>
            <h2>STEM Fast Facts</h2>
            <ul>
              <li>College STEM majors out-earn other college grads.</li>
              <li>
                The STEM jobs market grew 45% in 2018. Fifteen (15) of the
                twenty (20) fastest growing occupations require significant
                mathematics or science preparation.
              </li>
              <li>
                People in STEM fields can expect to earn 26% more money on
                average and be less likely to experience job loss.
              </li>
              <li>
                92% of boys and 97% of girls lose interest in STEM if not
                engaged by the 5 th grade (Dr. Kenneth Wesson, Educational
                Consultant: Neuroscience).
              </li>
              <li>
                Currently only 16% of US bachelor’s degrees will specialize in
                STEM
              </li>
              <li>
                Out of 65 countries, American students score 17 th in science
                and 25 th in math ability (The U.S. Organization of Economic
                Cooperation and Development).
              </li>
              <li>
                Only 6% of high school seniors will get a bachelor&#39;s degree
                in a STEM field.
              </li>
              <li>Only 33% of eight graders are interested in STEM majors</li>
              <li>
                Undergraduate programs in science and engineering report the
                lowest retention rates among all academic disciplines. Less than
                half of undergraduates that declare and intent to major in a
                STEM field complete a degree in one of those subjects.
              </li>
              <li>
                Top earners in technology and science earn millions per year —
                certainly as much as most celebrities. Even so…the U.S. is not
                graduating nearly enough majors in these fields to supply the
                enormous demand.
              </li>
              <li>
                Experts tell us that first-hand experience with a subject sparks
                neurons in a child’s brain that affect how long that child will
                retain a particular memory
              </li>
              <li>
                6% of U.S. Undergraduate major in engineering compared to 12% in
                Europe, 20% in Singapore, and 40% in China
              </li>
              <li>
                STEM education builds critical thinking and problem-solving
                skills, which are necessary for overcoming the difficulties
                children may face in life.
              </li>
              <li>STEM education promotes teamwork.</li>
              <li>
                STEM education increases global interest in technical
                disciplines.
              </li>
              <li>STEM education puts emphasis on visualization.</li>
              <li>
                STEM education prepares children for future technological
                advancements, which are inevitable.
              </li>
            </ul>
            <div className="btn">
              <Link href="/register">
                <a>
                  <Button>Apply to our STEM Program</Button>
                </a>
              </Link>
            </div>
            <h2>Areas of Concentration</h2>
            <p>
              S.T.E.M. is interdisciplinary and interwoven into our everyday
              lives.
            </p>
            <p>
              S.T.E.M. education works with problems, challenges and solutions
              that are real world based. It is our hope that the Dr. Humphries
              STEM Portal will provide the resources and supports to help
              prepare BIPOC students to critically analyze problems facing their
              communities and create STEM based solutions utilizing a design
              thinking framework.
            </p>
            <p className="stem">
              <span>S</span>Science enables us to develop our interest in, and
              understanding of, the living, material and physical world and
              develop the skills of collaboration, research, critical enquiry,
              experimentation, exploration and discovery.
            </p>
            <p className="stem">
              <span>T</span> Technology is what is produced through the
              application of scientific knowledge to human activity.
            </p>
            <p className="stem">
              <span>E</span> Engineering is the method of applying scientific
              and mathematical knowledge to human // activity
            </p>
            <p className="stem">
              <span>M</span>
              <div>
                All of STEM is underpinned by Mathematics, which includes
                numeracy, and equips us with the skills and approaches we need
                to interpret and analyze information, simplify and solve
                problems, assess risk and make informed decisions. Mathematics
                and Numeracy develop essential skills and capabilities for life,
                participation in society and in all jobs, careers and
                occupations. As well as providing the foundations for STEM, the
                study and application of mathematics is a vast and critical
                discipline in itself with far-reaching implications and value.
              </div>
            </p>
            <p>
              Together, these components cover a wide range of fields including
              business, computing science, chemicals, food, textiles, craft,
              design, engineering, graphics and applied technologies including
              those relating to construction, transport, the built environment,
              biomedical, microbiological and food technology.
            </p>
          </div>
          <div className="btn">
            <Link href="/register">
              <a>
                <Button>Apply to our STEM Program</Button>
              </a>
            </Link>
          </div>
        </StemPage>
      </Layout>
    </>
  )
}

const StemPage = styled.section`
  span {
    font-size: 2rem;
    margin-right: 1rem;
  }
`

export default Stem
