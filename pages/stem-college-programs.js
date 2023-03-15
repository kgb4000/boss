/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

import StemLayout from '../components/Layout/StemLayout'
const Team = () => {
  return (
    <>
      <StemLayout>
        <HeroSection
          backgroundImage="images/colleges/stem-college-header.jpg"
          backgroundHeight="70vh"
          heroText="STEM College Programs"
          subText="STEM College programs."
          // buttonText="Donate and Help us Today!"
          // buttonLink="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K72MD3PXYF8HA"
        />
        <section>
          <div className="container">
            <h2 className="title">HBCU Programs</h2>
            <p>
              The HBCU experience is unique and has a lot to offer students
              interested in STEM programs.
            </p>
            <p>
              These universities provide an environment that is both nurturing
              and challenging, and they offer opportunities for students to get
              involved in research and other hands-on learning experiences. In
              addition, HBCUs typically have strong relationships with
              businesses and industries in their local communities, which can
              lead to internships and job opportunities for students. If you are
              interested in pursuing a career in science, technology,
              engineering, or math, an HBCU could be the perfect fit for you. To
              learn more about what HBCUs have to offer, check out this list of
              the top HBCUs for STEM.
            </p>
          </div>
          <div className="container">
            <Colleges>
              <div className="college">
                <h3 className="college-name">Tennessee State</h3>
                <p>
                  Tennessee State admissions:{' '}
                  <a
                    href="https://www.tnstate.edu/admissions/apply1.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Financial Aid:{' '}
                  <a
                    href="https://www.tnstate.edu/financial_aid/scholarships.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Recruitment Team:{' '}
                  <a
                    href="https://www.tnstate.edu/admissions/recruitment/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Summer Academic Enrichment Pre-College Program:{' '}
                  <a
                    href="https://www.tnstate.edu/engineering/precollege.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  College of Agriculture Summer Apprenticeship Program PDF:{' '}
                  <a
                    href="https://www.tnstate.edu/agriculture/documents/Summer%20Apprenticeship%20Program%20Application%202019-1%20revised.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Florida A&M</h3>
                <p>
                  Florida A&M admissions:{' '}
                  <a
                    href="https://admissions.famu.edu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Pre-College Science & Engineering Summer Camps:{' '}
                  <a
                    href="https://eng.famu.fsu.edu/prospective/summer-camps"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">North Carolina A&T</h3>
                <p>
                  North Carolina A&T Undergraduate Admissions:{' '}
                  <a
                    href="https://www.ncat.edu/admissions/undergraduate/index.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Freshmen Scholarships:{' '}
                  <a
                    href="https://www.ncat.edu/admissions/financial-aid/types-of-aid/scholarships/freshmen-scholarships.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Summer Programs for High School Students:{' '}
                  <a
                    href="https://www.ncat.edu/caes/future-students/summer-programs-for-high-school-students.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Alabama A&M</h3>
                <p>
                  Incoming Freshman Students:{' '}
                  <a
                    href="https://www.aamu.edu/admissions-aid/undergraduate-admissions/incoming-freshman-students.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Academic Scholarships:{' '}
                  <a
                    href="https://www.aamu.edu/admissions-aid/financial-aid/scholarships/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  STEM Knowledge Center:{' '}
                  <a
                    href="https://www.aamu.edu/academics/colleges/engineering-technology-physical-sciences/research-outreach-centers/stem-knowledge-center/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Howard University</h3>
                <p>
                  First Year Admission:{' '}
                  <a
                    href="https://admission.howard.edu/undergraduate/first-year.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Financial Support:{' '}
                  <a
                    href="https://admission.howard.edu/financialsupport"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  High School Summer Enrichment Science Academy:{' '}
                  <a
                    href="https://pharmacy.howard.edu/centers-grant-programs/center-excellence/high-school-summer-enrichment-science-academy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Jackson State</h3>
                <p>
                  Undergraduate Admissions and Recruitment:{' '}
                  <a
                    href="https://www.jsums.edu/admissions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Scholarships:{' '}
                  <a
                    href="https://sites.jsums.edu/scholarships/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Alabama State</h3>
                <p>
                  Undergraduate Admissions:{' '}
                  <a
                    href="https://www.alasu.edu/admissions/undergraduate-admissions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  ASU Academic Scholarships:{' '}
                  <a
                    href="https://www.alasu.edu/admissions/undergrad-admissions/asu-academic-scholarships"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Xavier</h3>
                <p>
                  First Time Freshmen:{' '}
                  <a
                    href="https://www.xula.edu/firsttimefreshmen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Academic Scholarships:{' '}
                  <a
                    href="https://www.xula.edu/scholarships/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Praire View</h3>
                <p>
                  Freshman Admissions:{' '}
                  <a
                    href="https://www.pvamu.edu/admissions/freshman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Financial Aid:{' '}
                  <a
                    href="https://www.pvamu.edu/faid/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Youth and Teen Summer Camps:{' '}
                  <a
                    href="https://www.pvamu.edu/student-success/summer/youth/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  STEM Brochure:{' '}
                  <a
                    href="https://www.pvamu.edu/academicaffairs/wp-content/uploads/sites/20/STEMBrochure.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
              <div className="college">
                <h3 className="college-name">Morgan State</h3>
                <p>
                  Undergraduate Admission & Recruitment:{' '}
                  <a
                    href="https://www.morgan.edu/undergradadmissions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Scholarships & Grants:{' '}
                  <a
                    href="https://www.morgan.edu/finaid/scholarships"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
                <p>
                  Summer Academy of Actuarial and Mathematical Sciences :{' '}
                  <a
                    href="https://www.morgan.edu/saams"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here.
                  </a>
                </p>
              </div>
            </Colleges>
            <div className="btn">
              <Button>Contact us today!</Button>
            </div>
          </div>
        </section>
      </StemLayout>
    </>
  )
}

const Colleges = styled.div`
  .college {
    margin-top: 4rem;
    margin-bottom: 4rem;
    background-color: #eee;
    padding: 4rem;
  }
`

export default Team
