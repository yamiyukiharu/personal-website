import {
  ScNavBarContainer,
  ScAppName,
  ScSection,
} from "./nav-bar.styles";

const NavBar = () => {

  const homeHandler = () => {
    const anchor = document.querySelector('#home-page');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } 

  const aboutHandler = () => {
    const anchor = document.querySelector('#about-page');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const projectsHandler = () => {
    const anchor = document.querySelector('#projects-page');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const contactHandler = () => {
    const anchor = document.querySelector('#contact-page');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ScNavBarContainer>
      <ScAppName onClick={homeHandler}>HY</ScAppName>
      <ScSection onClick={aboutHandler}>About</ScSection>
      <ScSection onClick={projectsHandler}>Projects</ScSection>
      <ScSection onClick={contactHandler}>Contact</ScSection>

    </ScNavBarContainer>
  );
};

export default NavBar;
