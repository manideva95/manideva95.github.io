import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import { useEffect, useRef } from "react";
import { init } from "ityped";

export function Hero() {
  const textRef = useRef() as React.MutableRefObject<HTMLInputElement>


  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["React", "React Native", "Node Js", "Full Stack"],
    });
  }, []);
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Mani Deva</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          {/* <h3>Full Stack Developer</h3> */}
          <h3>
            <span ref={textRef}></span> Developer
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I'm a computer technician with a focus on web development with JavaScript.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contato" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <a href="https://app.daily.dev/manideva">
        <img src="https://api.daily.dev/devcards/fe6bd88d1c5a42099ee4ed4bbf0cc5f7.png?r=1bh" width="400" alt="Deva's Dev Card" />
      </a>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}