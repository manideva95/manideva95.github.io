import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import skypeIcon from '../../assets/skype.png'
import typescriptIcon from "../../assets/typescript-icon.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>D</span>
        <span>eva</span>
      </a>
      <div>
        <p>
          This site was made with a <img src={reactIcon} alt="React" /> &
          <img src={typescriptIcon} alt="Typescript" /> lot of
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/manideva/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/manideva95"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/manideva6/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://join.skype.com/invite/UygaMPyccCrj"
          target="_blank"
          rel="noreferrer"
        >
          <img src={skypeIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
