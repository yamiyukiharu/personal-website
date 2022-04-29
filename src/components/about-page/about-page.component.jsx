import SkillCard from "../skill-card/skill-card.component";
import { ScAboutPageContainer, ScCards, ScTitle } from "./about-page.styles";
import { skills } from "../../content/skills";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [rollCards, setRollCards] = useState(false);

  useEffect(() => {
      const onScroll = () => window.pageYOffset > 350 && setRollCards(true)
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ScAboutPageContainer id="about-page">
      <ScTitle>Things I do</ScTitle>
      <ScCards>
        { rollCards &&
          skills.map((skill, idx) => {
            const { title, description, tech } = skill;
            if (idx === 0) {
              return (
                <SkillCard key={idx} title={title} description={description} tech={tech} isFirst={true} delay={0}/>
              );
            } else if (idx === skills.length-1) {
              return (
                <SkillCard key={idx} title={title} description={description} tech={tech} isLast={true} delay={idx / 6}/>
              );
            } else {
              return (
                <SkillCard key={idx} title={title} description={description} tech={tech} delay={idx / 6}/>
              )
            }

        })}
      </ScCards>
    </ScAboutPageContainer>
  );
};

export default AboutPage;
