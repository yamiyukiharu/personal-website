import AboutPage from './components/about-page/about-page.component';
import HomePage from './components/home-page/home-page.component';
import NavBar from './components/nav-bar/nav-bar.component';
import { ScAppContainer } from './App.styles';
import ProjectsPage from './components/projects-page/projects-page.component';
import ContactPage from './components/contact-page/contact-page.component';
import { Fragment, useEffect, useState } from 'react';

const App = () => {
  const [showContents, setShowContents] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowContents(true)
    }, 5000)
  },)

  return (
    <ScAppContainer>
      <div className='nav-bar'> <NavBar/> </div>
      <HomePage/>
      {
        showContents && (
          <Fragment>
            <AboutPage/>
            <ProjectsPage/>
            <ContactPage/>
          </Fragment>
        )
      }

    </ScAppContainer>
  )
}

export default App;
