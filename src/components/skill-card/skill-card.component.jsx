import {
  ScSkill,
  ScDescription,
  ScSkillCardContainer,
  ScSkillIcons,
  ScTitle,
} from "./skill-card.styles";

const SkillCard = ({ title, description, tech, isFirst=false, isLast=false, delay=0}) => {
  return (
    <ScSkillCardContainer isFirst={isFirst} isLast={isLast} delay={delay}>
      <ScTitle>{title}</ScTitle>
      <ScDescription>{description}</ScDescription>
      <ScSkillIcons>
        {
          tech.map(({name, icon}, idx) => {
            const Icon = icon;
            return (
              <ScSkill key={idx}>
                <Icon />
                <div>{name}</div>
              </ScSkill>
            );
        })
      }
      </ScSkillIcons>
    </ScSkillCardContainer>
  );
};

export default SkillCard;
