import styled from 'styled-components'
import Link from 'next/link'
import Button from '../components/Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
}) => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <Link href={buttonLink} passHref rel="noreferrer">
              <a>
                <WhiteButton>{buttonText}</WhiteButton>
              </a>
            </Link>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('span')`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  min-height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin-top: -100px;
  max-width: 100vw;

  @media only screen and (min-device-width: 360px) {
    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }

  .content {
    max-width: 90%;
    text-align: center;
    font-weight: 700;
  }
`

const WhiteButton = styled(Button)`
  border: #fff;
  background-color: #e41e2f;
  color: #fff;
  font-size: 0.8rem;
  padding: 1.2rem 1.4rem;
  margin: 2rem 0;
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-device-width: 320px) and (orientation: landscape) {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.6rem;
    font-size: 1rem;
  }
`

export default HeroSection
