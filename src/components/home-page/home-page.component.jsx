import {
  ScArrowGifContainer,
  ScHomePageContainer,
  ScIntroContainer,
  ScPassionContainer,
  ScPassion,
  ScMainContainer,
  ScProfilePic,
  ScScrollMessage,
  ScGreeting,
  ScPassionText,
} from "./home-page.styles";
import profilePic from "../../assets/images/profile.jpg";
import arrowGif from "../../assets/gif/icons8-double-down.gif";
import TypeWriter from "../typewriter/typewriter.component";
import RollingText from "../rolling-text/rolling-text.component";
import { useEffect, useState, Fragment } from "react";

const HomePage = () => {
  const jobTitles = [
    "maker",
    "maker",
    "fitness enthusiast",
    "problem solver",
    "aspiring entrepreneur",
    "full-stack developer",
  ];

  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(true);
    }, 500);
  }, []);

  return (
    <ScHomePageContainer id="home-page">
      <ScMainContainer>
        <ScProfilePic src={profilePic} />
        <ScIntroContainer>
          <ScGreeting>
            <TypeWriter content="Hi, im Hao Ye" speed={50} />
          </ScGreeting>
          <ScPassionContainer>
          {showIntro && (
            <Fragment>
              <ScPassionText>I am a</ScPassionText>
              <ScPassion>
                <RollingText texts={jobTitles} interval={800} delay={0} />
              </ScPassion>
            </Fragment>
          )}
          </ScPassionContainer>
        </ScIntroContainer>
      </ScMainContainer>

      <ScScrollMessage>
        <ScArrowGifContainer>
          <img src={arrowGif} height="25" width="25" alt='arrow'/>
        </ScArrowGifContainer>
        Scroll to view more
      </ScScrollMessage>
    </ScHomePageContainer>
  );
};

export default HomePage;
